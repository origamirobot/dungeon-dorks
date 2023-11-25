
/**
 * Converts a number color value to it's hexidecimal equivalent.
 * @param value the number value to convert to a string.
 */
export function NumberToHexColor(value: number): string {
	let result = value.toString(16);
	while(result.length < 6){
		result = `0${result}`;
	}
	return `#${result}`;
}

/** Converts a hex color to a decimal */
export function HexColorToNumber(value: string): number {
	if(value.startsWith('#'))
		value = value.substring(1);
	return parseInt(value, 16);
}

/**
 * Converts the specified number to it's RBGA equivalent. 
 * Returns rgba(1,2,3,4)
 * @param value 
 */
export function NumberToRbgaColor(value: number): string {
	value >>>= 0;
	var b = value & 0xFF,
		g = (value & 0xFF00) >>> 8,
		r = (value & 0xFF0000) >>> 16,
		a = ( (value & 0xFF000000) >>> 24 ) / 255 ;
	return "rgba(" + [r, g, b, a].join(",") + ")";
}

/**
 * Converts RGB values into Hexidecimal values.
 * @param r The red value
 * @param b The blue value
 * @param g The green value
 */
export function RgbToHex(r: number, b: number, g: number): string {
	return Number(0x1000000 + r*0x10000 + g*0x100 + b).toString(16).substring(1);
}
