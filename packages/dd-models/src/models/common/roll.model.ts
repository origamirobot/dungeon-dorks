
export class Roll {
	
	/**
	 * The number of sides to this die.
	 */
	sides: number;
	/**
	 * The number of times to roll this die.
	 */
	amount: number;
	/**
	 * The amount to add to the die roll.
	 */
	modifier: number | undefined;


	constructor(sides: number, amount: number, modifier?: number){
		this.sides = sides;
		this.amount = amount;
		this.modifier = modifier;
	}

	/**
	 * Rolls the die and returns a random number.
	 */
	public roll(): number {
		let total = 0;

		for(let i = 0; i < this.amount; i++){
			const result = Math.ceil(Math.random() * this.sides);
			total += result;
		}
		return total + (this.modifier ?? 0);
	}

	
}
