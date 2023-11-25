import { Scene } from 'phaser';
import { Music } from 'dd-models';
import { Settings } from 'dd-config';

export abstract class BaseScene extends Scene {


	constructor(key: string,
		protected settings: Settings) {
			super({ key: key })
		}


	/** Fires during Phaser's preload phase. Preloads assets needed by this scene */
	preload(): void {}

	/** Fires when this scene is initialized. */
	init(): void {}

	/** Fires during Phaser's creation phase. Creates assets needed by this scene. */
	create(): void {}

	/** Fires during Phaser's update phase. */
	update(): void {}

	/**
	 * Hides the sound.play method behind a config value so 
	 * audio can be turned on or off in settings.
	 * @param key The key to the audio file to play.
	 */
	playSound(key: string | Music): void {
		if(this.settings.audio.enableSound)
			return;

		if(typeof key == "string") {
			this.sound.play(key);
		} else {
			const music = key as Music;
			const audio = this.sound.add(music.key, { loop: music.loop, mute: music.mute, delay: music.delay, volume: music.volume });
			audio.play();
		}
	}

	/**
	 * Hides the sound.play method behind a config value so 
	 * audio can be turned on or off in settings.
	 * @param key The key to the audio file to play.
	 */
	playMusic(key: string | Music): void {
		if(this.settings.audio.enableMusic)
			return;

		if(typeof key == "string") {
			this.sound.play(key);
		} else {
			const music = key as Music;
			const audio = this.sound.add(music.key, { loop: music.loop, mute: music.mute, delay: music.delay, volume: music.volume });
			audio.play();
		}
	}

	/** Stops all sound from playing. */
	stopSound(): void {
		this.sound.stopAll();
	}

	/**
	 * Removes this scene from the scene list.
	 */
	destroy(): void {
		this.scene.remove(this.scene.key);
	}

	/**
	 * Checks to see if a scene exists, then destroys it.
	 * @param key 
	 */
	removeSceneIfExists(key: string) {
		const existing = this.scene.get(key);
		if(existing) {
			this.events.once('destroy', () => {});
			this.scene.remove(key);
		}
	}

	/**
	 * Removes this scene from the game
	 * @param key 
	 */
	removeSelf() {
		const key = this.scene.key;
		this.removeSceneIfExists(key);
	}


}