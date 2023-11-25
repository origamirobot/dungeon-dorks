import { Settings } from "dd-config";
import { BaseScene, TitleScene } from ".";
import { Game } from "phaser";
import { ProgressBar  } from "dd-controls";
import { Logger } from "dd-logger";

declare const game: Game;

/**
 * The scene responsible for preloading all of the assets needed by this game.
 */
export class PreloadScene extends BaseScene {

	progressBar!: ProgressBar;


	constructor(
		settings: Settings,
		private logger: Logger) {
			super('PRELOAD', settings);
	}


	preload(): void {
		super.preload();

		this.progressBar = new ProgressBar({
			x: 0,
			y: 0,
			scene: this,
			statusTextFont: 'DisposableDroid BB',
			statusTextColor: '#FFFFFF',
			statusTextSize: 30,
			percentTextFont: 'DisposableDroid BB',
			percentTextColor: '#000000',
			percentTextSize: 30,
			background: '#FFFFFF',
			barColor: '#FF9D00',
			width: 400,
			height: 40,
			padding: 5, 
					
		});
		this.load.on('progress', this.progressBar.reportProgress, this.progressBar);
		this.load.on('complete', this.progressBar.destroy, this.progressBar);
		this.load.on('complete', this.complete, this);

		// PRELOAD ASSETS
		this.load.pack("preload_pack", "./assets/packs/preload.pack.json", "preload");
		this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
		this.logger.debug('[SCENE] Preload scene preloaded');
	}

	create(): void {
		super.create();
		this.loadAnimations();
		this.logger.debug('[SCENE] Preload scene created');
	}

	complete(): void {
		this.logger.debug('[SCENE] Preload scene complete');
		this.time.delayedCall(this.settings.game.delayLoading, () => {
			const titleScene = new TitleScene(this.settings, this.logger);
			this.scene.add('TITLE', titleScene, true);
		}, undefined, this);
	}


	private loadAnimations() {
		// TODO: Preload animations here
	}




}