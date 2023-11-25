import { LogLevel } from ".";

export type GameSettings = {

	/** A value indicating if we're currently in debug mode */
	debug: boolean;

	/** The width of the canvas this game is rendered to */
	width: number;

	/** The height of the canvas this game is rendered to */
	height: number;

	/** The default zoom level */
	zoom: number;

	/** The title of this game */
	title: string;

	/** The default font to use when rending text */
	font: string;

	/** The version of this game */
	version: string;

	/** A value indicating if this game should be displayed full screen */
	fullScreen: boolean;

	/** Debug option to show the collision boxes for all assets */
	showCollisionBox: boolean;

	/** The amount of time in milliseconds to delay the loading of a scene */
	delayLoading: number;

	/** The number of frames to display per second. */
	framesPerSecond: number;

	/** Log level */
	logLevel: LogLevel;

}