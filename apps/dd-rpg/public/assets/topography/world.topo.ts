import { Topography, Direction, WarpToAction, LocationTrigger, LocationTriggerType, SceneTrigger, SceneTriggerType, Warrior, Statistic, Range } from "src/models";
import { bird, beholder_green, chimera, elk, boar, beholder_grey,lizard_green,dragon_red, dragon_green, harpy_brown, centaur_brown, centaur_grey, centaur_tan, bird_hawk, bird_raven, cactus, cerberus, tree } from '../../assets/data/enemy.list';
import { Music } from "src/models/common/music.model";


const world = new Topography({
	key: 'world',
	encounterRate: 40,
	encounters: true,
	mapScale: 0.7,
	pack: 'assets/packs/world.pack.json',
	playerScale: 0.4,
	music: new Music({ key: 'overworld_sound' }),
	tileset: 'world_tileset',
	spawnPoint: new Phaser.Math.Vector2(726, 523),
	spawnDirection: Direction.Down,
	backgrounds: [ 'plains_1_background', 'plains_2_background'],
	actions:[
		new WarpToAction({
			key: 'unnamed_town_1',
			trigger: new LocationTrigger({
				x: 380, 
				y: 411,
				width:  70,
				height: 70
			})
		}),
		new WarpToAction({
			key: 'sparklehallow_1',
			spawn: new Phaser.Math.Vector2(587, 1427),
			direction: Direction.Up,
			trigger: new LocationTrigger({
				x: 1856, 
				y: 403,
				width:  100,
				height: 100
			})
		})
	],
	maxEnemies: 1,
	enemies: [
		bird,
		// bird_hawk,
		// bird_raven,
		// cactus,
		// boar,
		// beholder_green,
		// beholder_grey,
		// cerberus,
		// chimera
	]
});


export { world };
