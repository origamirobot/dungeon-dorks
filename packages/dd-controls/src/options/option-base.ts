import { Scene } from "phaser";

/**
 * Defines a base class that all option classes must inherit from.
 */
export type OptionBase = {

	/** The scene this control is being added to */
	scene: Scene,

	/** The x coordinate of where to place this control */
	x: number,

	/** The x coordinate of where to place this control */
	y: number,

}
