import { Topography, Direction, WarpToAction, LocationTrigger, LocationTriggerType, Item, ItemType, MilestoneAction, SceneTrigger, SceneTriggerType, DialogTrigger, DialogTriggerType, AudioAction, Potion, DrinkSize, Actor } from "src/models";
import { Music } from "src/models/common/music.model";
import { OpenShopAction } from "src/models/actions/open-shop-action.model";

const sparklehouse_1 = new Topography({
	key: 'sparklehouse_1',
	encounterRate: -1,
	encounters: false,
	name: 'General Store',
	mapScale: 1,
	pack: 'assets/packs/sparklehouse.1.pack.json',
	playerScale: 0.6,
	spawnDirection: Direction.Up,
	spawnPoint: new Phaser.Math.Vector2(587, 1415),
	tileset: 'master_tileset',
	music: new Music({ key: 'town_sound' }),
	npcs: [
		new Actor({ 
			name: 'shopkeep', 
			direction: Direction.Down,
			wanders: false,
			stare: true,
			spawnPoint: new Phaser.Math.Vector2(406, 130),
			interactionOffset: 60,
			dialog: [
				'Would you like to buy something?'
			]
		})
	],
	items: [ ],
	actions: [
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 360,
				y: 432,
				width: 80,
				height: 20,
				type: LocationTriggerType.WalkInto
			}),
			spawn: new Phaser.Math.Vector2(299, 1078),
			direction: Direction.Down,
			key: 'sparklehallow_1',
		}),
		new OpenShopAction({
			trigger: new DialogTrigger({
				npcName: 'shopkeep',
				type: DialogTriggerType.DialogEnd
			})
		})
	]				
});


export { sparklehouse_1 };
