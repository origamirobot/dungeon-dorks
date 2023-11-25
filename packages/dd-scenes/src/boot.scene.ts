import { Settings } from "dd-config";
import { BaseScene, PreloadScene } from ".";
import { Logger } from "dd-logger";



/**
 * The first scene that is responsible for booting this game.
 */
export class BootScene extends BaseScene {

	constructor(
		settings: Settings,
		private logger: Logger) {
		super('BOOT', settings);
	}

	create(): void {
		super.create();
		this.logger.debug('[SCENE] Boot scene created');
		const preloadScene = new PreloadScene(this.settings, this.logger);
		this.scene.add('PRELOAD', preloadScene, true);
	}

}