import { CursorOptions } from "../options";
import { Direction } from "dd-models";

/**
 * Displays a cursor icon.
 */
export class Cursor extends Phaser.Physics.Arcade.Sprite {


	private _blink: boolean = false;
	private _blinkEvent: Phaser.Time.TimerEvent | undefined;

	/** Gets a value indicating if this control is blinking */
	get blink(): boolean { return this._blink; }

	/** Sets the blinking of this control */
	set blink(value: boolean) { 
		this._blink = value; 
		if(this._blink) { 
			this.setBlink(); 
		} else {
			this.stopBlink();
		}
	}


	/** Creates an instance of this class */
	constructor(protected options: CursorOptions){
		super(options.scene, options.x, options.y, 'cursor');
		switch(options.direction){
			case Direction.Down: 
				this.setFrame('down');
				break;
			case Direction.Left: 
				this.setFrame('left');
				break;
			case Direction.Right: 
				this.setFrame('right');
				break;
			case Direction.Up: 
				this.setFrame('up');
				break;
		}

		if(options.blink)
			this.setBlink();

	}

	/**
	 * Creates the blinking for this cursor
	 */
	protected setBlink(): void {
		this._blink = true;
		let blinked = true;
		this._blinkEvent = this.options.scene.time.addEvent({ loop: true, delay: 100, callback: () => {
			this.setAlpha(blinked ? 0.8 : 1);
			blinked = !blinked;
		}});
	}

	/** Stops this cursor from blinking */
	protected stopBlink(): void {
		this._blinkEvent?.destroy();
		this.setAlpha(1);
	}

}
