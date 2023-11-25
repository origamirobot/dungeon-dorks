import './style.css'
import { SettingsService } from 'dd-config';
import { DDGame } from './game';
import { Logger } from 'dd-logger';

/**
 * Initializes this game when the window is loaded. 
 * Instantiates a new Game object and assigns it to the game
 * property of the window object.
 */
window.onload = async () => {
	console.log('[START] Initializing game object');

	const settings = await SettingsService.loadFromJson('/assets/settings.json');
	const logger = new Logger(settings);
	const game = new DDGame(settings, logger);

	if(window != null){
		(<any>window).game = game;
	}
	
}
