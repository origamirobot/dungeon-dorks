
import { Settings } from 'dd-config';
import { BootScene } from 'dd-scenes';
import { Logger } from 'dd-logger';
import { Game, AUTO } from 'phaser';



export class DDGame extends Game {

	constructor(
		private settings: Settings,
		private logger: Logger) {
		super({
			title: settings.game.title,
			version: settings.game.version,
			width: settings.game.width,
			height: settings.game.height,
			fps: { target: settings.game.framesPerSecond },
			type: AUTO,
			parent: "game",
			zoom: settings.game.zoom,
			input: { keyboard: true, mouse: false, touch: false, gamepad: false },
			physics: { 
				default: 'arcade', 
				arcade: { 
					debug: settings.game.debug,
					gravity: { 
						y: 0 
					}
				}
			}
		});

		const bootScene = new BootScene(settings, logger);
		this.scene.add('BOOT', bootScene);
		this.scene.start('BOOT');

		if(settings.game.fullScreen) {
			window.onresize = () => this.resizeGame();
			this.resizeGame();
		}
	}


	resizeGame(): void {
		const canvas = document.querySelector('#game') as HTMLCanvasElement;
		if(!canvas)
			return;

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;
		const windowRatio = windowWidth / windowHeight;
		const gameRatio = this.settings.game.width / this.settings.game.height;
	
		if(windowRatio < gameRatio){
			canvas.style.width = windowWidth + 'px';
			canvas.style.height = (windowWidth / gameRatio) + 'px';
		} else {
			canvas.style.width = (windowHeight * gameRatio) + 'px';
			canvas.style.height = windowHeight + 'px';
		}
	}


}