
export type DialogBoxSettings = {
	/** Color of the dialog box border */
	borderColor: string,
	/** Thickness of the dialog box border */
	borderThickness: number,
	/** Alpha value of the dialog box border */
	borderAlpha: number,
	/** Alpha value of the dialog box window */
	windowAlpha: number,
	/** Background color of the dialog box */
	windowBackground: string,
	/** Height of the dialog box */
	windowHeight: number,
	/** The alignment of text that's displayed in the dialog box */
	align: string,
	/** The name of the font for the text in the dialog box */
	font: string,
	/** The size of the text in the dialog box */
	fontSize: number,
	/** The amount of padding to add to the dialog box */
	padding: number,
	/** The amount of margin to add to the dialog box */
	margin: number,
	/** The speed at which the text is animated */
	textSpeed: number,
	/** A value indicating if the text should be animated */
	animateText: boolean
};