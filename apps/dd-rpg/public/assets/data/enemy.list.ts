import { Warrior, Statistic, Range, Weapon, Armor, AttackType } from "src";
import { XpDrop, GoldDrop } from "src/models/drops";




const bird = new Warrior({
	id: 'bird',
	name: 'Bird',
	strength: new Statistic(0.1),
	constitution: new Statistic(0.1),
	speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 1, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers', weaknesses: [ AttackType.lightning ], immunities: [ AttackType.earth ] }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
	drops: [
		new XpDrop({ amount: 500 }),
		new GoldDrop({ amount: 1000 })
	]
});

const bird_raven = new Warrior({
	id: 'bird_raven',
	name: 'Raven',
	strength: new Statistic(0.6),
	constitution: new Statistic(0.1),
	speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers', weaknesses: [ AttackType.lightning ], immunities: [ AttackType.earth ] }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
	drops: [
		new XpDrop({ amount: 80 }),
		new GoldDrop({ amount: 10 })
	]
});

const bird_hawk = new Warrior({
	id: 'bird_hawk',
	name: 'Hawk',
	scale: 0.6,
	strength: new Statistic(0.6),
	constitution: new Statistic(0.1),
	speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers', weaknesses: [ AttackType.lightning ], immunities: [ AttackType.earth ] }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
	drops: [
		new XpDrop({ amount: 80 }),
		new GoldDrop({ amount: 10 })
	]
});

const elk = new Warrior({
	id: 'elk',
	name: 'Elk',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
	speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const boar = new Warrior({
	id: 'boar',
	name: 'Boar',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
	speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	scale:0.8,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const harpy_brown = new Warrior({
	id: 'harpy_brown',
	name: 'Brown Harpy',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
	speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const harpy_blue = new Warrior({
	id: 'harpy_blue',
	name: 'Blue Harpy',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
	speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const beholder_green = new Warrior({
	id: 'beholder_green',
	name: 'Beholder',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	scale: 0.8,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const beholder_grey = new Warrior({
	id: 'beholder_grey',
	name: 'Beholder',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	scale: 0.8,
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const pheonix = new Warrior({
	id: 'pheonix',
	name: 'Pheonix',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const raptor_grey = new Warrior({
	id: 'raptor_grey',
	name: 'Grey Raptor',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const raptor_red = new Warrior({
	id: 'raptor_red',
	name: 'Raptor',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const raptor_green = new Warrior({
	id: 'raptor_green',
	name: 'Raptor',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const wolf_white = new Warrior({
	id: 'wolf_white',
	name: 'White Wolf',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const wolf_grey = new Warrior({
	id: 'wolf_grey',
	name: 'Grey Wolf',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const tree = new Warrior({
	id: 'tree',
	name: 'Tree',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const dragon_green = new Warrior({
	id: 'dragon_green',
	name: 'Dragon',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const dragon_red = new Warrior({
	id: 'dragon_red',
	name: 'Red Dragon',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const sasquatch = new Warrior({
	id: 'sasquatch',
	name: 'Sasquatch',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const cactus = new Warrior({
	id: 'cactus',
	name: 'Cactus',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	scale:0.7,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const lizard_green = new Warrior({
	id: 'lizard_green',
	name: 'Lizard',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const lizard_red = new Warrior({
	id: 'lizard_red',
	name: 'Lizard',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const lich = new Warrior({
	id: 'lich',
	name: 'Lich',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const minotaur = new Warrior({
	id: 'minotaur',
	name: 'Minotaur',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const golem_grey = new Warrior({
	id: 'golem',
	name: 'Golem',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const golem_tree = new Warrior({
	id: 'golem_tree',
	name: 'Tree Golem',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const knight_blue = new Warrior({
	id: 'knight_blue',
	name: 'Blue Knight',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const knight_red = new Warrior({
	id: 'knight_red',
	name: 'Red Knight',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const elemental_fire = new Warrior({
	id: 'elemental_fire',
	name: 'Fire Elemental',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const elemental_forrest = new Warrior({
	id: 'elemental_forrest',
	name: 'Forrest Elemental',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const elemental_water = new Warrior({
	id: 'elemental_water',
	name: 'Water Elemental',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const elemental_earth = new Warrior({
	id: 'elemental_earth',
	name: 'Earth Elemental',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const chimera = new Warrior({
	id: 'chimera',
	name: 'Chimera',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const ghost = new Warrior({
	id: 'ghost',
	name: 'Ghost',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const centaur_tan = new Warrior({
	id: 'centaur_tan',
	name: 'Tan Centaur',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const centaur_brown = new Warrior({
	id: 'centaur_brown',
	name: 'Brown Centaur',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const centaur_grey = new Warrior({
	id: 'centaur_grey',
	name: 'Grey Centaur',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const statue_gold = new Warrior({
	id: 'statue_gold',
	name: 'Golden Statue',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const statue_stone = new Warrior({
	id: 'statue_stone',
	name: 'Stone Statue',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const cerberus = new Warrior({
	id: 'cerberus',
	name: 'Cerberus',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const mummy = new Warrior({
	id: 'mummy',
	name: 'Mummy',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const garuda = new Warrior({
	id: 'garuda',
	name: 'Garuda',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const snow_monster = new Warrior({
	id: 'snow_monster',
	name: 'Snow Monster',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const kraken = new Warrior({
	id: 'kraken',
	name: 'Kraken',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const giant = new Warrior({
	id: 'giant',
	name: 'Giant',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const drider = new Warrior({
	id: 'drider',
	name: 'Drider',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const hydra_2 = new Warrior({
	id: 'hydra_2',
	name: 'Two-Headed Hydra',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const hydra_3 = new Warrior({
	id: 'hydra_3',
	name: 'Three-Headed Hydra',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const medusa = new Warrior({
	id: 'medusa',
	name: 'Medusa',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const tyrannosaurus = new Warrior({
	id: 'tyrannosaurus',
	name: 'Tyrannosaurus',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const neckosaurus = new Warrior({
	id: 'neckosaurus',
	name: 'Neckosaurus',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const pterosaur = new Warrior({
	id: 'pterosaur',
	name: 'Pterosaur',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const bat = new Warrior({
	id: 'bat',
	name: 'Bat',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const mouse_white = new Warrior({
	id: 'mouse_white',
	name: 'White Mouse',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const mouse_grey = new Warrior({
	id: 'mouse_grey',
	name: 'Grey Mouse',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const skeleton = new Warrior({
	id: 'skeleton',
	name: 'Skeleton',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const scorpion = new Warrior({
	id: 'scorpion',
	name: 'Scorpion',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const demon = new Warrior({
	id: 'demon',
	name: 'Demon',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const goo_green = new Warrior({
	id: 'goo_green',
	name: 'Green Goo',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const gator = new Warrior({
	id: 'gator',
	name: 'Gator',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const goblin = new Warrior({
	id: 'goblin',
	name: 'Goblin',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const frog = new Warrior({
	id: 'frog',
	name: 'Frog',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const toad = new Warrior({
	id: 'toad',
	name: 'Toad',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const head = new Warrior({
	id: 'head',
	name: 'Floating Head',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const hornet = new Warrior({
	id: 'hornet',
	name: 'Hornet',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const crab = new Warrior({
	id: 'crab',
	name: 'Crab',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const snake = new Warrior({
	id: 'snake',
	name: 'Snake',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const spud = new Warrior({
	id: 'spud',
	name: 'Spud',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const turtle = new Warrior({
	id: 'turtle',
	name: 'Turtle',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const tortoise = new Warrior({
	id: 'tortoise',
	name: 'Tortoise',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const troll = new Warrior({
	id: 'troll',
	name: 'Troll',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const worm = new Warrior({
	id: 'worm',
	name: 'Worm',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const squid = new Warrior({
	id: 'squid',
	name: 'Squid',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});

const spider = new Warrior({
	id: 'spider',
	name: 'Spider',
	strength: new Statistic(0.3),
	constitution: new Statistic(0.1),
		speed: new Statistic(0.5),
	intelligence: new Statistic(0.1),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 0, total: 0 }),
	xp: 1000,
	armor: new Armor({ defense: 5, id: 'feathers', name: 'Feathers' }),
	weapon: new Weapon({ minimumDamage: 10, maximumDamage: 20, name: 'Claws' }),
});



const enemyList = [bird, 
	bird_hawk, bird_raven, elk, boar, harpy_brown, harpy_blue, beholder_green, beholder_grey, pheonix, raptor_grey, raptor_green,  raptor_red,  wolf_white, 
	wolf_grey, tree,  dragon_green,  dragon_red,  sasquatch,  cactus, 	lizard_green, lizard_red,lich, minotaur, golem_grey, golem_tree, knight_blue, knight_red, 
	elemental_fire, elemental_earth, elemental_forrest, elemental_water, ghost, chimera, centaur_brown, centaur_grey, centaur_tan, statue_gold, statue_stone, cerberus, 
	mummy, garuda, snow_monster, kraken, giant, drider, medusa, hydra_2, hydra_3, tyrannosaurus, neckosaurus, pterosaur, bat, mouse_grey, mouse_white, frog, toad, hornet, 
	head, gator, goo_green, crab, goblin, skeleton, scorpion, demon, snake, spud, turtle, tortoise, troll, worm, squid, spider];  

export { 
	enemyList,
	bird, 
	bird_hawk,
	bird_raven,
	elk,
	boar,
	harpy_brown, 
	harpy_blue,
	beholder_green, 
	beholder_grey, 
	pheonix, 
	raptor_grey,
	raptor_green, 
	raptor_red, 
	wolf_white, 
	wolf_grey,
	tree, 
	dragon_green, 
	dragon_red, 
	sasquatch, 
	cactus, 
	lizard_green, 
	lizard_red,
	lich,
	minotaur,
	golem_grey,
	golem_tree,
	knight_blue,
	knight_red,
	elemental_fire,
	elemental_earth,
	elemental_forrest,
	elemental_water,
	ghost,
	chimera,
	centaur_brown,
	centaur_grey,
	centaur_tan,
	statue_gold,
	statue_stone,
	cerberus,
	mummy,
	garuda,
	snow_monster,
	kraken,
	giant,
	drider,
	medusa,
	hydra_2,
	hydra_3,
	tyrannosaurus,
	neckosaurus,
	pterosaur,
	bat,
	mouse_grey,
	mouse_white,
	frog,
	toad,
	hornet,
	head,
	gator,
	goo_green,
	crab,
	goblin,
	skeleton,
	scorpion,
	demon,
	snake,
	spud,
	turtle,
	tortoise,
	troll,
	worm,
	squid,
	spider
};

