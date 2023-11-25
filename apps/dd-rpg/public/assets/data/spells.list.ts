import { Spell, SpellLevel,ElementalSpell,CureSpell, Element, StatusType, Ailment } from "src/models";
import { LifeSpell, AilmentSpell, LimitationSpell, BuffSpell } from "src/models/spells";

const cure_1 = new CureSpell({ name: 'Cure 1',  cost: 20,  level: SpellLevel.beginner, amount: 100 });
const cure_2 = new CureSpell({ name: 'Cure 2',  cost: 50,  level: SpellLevel.intermediate, amount: 250 });
const cure_3 = new CureSpell({ name: 'Cure 3',  cost: 100,  level: SpellLevel.advanced, amount: 500 });
const cure_4 = new CureSpell({ name: 'Cure 4',  cost: 200,  level: SpellLevel.expert, amount: 1000 });

const fire_1 = new ElementalSpell({ name: 'Fire 1', level: SpellLevel.beginner, cost: 25, damage: 100, element: Element.fire });
const fire_2 = new ElementalSpell({ name: 'Fire 2', level: SpellLevel.intermediate, cost: 50, damage: 200, element: Element.fire });
const fire_3 = new ElementalSpell({ name: 'Fire 3', level: SpellLevel.advanced, cost: 100, damage: 500, element: Element.fire });
const fire_4 = new ElementalSpell({ name: 'Fire 4', level: SpellLevel.expert, cost: 200, damage: 1000, element: Element.fire });

const ice_1 = new ElementalSpell({ name: 'Ice 1', level: SpellLevel.beginner, cost: 25, damage: 100, element: Element.ice });
const ice_2 = new ElementalSpell({ name: 'Ice 2', level: SpellLevel.intermediate, cost: 50, damage: 200, element: Element.ice });
const ice_3 = new ElementalSpell({ name: 'Ice 3', level: SpellLevel.advanced, cost: 100, damage: 500, element: Element.ice });
const ice_4 = new ElementalSpell({ name: 'Ice 4', level: SpellLevel.expert, cost: 200, damage: 1000, element: Element.ice });

const earth_1 = new ElementalSpell({ name: 'Earth 1', level: SpellLevel.beginner, cost: 25, damage: 100, element: Element.earth });
const earth_2 = new ElementalSpell({ name: 'Earth 2', level: SpellLevel.intermediate, cost: 50, damage: 200, element: Element.earth });
const earth_3 = new ElementalSpell({ name: 'Earth 3', level: SpellLevel.advanced, cost: 100, damage: 500, element: Element.earth });
const earth_4 = new ElementalSpell({ name: 'Earth 4', level: SpellLevel.expert, cost: 200, damage: 1000, element: Element.earth });

const water_1 = new ElementalSpell({ name: 'Water 1', level: SpellLevel.beginner, cost: 25, damage: 100, element: Element.water });
const water_2 = new ElementalSpell({ name: 'Water 2', level: SpellLevel.intermediate, cost: 50, damage: 200, element: Element.water });
const water_3 = new ElementalSpell({ name: 'Water 3', level: SpellLevel.advanced, cost: 100, damage: 500, element: Element.water });
const water_4 = new ElementalSpell({ name: 'Water 4', level: SpellLevel.expert, cost: 200, damage: 1000, element: Element.water });

const lightning_1 = new ElementalSpell({ name: 'Lightning 1', level: SpellLevel.beginner, cost: 25, damage: 100, element: Element.lightning });
const lightning_2 = new ElementalSpell({ name: 'Lightning 2', level: SpellLevel.intermediate, cost: 50, damage: 200, element: Element.lightning });
const lightning_3 = new ElementalSpell({ name: 'Lightning 3', level: SpellLevel.advanced, cost: 100, damage: 500, element: Element.lightning });
const lightning_4 = new ElementalSpell({ name: 'Lightning 4', level: SpellLevel.expert, cost: 200, damage: 1000, element: Element.lightning });

const wind_1 = new ElementalSpell({ name: 'Wind 1', level: SpellLevel.beginner, cost: 25, damage: 100, element: Element.wind });
const wind_2 = new ElementalSpell({ name: 'Wind 2', level: SpellLevel.intermediate, cost: 50, damage: 200, element: Element.wind });
const wind_3 = new ElementalSpell({ name: 'Wind 3', level: SpellLevel.advanced, cost: 100, damage: 500, element: Element.wind });
const wind_4 = new ElementalSpell({ name: 'Wind 4', level: SpellLevel.expert, cost: 200, damage: 1000, element: Element.wind });

const dark_1 = new ElementalSpell({ name: 'Dark 1', level: SpellLevel.beginner, cost: 25, damage: 100, element: Element.dark });
const dark_2 = new ElementalSpell({ name: 'Dark 2', level: SpellLevel.intermediate, cost: 50, damage: 200, element: Element.dark });
const dark_3 = new ElementalSpell({ name: 'Dark 3', level: SpellLevel.advanced, cost: 100, damage: 500, element: Element.dark });
const dark_4 = new ElementalSpell({ name: 'Dark 4', level: SpellLevel.expert, cost: 200, damage: 1000, element: Element.dark });

const holy_1 = new ElementalSpell({ name: 'Holy 1', level: SpellLevel.beginner, cost: 25, damage: 100, element: Element.holy });
const holy_2 = new ElementalSpell({ name: 'Holy 2', level: SpellLevel.intermediate, cost: 50, damage: 200, element: Element.holy });
const holy_3 = new ElementalSpell({ name: 'Holy 3', level: SpellLevel.advanced, cost: 100, damage: 500, element: Element.holy });
const holy_4 = new ElementalSpell({ name: 'Holy 4', level: SpellLevel.expert, cost: 200, damage: 1000, element: Element.holy });

const life = new LifeSpell({ name: 'Life', level: SpellLevel.expert, cost: 200 });
const poison = new AilmentSpell({ name: 'Poison', level: SpellLevel.beginner });
const venom = new AilmentSpell({ name: 'Venom', level: SpellLevel.intermediate });
const bio = new AilmentSpell({ name: 'Bio', level: SpellLevel.advanced });
const toxin = new AilmentSpell({ name: 'Toxin', level: SpellLevel.expert });


const sleep = new LimitationSpell({ name: 'Sleep', cost: 100 });
const slow = new LimitationSpell({ name: 'Slow', cost: 100 });
const confuse = new LimitationSpell({ name: 'Confuse', cost: 100 });
const charm = new LimitationSpell({ name: 'Charm', cost: 100 });
const zombify = new LimitationSpell({ name: 'Zombify', cost: 100 });
const paralize = new LimitationSpell({ name: 'Paralize', cost: 100 });


const haste = new BuffSpell({ name: 'haste', cost: 100 });
const speed = new BuffSpell({ name: 'Speed', cost: 100 });


const all_spells = [ cure_1, cure_2, cure_3, cure_4, 
	wind_1, wind_2, wind_3, wind_4, 
	fire_1, fire_2, fire_3, fire_4, 
	earth_1, earth_2, earth_3, earth_4, 
	water_1, water_2, water_3, water_4, 
	lightning_1, lightning_2, lightning_3, lightning_4, 
	ice_1, ice_2, ice_3, ice_4,
	holy_1, holy_2, holy_3, holy_4,
	dark_1, dark_2, dark_3, dark_4,
	sleep, slow, confuse, charm, zombify, paralize,
	haste, speed];


export { 
	all_spells,
	cure_1, cure_2, cure_3, cure_4, 
	wind_1, wind_2, wind_3, wind_4, 
	fire_1, fire_2, fire_3, fire_4, 
	earth_1, earth_2, earth_3, earth_4, 
	water_1, water_2, water_3, water_4, 
	lightning_1, lightning_2, lightning_3, lightning_4, 
	ice_1, ice_2, ice_3, ice_4,
	holy_1, holy_2, holy_3, holy_4,
	dark_1, dark_2, dark_3, dark_4,
	sleep, slow, confuse, charm, zombify, paralize,
	haste, speed
 };
