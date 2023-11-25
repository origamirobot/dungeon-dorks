import { OptionBase } from ".";

export type ProgressBarOptions = OptionBase & {
	statusTextFont: string,
	statusTextColor: string,
	statusTextSize: number,
	percentTextFont: string,
	percentTextColor: string,
	percentTextSize: number,
	background: string,
	barColor: string,
	width: number,
	height: number,
	padding: number, 
};