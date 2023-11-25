import { GetSceneObject } from 'phaser-utils';
import { GameObjects } from 'phaser';


export type FadeConfig = {
	delay: number,
	duration: number,
	start: number,
	end: number,
}

export enum FadeMode {
	stop = 0,
	destroy = 1,
	yoyo = 2
}

/**
 * Applies a fade effect to a GameObject.
 */
export class FadeEffect {


	private scene : Phaser.Scene;
	private tween : Phaser.Tweens.Tween | undefined;
	private mode: FadeMode | undefined;
	private delay: number = 0;
	private duration: number = 1000;
	private alphaStart: number = 1;
	private alphaEnd: number = 0;

	/**
	 * Initializes a new instance of the FadeEffect class.
	 * @param gameObject The game object to apply this fade to.
	 * @param config Optional configuration values for this fade effect.
	 */
	constructor(
		private gameObject: GameObjects.GameObject & GameObjects.Components.Alpha, 
		private config: FadeConfig){


		if(config != null){
			this.delay = this.config.delay;
			this.duration = this.config.duration;
			this.alphaStart = this.config.start;
			this.alphaEnd = this.config.end;
		}		
		this.scene = GetSceneObject(gameObject);
		this.gameObject.on('destroy', this.destroy, this);
	}

	/**
	 * Sets the alpha start and finish.
	 * @param start the start value of the fade
	 * @param end the end value of the fade.
	 */
	public setAlphaRange(start: number, end: number): FadeEffect{
		this.alphaStart = start;
		this.alphaEnd = end;
		return this;
	}

	/**
	 * Sets the amount of time to wait before fading.
	 * @param time the amount of time to wait before fading.
	 */
	public setDelay(time: number): FadeEffect{
		this.delay = time;
		return this;
	}

	/**
	 * Sets the length of time to fade.
	 * @param duration the length of time to fade.
	 */
	public setDuration(duration: number): FadeEffect{
		this.duration = duration;
		return this;
	}

	/**
	 * Sets the fade mode.
	 * @param mode 
	 */
	public setMode(mode: FadeMode): FadeEffect{
		this.mode = mode;
		return this;
	}

	/**
	 * Start the fading.
	 * @param callback The method to call when this fade is done fading.
	 */
	public start(callback?: () => void): FadeEffect {
		if(this.tween)
		return this;

		if(this.duration === 0){
			this.gameObject.alpha = 0;
			this.stop();
			if(callback)
				callback();
			return this;
		}

		this.gameObject.alpha = this.alphaStart;
		this.tween = this.scene.add.tween({
			targets: this.gameObject,
			alpha: this.alphaEnd,
			delay: this.delay,
			duration: this.duration,
			ease: 'Linear',
			yoyo: (this.mode === FadeMode.yoyo),
			repeat: ((this.mode === FadeMode.yoyo) ? -1 : 0),
			onComplete: callback != null ? callback : undefined,
			onCompleteScope: this
		});
		return this;
	}

	/**
	 * Stop the fading.
	 */
	public stop(): FadeEffect {
		if(!this.tween)
			return this;

		this.tween.stop();
		this.tween = undefined;
		return this;
	}

	/**
	 * Shuts down the references in this object.
	 */
	protected shutdown(): FadeEffect {
		this.stop();
		// TODO: Possible memory leak here. How do I model this in typescript?
		// this.gameObject = undefined;
		// this.scene = undefined;
		return this;
	}

	/**
	 * Destroys the references in this object.
	 */
	public destroy(): FadeEffect {
		this.shutdown();
		return this;
	}

}

