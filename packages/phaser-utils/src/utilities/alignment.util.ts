import { GameObjects } from "phaser";


export class Align{


	/**
	 * Aligns the specified game object in the center of the game screen.
	 * @param obj 
	 */
	static centerContainer(container: GameObjects.Container, w: number, h: number): void {
		const gameWidth = w;
		const gameHeight = h;
		const height = container.displayHeight;
		const width = container.displayWidth;
		const x = (gameWidth / 2) - (width / 2);
		const y = (gameHeight / 2) - (height / 2);		
		container.setPosition(x, y);
	}

}
