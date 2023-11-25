import { Warrior, Statistic, Range, Armor, Weapon } from '../../src/models';
import { all_spells, cure_1, cure_2, cure_3, cure_4, wind_1, wind_2, wind_3, wind_4, fire_1, fire_2, fire_3, fire_4, earth_1, earth_2, earth_3, earth_4, water_1, water_2, water_3, water_4, lightning_1, lightning_2, lightning_3, lightning_4, ice_1, ice_2, ice_3, ice_4 } from './spells.list';
import { Activity } from 'src/models/combat';
import { Condition } from 'src/models/statuses';

const arsis = new Warrior({ 
	id: 'arsis',
	name: 'arsis', 
	strength: new Statistic(0.6),
	intelligence: new Statistic(0.8),
	speed: new Statistic(0.8),
	constitution: new Statistic(0.7),
	hp: new Range({ current: 20, total: 100 }),
	mp: new Range({ current: 20, total: 100 }),
	xp: 1000,
	level: 1,
	available: true,
	armor: new Armor({ name: 'Cloak', defense: 10 }),
	weapon: new Weapon({ name: 'Sabre', maximumDamage: 100, minimumDamage: 20 }),
	activities: [ Activity.attack, Activity.cast, Activity.steal, Activity.items, Activity.run ],
	spells: all_spells
});
const locke = new Warrior({ 
	id: 'locke',
	name: 'locke', 
	strength: new Statistic(0.7),
	intelligence: new Statistic(0.7),
	speed: new Statistic(0.7),
	constitution: new Statistic(0.6),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 100, total: 100 }),
	xp: 1000,
	level: 1,
	available: false,
	armor: new Armor({ name: 'Cloak', defense: 10 }),
	weapon: new Weapon({ name: 'Sabre', maximumDamage: 100, minimumDamage: 20 }),
	activities: [ Activity.attack, Activity.cast, Activity.block, Activity.protect, Activity.items, Activity.run ],
	spells: all_spells
});
const rubeas = new Warrior({ 
	id: 'rubeas',
	name: 'rubeas', 
	strength: new Statistic(0.6),
	intelligence: new Statistic(0.7),
	speed: new Statistic(0.8),
	constitution: new Statistic(0.5),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 100, total: 100 }),
	xp: 1000,
	level: 1,
	available: false,
	armor: new Armor({ name: 'Cloak', defense: 10 }),
	weapon: new Weapon({ name: 'Sabre', maximumDamage: 100, minimumDamage: 20 }),
	activities: [ Activity.attack, Activity.cast, Activity.block, Activity.steal, Activity.items, Activity.run ],
	spells: all_spells
});
const tachius = new Warrior({ 
	id: 'tachius',
	name: 'tachius', 
	strength: new Statistic(0.7),
	intelligence: new Statistic(0.9),
	speed: new Statistic(0.8),
	constitution: new Statistic(0.6),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 100, total: 100 }),
	xp: 1000,
	level: 1,
	available: false,
	armor: new Armor({ name: 'Cloak', defense: 10 }),
	weapon: new Weapon({ name: 'Sabre', maximumDamage: 100, minimumDamage: 20 }),
	activities: [ Activity.attack, Activity.cast, Activity.items, Activity.run ],
	spells: all_spells,
	conditions: [ Condition.blind ]
});
const moira = new Warrior({ 
	id: 'moira',
	name: 'moira', 
	strength: new Statistic(0.8),
	intelligence: new Statistic(0.7),
	speed: new Statistic(0.8),
	constitution: new Statistic(0.7),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 100, total: 100 }),
	xp: 1000,
	level: 1,
	available: false,
	armor: new Armor({ name: 'Cloak', defense: 10 }),
	weapon: new Weapon({ name: 'Sabre', maximumDamage: 100, minimumDamage: 20 }),
	activities: [ Activity.attack, Activity.cast, Activity.items, Activity.run ],
	spells: all_spells,
	conditions: [ Condition.blind, Condition.charm, Condition.confuse, Condition.rage, Condition.mute, Condition.sick ]
});
const morvan = new Warrior({ 
	id: 'morvan',
	name: 'morvan', 
	strength: new Statistic(0.7),
	intelligence: new Statistic(0.7),
	speed: new Statistic(0.6),
	constitution: new Statistic(0.5),
	hp: new Range({ current: 100, total: 100 }),
	mp: new Range({ current: 100, total: 100 }),
	xp: 1000,
	level: 1,
	available: false,
	armor: new Armor({ name: 'Cloak', defense: 10 }),
	weapon: new Weapon({ name: 'Sabre', maximumDamage: 100, minimumDamage: 20 }),
	activities: [ Activity.attack, Activity.cast, Activity.block, Activity.items, Activity.run ],
	spells: all_spells
});

const party = [ arsis, locke, rubeas, tachius, moira, morvan ];

export { arsis, locke, moira, morvan, tachius, rubeas, party };
