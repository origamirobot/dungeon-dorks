import { Settings } from "../models";

export class SettingsService {
	
	static async loadFromJson(path: string) : Promise<Settings> {

		const result = await fetch(path);
		const settings = await result.json() as Settings;
		return settings;
	}

}