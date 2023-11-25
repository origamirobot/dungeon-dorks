
export class Events {

	static GAME_STARTED: string = 'game_started';
	static GAME_SAVED: string = 'game_saved';
	static GAME_LOADED: string = 'game_loaded';
	static GAME_PAUSED: string = 'game_paused';

	static battleWon: string = 'battle_won';
	static battleLost: string = 'battle_lost';

	static playerHighlighted: string = 'player_highlighted';
	static playerSelected: string = 'player_selected';
	static playerAttack: string = 'player_attack';
	static playerSwing: string = 'player_swing';
	static playerDodge: string = 'player_dodged';
	static playerDefend: string = 'player_defend';
	static playerProtectStart: string = 'player_protect_start';
	static playerProtectEnd: string = 'player_protect_end';
	static playerBlock: string = 'player_block';
	static playerHpRestored: string = 'player_hp_restored';
	static playerMpRestored: string = 'player_mp_restored';
	static playerDead: string = 'player_deceased';
	static playerCasting: string = 'player_casting';
	static playerCasted: string = 'player_casted';
	static playerIdle: string = 'player_idle';
	static playerTurnStart: string = 'player_turn_start';
	static playerTurnEnd: string = 'player_turn_end';
	static playerLevelUp: string = 'player_level_up';
	static playerTurnForfeit: string = 'player_turn_forfeit';
	static playerRun: string = 'player_run';
	static playerSteal: string = 'player_steal';
	static playerProtect: string = 'player_protect';
	static playerItems: string = 'player_items';

	static enemyHighlighted: string = 'enemy_highlighted';
	static enemySelected: string = 'enemy_selected';
	static enemyAttack: string = 'enemy_attacked';
	static enemySwing: string = 'enemy_swing';
	static enemyDodge: string = 'enemy_dodged';
	static enemyDefend: string = 'enemy_hit';
	static enemyHpRestored: string = 'enemy_hp_restored';
	static enemyMpRestored: string = 'enemy_mp_restored';
	static enemyDead: string = 'enemy_deceased';
	static enemyCasting: string = 'enemy_casting';
	static enemyCasted: string = 'enemy_casted';
	static enemyIdle: string = 'enemy_idle';

	static unhighlighted: string = 'combat_unhighlight';
	static targetSelected: string = 'target_selected';

	static combatMessageDismissed: string = 'combat_message_dismissed';
	static combatMenuHighlighted: string = 'combat_highlighted';
	static combatMenuSelected: string = 'combat_selected';

	static targetingCanceled: string = 'targeting_canceled';
	static itemHighlighted: string = 'item_highlighted';
	static itemSelected: string = 'item_selected';
	static itemCanceled: string = 'item_canceled';
	static itemUsed: string = 'item_used';
	static potionUsed: string = 'potion_used';
	static elixerUsed: string = 'elixer_used';
	static etherUsed: string = 'ether_used';
	static weaponRemoved: string = 'weapon_removed';
	static weaponEquipped: string = 'weapon_equiped';
	static armorRemoved: string = 'armor_removed';
	static armorEquipped: string = 'armor_equiped';
}