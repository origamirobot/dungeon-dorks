import Phaser from "phaser";

export function GetSceneObject(obj: any): Phaser.Scene {

	if(obj instanceof Phaser.Scene)
		return obj;
	else if (obj.scene && obj.scene instanceof Phaser.Scene)
		return obj.scene;
	else if (obj.parent && obj.parent.scene && obj.parent.scene instanceof Phaser.Scene)
		return obj.parent.scene;
	
	throw new Error('Could not find a scene object');
}