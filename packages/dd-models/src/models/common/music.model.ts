
/**
 * Settings to use when defining music to play in the background of a terrain.
 */
export type Music = {

	/** The key to the audio file to play */
	key: string,

	/** A value indicating if this file should continue to loop */
	loop: boolean,

	/** A value indicating the volume amount. */
	volume: number,

	/** 
	 * A value indicating if this music should start right away when the scene starts.
	 * This value is used to make music continue playing between scenes.
	 * */
	autoPlay: boolean,

	/** A value indicating if there should be a delay in playing this music. */
	delay: number,

	/** A value indicating if this music should be muted */
	mute: boolean

};