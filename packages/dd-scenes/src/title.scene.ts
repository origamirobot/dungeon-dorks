import { Settings } from "dd-config";
import { BaseScene } from ".";
import { Game, GameObjects } from "phaser";
import { FadeEffect } from 'phaser-effects';
import { StartScene } from "./start.scene";
import { Logger } from "dd-logger";

declare const game: Game;

export class TitleScene extends BaseScene {

	private titleText!: GameObjects.Text;
	private enterText!: GameObjects.Text;
	private clouds!: GameObjects.TileSprite;
	private mountains!: GameObjects.TileSprite;
	private trees1!: GameObjects.TileSprite;
	private trees2!: GameObjects.TileSprite;


	constructor(
		settings: Settings,
		private logger: Logger) {
		super('TITLE', settings);
	}


	init(): void {
		this.logger.debug('[SCENE] Title scene initialized');
		this.input.keyboard?.on(this.settings.controller.startKey, this.continue, this);
	}

	preload(): void {
		this.logger.debug('[SCENE] Title scene preloading');
		this.load.pack("title_pack","./assets/packs/title.pack.json","preload");
	}

	public create(): void {
		this.logger.debug('[SCENE] Title scene creating');
		this.playMusic('intro-music');
		var centerX = this.cameras.main.width / 2;
		this.cameras.main.setBackgroundColor(0x000000);
		this.clouds = this.add.tileSprite(0, 200, 2000, 600, 'clouds');
		this.mountains = this.add.tileSprite(0, 500, 2000, 600, 'mountains');
		this.trees1 = this.add.tileSprite(0, 400, 2000, 600, 'trees-far');
		this.trees2 = this.add.tileSprite(0, 280, 2000, 600, 'trees-near');
		
		this.titleText = this.add.text(centerX, 250, this.settings.game.title)
			.setOrigin(0.5, 0.5)
			.setFont(this.settings.game.font)
			.setFontSize(100)
			.setColor('#FF9D00')
			.setStroke('#000000', 5)
			.setShadow(5, 5, '#000000', 1);

		this.enterText = this.add.text(centerX, 350, "PRESS ENTER")
			.setOrigin(0.5, 0.5)
			.setShadow(3, 3, '#000000', 1)
			.setFont(this.settings.game.font)
			.setFontSize(30);
	}

	/**
	 * Fires during Phaser's update phase.
	 */
	public update(): void {
		this.mountains.tilePositionX -= 0.1;
		this.trees1.tilePositionX -= 0.3;
		this.trees2.tilePositionX -= 0.8;
	}

	continue(): void {
		this.logger.debug('[SCENE] Title scene continue pressed');
		this.stopSound();
	
		const fadeConfig = {
			delay: 0,
			start: 1,
			 end: 0,
			 duration: 500
		};

		const titleFade = new FadeEffect(this.titleText, fadeConfig);
		titleFade.start(() => {
			new FadeEffect(this.mountains, fadeConfig).start();
			new FadeEffect(this.trees1, fadeConfig).start();
			new FadeEffect(this.trees2, fadeConfig).start();
			new FadeEffect(this.enterText, fadeConfig).start();
			new FadeEffect(this.clouds, fadeConfig).start(() => {
				this.playSound(this.settings.audio.gameStartKey);
				
				const startScene = new StartScene(this.settings);
				this.scene.add('START', startScene, false);
				this.scene.start('START');
				this.removeSelf();
			});
		});




	}

}