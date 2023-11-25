import { Topography, Direction, WarpToAction, LocationTrigger, LocationTriggerType, Item, ItemType, MilestoneAction, SceneTrigger, SceneTriggerType, DialogTrigger, DialogTriggerType, AudioAction, Potion, DrinkSize } from "src/models";
import { Music } from "src/models/common/music.model";

const sparklehouse_2 = new Topography({
	key: 'sparklehouse_2',
	encounterRate: -1,
	encounters: false,
	mapScale: 1,
	pack: 'assets/packs/sparklehouse.2.pack.json',
	playerScale: 0.6,
	spawnDirection: Direction.Up,
	spawnPoint: new Phaser.Math.Vector2(587, 1415),
	tileset: 'master_tileset',
	music: new Music({ key: 'town_sound' }),
	items: [ ],
	actions: [
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 365,
				y: 432,
				width: 80,
				height: 20,
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(800, 662),
			direction: Direction.Down,
			key: 'sparklehallow_1',
		}),
	]				
});


export { sparklehouse_2 };
