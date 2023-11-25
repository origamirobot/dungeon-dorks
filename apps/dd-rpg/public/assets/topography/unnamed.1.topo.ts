import { Topography, Direction, WarpToAction, LocationTrigger, LocationTriggerType, Item, ItemType, MilestoneAction, SceneTrigger, SceneTriggerType, DialogTrigger, DialogTriggerType, AudioAction, Potion, DrinkSize } from "src/models";
import { Music } from "src/models/common/music.model";

const unnamed_town_1 = new Topography({
	key: 'unnamed_town_1',
	encounterRate: -1,
	encounters: false,
	name: 'An Unnamed Town\nMiddle Of Nowhere',
	mapScale: 1,
	pack: 'assets/packs/unnamed.1.pack.json',
	playerScale: 0.6,
	spawnDirection: Direction.Up,
	spawnPoint: new Phaser.Math.Vector2(406, 800),
	tileset: 'master_tileset',
	music: new Music({ key: 'town_sound' }),
	items: [
		new Potion({ size: DrinkSize.small, message: 'You found a small potion behind the tree', quantity: 1, spawnPoint: new Phaser.Math.Vector2(584, 183 )})
	],
	actions: [
		new MilestoneAction({
			trigger: new SceneTrigger({
				type: SceneTriggerType.start
			}),
			name: 'call_to_arms'
		}),
		new MilestoneAction({
			trigger: new DialogTrigger({ 
				type: DialogTriggerType.DialogEnd,
				npcName: 'zara'
			}),
			name: 'neverborn_are_born'
		}),
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 440,
				y: 195,
				width: 50,
				height: 20,
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(413, 405),
			direction: Direction.Up,
			music: new Music({ key: 'door_sound', loop: false, volume:0.5 }),
			key: 'unnamed_house_1'
		}),
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 0,
				y: 852,
				width: 673,
				height: 20,
				milestone: 'neverborn_are_born',
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(290, 350),
			direction: Direction.Down,
			key: 'world',
		})

	]				
});


export { unnamed_town_1 };
