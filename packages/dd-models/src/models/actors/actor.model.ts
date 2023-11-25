import { Vector } from '../common';
import { Direction } from '../topography';

/**
 * Represents the basic information about an NPC.
 * While the NPC class is a game object, this class is 
 * simply used to define interactions with an NPC character.
 */
export type Actor = {

	/** The name of this actor. This is also used to idenfity them, as well as assign the sprite they will use */
	name: string;

	/** The sprite to use for this actor. */
	sprite: string;

	/** A collection of strings of dialog this character will display when  you interact with them. */
	dialog: string[] | undefined;

	/** The bubble that surrounds an npc to they can interact with dialog at a distance */
	interactionOffset: number;

	/** Represents the location this NPC will appear in game. */
	spawnPoint: Vector;

	/** The direction this NPC will face when spawned. */
	direction: Direction;

	/** A value indicating if this NPC will stare at the player as they move about the scene. */
	stare: boolean;

	/** A value indicating if this NPC will randomly wander around the scene or stay put. */
	wanders: boolean;

	/** The width of each frame in this actor's sprite sheet */
	frameWidth: number;

	/** The height of each frame in this actor's sprite sheet */
	frameHeight: number;

	/** The frame numbers that make up this actor's idle animation */
	idleFrames: number[] | undefined;

	/** The frame numbers that make up this actor's attack animation */
	attackFrames: number[] | undefined;

	/** If the current record has one of these milstones, include this NPC in the scene */
	requiredMilestones: string[] | undefined ;

	/** If the current record has one of these milestones, exclude this NPC from the scene */
	excludeMilestones: string[] | undefined;

};