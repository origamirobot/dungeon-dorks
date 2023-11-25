import { Topography, Direction, WarpToAction, LocationTrigger, LocationTriggerType, Item, ItemType, MilestoneAction, SceneTrigger, SceneTriggerType, DialogTrigger, DialogTriggerType, AudioAction, Potion, DrinkSize } from "src/models";
import { Music } from "src/models/common/music.model";

const sparklehallow_1 = new Topography({
	key: 'sparklehallow_1',
	encounterRate: -1,
	encounters: false,
	name: 'Sparkle Hallow',
	mapScale: 1,
	pack: 'assets/packs/sparklehallow.1.pack.json',
	playerScale: 0.6,
	spawnDirection: Direction.Up,
	spawnPoint: new Phaser.Math.Vector2(587, 1415),
	tileset: 'master_tileset',
	music: new Music({ key: 'town_sound' }),
	items: [ ],
	actions: [
		new MilestoneAction({
			trigger: new SceneTrigger({
				type: SceneTriggerType.start
			}),
			name: 'reached_sparklehallow'
		}),
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 290,
				y: 1048,
				width:60,
				height: 20,
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(424, 383),
			direction: Direction.Up,
			music: new Music({ key: 'door_sound', loop: false, volume:0.5 }),
			key: 'sparklehouse_1'
		}),
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 800,
				y: 632,
				width: 50,
				height: 20,
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(424, 383),
			direction: Direction.Up,
			music: new Music({ key: 'door_sound', loop: false, volume:0.5 }),
			key: 'sparklehouse_2'
		}),
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 250,
				y: 358,
				width: 50,
				height: 20,
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(424, 383),
			direction: Direction.Up,
			music: new Music({ key: 'door_sound', loop: false, volume:0.5 }),
			key: 'sparklehouse_3'
		}),
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 0,
				y: 1476,
				width: 1241,
				height: 20,
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(1342, 376),
			direction: Direction.Down,
			key: 'world',
		}),
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 0,
				y: 0,
				width: 20,
				height: 1476,
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(1342, 376),
			direction: Direction.Down,
			key: 'world',
		}),
		

	]				
});


export { sparklehallow_1 };
