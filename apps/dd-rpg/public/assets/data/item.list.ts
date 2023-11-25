import { Potion, DrinkSize, ItemType, Tent, SleepingBag, Antidote, Remedy, Weapon, Armor } from "src/models";


const potion_small = new Potion({ size: DrinkSize.small, type: ItemType.potion });
const potion_medium = new Potion({ size: DrinkSize.medium, type: ItemType.potion });
const potion_large = new Potion({ size: DrinkSize.medium, type: ItemType.potion });

const ether_small = new Potion({ size: DrinkSize.small, type: ItemType.ether });
const ether_medium = new Potion({ size: DrinkSize.medium, type: ItemType.ether });
const ether_large = new Potion({ size: DrinkSize.medium, type: ItemType.ether });

const elixer_small = new Potion({ size: DrinkSize.small, type: ItemType.elixer });
const elixer_medium = new Potion({ size: DrinkSize.medium, type: ItemType.elixer });
const elixer_large = new Potion({ size: DrinkSize.medium, type: ItemType.elixer });

const tent = new Tent();
const sleeping_bag = new SleepingBag();
const antidote = new Antidote();
const remedy = new Remedy();

const sword_rapier = new Weapon({ id: 'sword_rapier', name: 'Rapier', icon:'rapier', description: 'Light sharp-pointed sword used for thrusting', minimumDamage: 15, maximumDamage: 30, quantity: 1 });
const sword_broad = new Weapon({ id: 'sword_broad', name: 'Broad Sword', icon:'broad-sword', description: 'Wide blade, used for cutting rather than thrusting', minimumDamage: 30, maximumDamage: 40, quantity: 1 });
const sword_great = new Weapon({ id: 'sword_great', name: 'Great Sword', icon:'great-sword', description: 'Very large and powerful sword', minimumDamage: 40, maximumDamage: 50, quantity: 1 });
const sword_dagger = new Weapon({ id: 'sword_dagger', icon:'dagger', name: 'Dagger', description: 'A short knife with a pointed and edged blade', minimumDamage: 5, maximumDamage: 15, quantity: 1 });
const sword_holy = new Weapon({ id: 'sword_holy', name: 'Holy Sword', icon: 'claymore', description: 'Sword imbued with holy power', minimumDamage: 5, maximumDamage: 200, quantity: 1 });
const sword_demon = new Weapon({ id: 'sword_demon', name: 'Demon Sword', icon: 'crystal-sword', description: 'Sword imbued with evil power', minimumDamage: 100, maximumDamage: 200, quantity: 1 });


const armor_tunic = new Armor({ id: 'armor_tunic', icon: 'armor-0', name: 'Tunic', description: 'Light-weight cloth shirt', quantity: 1, defense:1 });
const armor_cowl = new Armor({ id: 'armor_tunic',icon: 'armor-1',  name: 'Cowl', description: 'Large, loose-fitting hood', quantity: 1, defense:2 });
const armor_jumpsuit = new Armor({ id: 'armor_tunic', icon: 'armor-2', name: 'Jumpsuit', description: 'Full-bodied cloth outfit', quantity: 1, defense:2 });
const armor_chainmail = new Armor({ id: 'armor_tunic', icon: 'armor-3', name: 'Chainmail', description: 'Made of small metal rings linked together', quantity: 1, defense:5 });
const armor_chestplate = new Armor({ id: 'armor_tunic', icon: 'armor-4', name: 'Chestplate', description: 'Full metal chestplate', quantity: 1,defense: 10 });
const armor_iron = new Armor({ id: 'armor_tunic', icon: 'armor-5', name: 'Iron Armor', description: 'Iron-plated armor', quantity: 1,defense:15 });
const armor_diamond = new Armor({ id: 'armor_tunic', icon: 'armor-6', name: 'Diamond Armor', description: 'Armor imbued with holy power', quantity: 1,defense:25 });
const armor_demon = new Armor({ id: 'armor_demon', icon: 'armor-7', name: 'Demon Armor', description: 'Armor imbued with evil power', quantity: 1,defense:25 });


const itemList = [ 
    potion_large, 
    potion_medium, 
    potion_small, 
    ether_large, 
    ether_medium, 
    ether_small, 
    elixer_large, 
    elixer_medium, 
    elixer_small,
    tent,
    sleeping_bag,
    remedy,
    antidote,
    sword_broad,
    sword_dagger,
    sword_demon,
    sword_great,
    sword_holy,
    sword_rapier,
    armor_chainmail,
    armor_chestplate,
    armor_cowl,
    armor_demon,
    armor_diamond,
    armor_iron,
    armor_jumpsuit,
    armor_tunic
];


export { 
    sword_broad, 
    sword_dagger, 
    sword_demon, 
    sword_holy, 
    sword_rapier, 
    sword_great,
    armor_chainmail,
    armor_chestplate,
    armor_cowl,
    armor_demon,
    armor_diamond,
    armor_iron,
    armor_jumpsuit,
    armor_tunic
};
export { itemList };
