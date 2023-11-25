import { NPC } from 'src/controls';
import { Topography, Direction, WarpToAction, LocationTrigger, LocationTriggerType, Actor, MilestoneAction, DialogTrigger, PartyAction, PartyActionType, EmoteAction, Emote, FaceAction, AudioAction, WalkToAction } from "src/models";
import { DialogTriggerType } from 'src/models/triggers';
import { Music } from 'src/models/common/music.model';
import { ConvergeAction, RemoveNpcAction } from 'src/models/actions';

const unnamed_house_1 = new Topography({
	key: 'unnamed_house_1',
	encounterRate: -1,
	encounters: false,
	mapScale: 1,
	pack: 'assets/packs/unnamed.2.pack.json',
	playerScale: 0.6,
	spawnPoint: new Phaser.Math.Vector2(340, 401),
	tileset: 'master_tileset',
	music: new Music({ key: 'town_sound' }),
	spawnDirection: Direction.Up,
	npcs: [
		new Actor({ 
			name: 'zara', 
			direction: Direction.Down,
			wanders: false,
			stare: true,
			spawnPoint: new Phaser.Math.Vector2(230, 150),
			dialog: [
				'Great, you\'re all here... lets begin',
				'I have gathered you all here today for a very important reason. As I am sure you have noticed, there is a giant comet in the sky',
				'This is not just any comet, this is actually a prison for a very powerful god...',
				'An’Gromeneu!',
				'He was trapped in that comet a century ago and he\'s been planning on making his escape ever since',
				'Every day his power grows stronger, until one day he is unleashed upon this world once more',
				'It has been forseen that you mighty warriors are the ones to destroy him.',
				'You are the Neverborn, and it is your destiny to destroy An’Gromeneu',
				'Head east to the town of Sparkle Hallow, I need you to investigate the Great Rift that was formed by the passing of the comet.'
			]
		}),
		new Actor({ 
			name: 'tachius', 
			direction: Direction.Up, 
			stare: false,
			wanders: false, 
			spawnPoint: new Phaser.Math.Vector2(150, 200),
			excludeMilestones: ['neverborn_are_born'],
			dialog : ['Hello, my name is Tachius']
		}),
		new Actor({ 
			name: 'rubeas', 
			direction: Direction.Up, 
			stare: false,
			wanders: false, 
			spawnPoint: new Phaser.Math.Vector2(300, 200),
			excludeMilestones: ['neverborn_are_born'],
			dialog : ['Hello my good man! I\'m Rubeas!']
		}),
		new Actor({ 
			name: 'locke', 
			direction: Direction.Up, 
			stare: false,
			wanders: false, 
			spawnPoint: new Phaser.Math.Vector2(150, 360),
			excludeMilestones: ['neverborn_are_born'],
			dialog : ['Hey, I\'m Locke']
		}),
		new Actor({ 
			name: 'moira', 
			direction: Direction.Up, 
			stare: false,
			wanders: false, 
			spawnPoint: new Phaser.Math.Vector2(150, 280),
			excludeMilestones: ['neverborn_are_born'],
			dialog : ['Hello, I\'m Moria.', 'Wait... what was I just saying?']
		}),
		new Actor({ 
			name: 'morvan', 
			direction: Direction.Up, 
			stare: false,
			wanders: false, 
			spawnPoint: new Phaser.Math.Vector2(300, 280),
			excludeMilestones: ['neverborn_are_born'],
			dialog : ['The names Morvan, nice to meet you']
		}),

	],
	actions: [
		new WalkToAction({
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogStart,
				npcName: 'zara'
			}),
			x: 296,
			y: 359,
			person: 'arsis',
			endDirection: Direction.Up
		}),
		new WarpToAction({
			trigger: new LocationTrigger({
				x: 360,
				y: 450,
				width:110,
				height: 20,
				type: LocationTriggerType.WalkInto
			}),
			key: 'unnamed_town_1',
			spawn: new Phaser.Math.Vector2(459, 250),
			direction: Direction.Down,
			music: new Music({ key: 'door_sound', loop: false, volume:0.5 })
		}),
		new MilestoneAction({
			name: 'neverborn_are_born',
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogEnd,
				npcName: 'zara'
			})
		}),
		new PartyAction({
			members: ['rubeas', 'tachius', 'morvan', 'moira', 'locke'],
			type: PartyActionType.add,
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogEnd,
				npcName: 'zara'
			})
		}),
		new AudioAction({
			music: new Music({ key: 'gasp_sound', loop: false, volume:0.5 }),
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogIndex,
				index: 3,
				npcName: 'zara'
			})
		}),
		new EmoteAction({
			people: ['morvan', 'moira', 'locke'],
			emote: Emote.scream,
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogIndex,
				index: 3,
				npcName: 'zara'
			})
		}),
		new EmoteAction({
			people: ['rubeas', 'tachius', 'arsis'],
			emote: Emote.disagree,
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogIndex,
				index: 3,
				npcName: 'zara'
			})
		}),
		new FaceAction({
			people: ['rubeas', 'tachius', 'morvan', 'moira', 'locke', 'arsis'],
			direction: Direction.Up,
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogIndex,
				index: 4,
				npcName: 'zara'
			})
		}),
		new FaceAction({
			people: ['arsis'],
			direction: Direction.Up,
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogIndex,
				index: 1,
				npcName: 'zara'
			})
		}),
		new RemoveNpcAction({
			npcs: ['rubeas', 'tachius', 'morvan', 'moira', 'locke'],
			trigger: new DialogTrigger({
				type: DialogTriggerType.DialogEnd,
				npcName: 'zara'
			})
		})
	]
});


export { unnamed_house_1 };
