import { OptionBase } from ".";
import { ShadowOptions } from ".";

/**
 * Options used when creating a new menu.
 */
export type MenuOptions = OptionBase  & {

	/** The font to use for each menu item */
	font: string;

	/** Font size of each menu item */
	fontSize: number;

	/** The amount of spacing to give between each menu item */
	spacing: number;

	/** The color of each menu item that is currently disabled selected */
	disabledColor: string;

	/** The color of each menu item that is currently selected */
	selectedColor: string;

	/** The color of each menu item that currently is not selected */
	unselectedColor: string;

	/** The key to press to make the menu selection go up */
	upKey: string;

	/** The key to press to make the menu selection go down */
	downKey: string;

	/** The key to press to select a menu item */
	actionKey: string;

	/** Style options used to define the drop shadow on menu items. */
	shadow: ShadowOptions;

	/** Should a cursor be displayed next to the menu item. */
	cursor: boolean;

	/** Callback that is called when the menu item is picked.*/
	selectedCallback:(name:string) => void;

	/** Callback that is called when the selected menu item changes */
	highlightCallback:(name:string) => void;

	/** The context to use when executing the callback methods */
	context?: any;

}
