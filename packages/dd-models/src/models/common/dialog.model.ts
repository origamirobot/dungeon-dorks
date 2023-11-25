
/** Represents dialog spoken by an NPC character. */
export type Dialog = {
	
	/** The text of this dialog */
	text: string[],

	/** Only use this dialog if the specified milestone has been achieved. */
	milestone: string | undefined
	
}