import { Game } from "phaser";
import { EncounterProps } from "../models";
import { Settings } from 'dd-config';

declare const game: Game;

export class EncounterService {

	constructor(
		private settings: Settings,
		private props: EncounterProps) {
		
	}


}