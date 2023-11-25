
/**
 * Takes a list of GameObjects and increments their Y value the specified amount each time.
 * @param items the items to increment the Y value of.
 * @param amount The amount to increment the Y value on each step.
 * @param start The initial Y value to start at. If this is null, use the Y value of the first item in the list.
 */
export function IncrementY(items:Phaser.GameObjects.Components.Transform[], amount: number, start?: number): void {

	if(items == null || items.length == 0)
		return;
	
	let y = start != null ? start : items[0].y;
	items.forEach((item) => {
		item.y = y;
		y += amount;
	});

}

/**
 * Takes a list of GameObjects and increments their Y value the specified amount each time.
 * @param items the items to increment the Y value of.
 * @param amount The amount to increment the Y value on each step.
 * @param start The initial Y value to start at. If this is null, use the Y value of the first item in the list.
 */
export function IncrementX(items:Phaser.GameObjects.Components.Transform[], amount: number, start?: number): void {

	if(items == null || items.length == 0)
		return;
	
	let x = start != null ? start : items[0].x;
	items.forEach((item) => {
		item.x = x;
		x += amount;
	});

}

