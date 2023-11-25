import { Settings } from "dd-config";
import { BaseScene } from ".";
import { Menu } from "dd-controls";
import { Logger } from "dd-logger";
import { Game } from 'phaser';
declare const game: Game;


export class StartScene extends BaseScene {


	private menu: Menu | undefined;
	private readonly newGameText: string = 'NEW GAME';
	private readonly continueText: string = 'CONTINUE';	
	private readonly clearText: string = 'CLEAR';


	constructor(
		settings: Settings,
		private logger: Logger) {
		super('START', settings);
	}



	/**
	 * Fires during Phaser's creation phase. Creates assets needed by this scene.
	 */
	public create(): void {
		this.logger.debug(`[SCENE] StartScene creation called`);
		super.create();

		const x = ((this.settings.game.width / 2) - 100);
		const y = ((this.settings.game.height / 2) - 50);
		this.menu = new Menu({
			x: x,
			y: y,
			scene: this, 
			actionKey: this.settings.controller.actionKey,
			upKey: this.settings.controller.upKey,
			downKey: this.settings.controller.downKey,
			selectedColor: '#F8FF38',
			unselectedColor: '#FFFFFF',
			cursor: true,
			font:'DisposableDroid BB',
			fontSize: 40,
			spacing: 5,
			disabledColor: '#999999',
			highlightCallback: () => {},
			shadow: { xOffset: 3, yOffset: 3, color: '#333333', blur: 0 },
			selectedCallback: this.selected,
			context: this, 
		});
		this.menu.addMenuItem([this.newGameText, this.continueText]);

		if(this.settings.game.debug){
			this.menu.addMenuItem(this.clearText);
		}

		this.add.existing(this.menu);
	}



	
	/**
	 * Fires when an item from the menu is selected.
	 * @param item The item that was selected from the menu.
	 */
	public selected(item: string): void {
		switch(item){
			case this.newGameText:
				return this.newGame();
			case this.continueText:
				return this.continueGame();
			case this.clearText:
				this.clearSaveGames();
		}
	}

	/**
	 * Called when the player selects "NEW GAME" on the menu.
	 */
	protected newGame(): void {
		this.logger.debug(`[SCENE] Player selected new game`);

	}

	/**
	 * Called when the player selects "CONTINUE" on the menu.
	 */
	protected continueGame(): void {
		this.logger.debug(`[SCENE] Player selected continue`);

	}

	protected clearSaveGames(): void {

	}

}