import { AudioSettings } from "./audio.settings";
import { ChanceSettings } from "./chance.settings";
import { CharacterSettings } from "./character.settings";
import { CombatSettings } from "./combat.settings";
import { ControllerSettings } from "./controller.settings";
import { DialogBoxSettings } from "./dialog-box.settings";
import { ExperienceSettings } from "./experience.settings";
import { GameSettings } from "./game.settings";
import { MapSettings } from "./map.settings";
import { ProgressBarSettings } from "./progress-bar.settings";
import { ServiceSettings } from "./service.settings";


export interface Settings {

	audio: AudioSettings;
	controller: ControllerSettings;
	game: GameSettings;
	progressBar: ProgressBarSettings;
	experience: ExperienceSettings;
	chance: ChanceSettings;
	character: CharacterSettings;
	combat: CombatSettings;
	dialogBox: DialogBoxSettings;
	map: MapSettings;
	service: ServiceSettings;
}
