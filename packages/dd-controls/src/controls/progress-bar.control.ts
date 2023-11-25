
import { Game, GameObjects } from 'phaser';
import { ProgressBarOptions } from '../options';
import { Align, HexColorToNumber } from 'phaser-utils';

declare const game: Game;

/** Displays an updatable progress bar for showing loading progress. */
export class ProgressBar extends GameObjects.Container {

	private bar!: GameObjects.Graphics;
	private box!: GameObjects.Graphics;
	private text!: GameObjects.Text;
	private percent!: GameObjects.Text;

	constructor(protected options: ProgressBarOptions) { 
		super(options.scene, options.x, options.y);
		this.create();
	}

	protected create(): void {
		this.bar = this.scene.make.graphics({}, false);
		this.box = this.scene.make.graphics({}, false);

		this.width = this.options.width;
		this.height = this.options.height;

		this.box.fillStyle(HexColorToNumber(this.options.background), 1);
		this.box.fillRect(0, 0, this.width, this.height);

		this.text = this.scene.make.text({ text: 'Loading...', x: this.width / 2, y: this.height / 2 - 50 })
			.setFont(this.options.statusTextFont)
			.setFontSize(this.options.statusTextSize)
			.setColor(this.options.statusTextColor)
			.setOrigin(0.5, 0.5);

		this.percent = this.scene.make.text({ text: '0%', x: this.width / 2, y: this.height / 2  })
			.setOrigin(0.5, 0.5)
			.setFont(this.options.percentTextFont)
			.setFontSize(this.options.percentTextSize)
			.setColor(this.options.percentTextColor);

		this.add(this.box);
		this.add(this.bar);
		this.add(this.text);
		this.add(this.percent);
		Align.centerContainer(this, game.canvas.width, game.canvas.height);
		this.scene.add.existing(this);
	}

	/**
	 * Call this to report and change the progress bar.
	 * @param value The value in percent of how much this progress bar should show.
	 */
	public reportProgress(value: number): void {
		this.bar.clear();
		const percent = value * 100;
		this.percent.setText(`${parseInt(percent.toString())}%`);
		const x = this.options.padding;
		const y = this.options.padding;
		const w = (this.options.width - (this.options.padding * 2)) * value;
		const h = (this.options.height - (this.options.padding * 2));
		this.bar.fillStyle(HexColorToNumber(this.options.barColor), 1);
		this.bar.fillRect(x, y, w, h);
	}

	/**
	 * Destroys the resources used by this control.
	 */
	public destroy(): void {
		this.bar.destroy();
		this.box.destroy();
		this.text.destroy();
		this.percent.destroy();
		super.destroy();
	}


}

