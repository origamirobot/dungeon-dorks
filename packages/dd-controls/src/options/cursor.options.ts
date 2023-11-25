import { Direction } from 'dd-models';
import { Scene } from 'phaser';

/**
 * Options passed to the cursor control.
 */
export type CursorOptions = {

	/** The scene the cursor is being added to. */
	scene: Scene;

	/** The x coordinate of this control */
	x: number;

	/** The y coordinate of this control */
	y: number;

	/** The direction this cursor should face */
	direction: Direction;

	/** Should the cursor blink */
	blink: boolean ;

}
