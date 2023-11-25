
/** Settings related to the combat system */
export type CombatSettings = {
	/** The color to display in the list for a character who is dead */
	deceasedListColor: string,
	/** The color to display in the list for a character who is weak */
	weakListColor: string,
	/** The percentage of health that determines if a character is weak or not */
	weakThreshold: number,
	/** The amount of jitter to add to a character when the character is hit */
	attackJitterAmount: number,
	/** A value indicating if the characters should automatically fight or not. Debug settings */
	autoFight: boolean
}