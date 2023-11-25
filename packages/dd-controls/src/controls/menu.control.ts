import { MenuOptions } from '../options'
import { Direction } from 'dd-models';
import { Cursor } from './cursor.control';
import { GameObjects } from 'phaser';

/**
 * Represents a menu control 
 */
export class Menu extends GameObjects.Container {

	//#region PRIVATE PROPERTIES


	private _selectedIndex: number = 0;
	protected items: string[] = [];
	protected menuItems: GameObjects.Text[] = [];
	protected disabledItems: number[] = [];
	protected cursor: Cursor;


	//#endregion PRIVATE PROPERTIES

	//#region PUBLIC PROPERTIES


	public selected: (name: string) => void;
	public disabled: boolean = false;
	public get selectedIndex(){ return this._selectedIndex; }
	public set selectedIndex(value: number){ this._selectedIndex = value; this.reset(); }

	
	//#endregion PUBLIC PROPERTIES

	//#region CONSTRUCTORS


	/**
	 * Creates an instance of this class.
	 * @param scene The scene to add this menu to 
	 * @param x the x coordinate of where to put this menu
	 * @param y the y coordinate of where to put this menu
	 * @param selectedCallback The method to call when a menu item is selected.
	 */
	constructor(protected options: MenuOptions){
		super(options.scene, options.x, options.y);
		this.selected = options.selectedCallback;
		if(options.context == null)
			options.context = this;

        this.cursor = new Cursor({
            scene: options.scene,
            x: 0,
            y: 0,
            blink: false,
            direction: Direction.Down
        })
		this.hookEvents();
	}


	//#endregion CONSTRUCTORS

	//#region PRIVATE METHODS


	
	/**
	 * Hooks the events that this control needs to listen to.
	 */
	protected hookEvents(): void {
		this.scene.input.keyboard?.on(this.options.upKey, this.up, this);
		this.scene.input.keyboard?.on(this.options.downKey, this.down, this);
		this.scene.input.keyboard?.on(this.options.actionKey, this.action, this);
	}

	/**
	 * Unhooks the events that this control is listening to.
	 */
	protected unhookEvents(): void {
		this.scene.input.keyboard?.off(this.options.upKey, this.up, this, false);
		this.scene.input.keyboard?.off(this.options.downKey, this.down, this, false);
		this.scene.input.keyboard?.off(this.options.actionKey, this.action, this, false);
	}


	/**
	 * Fires when the action button is pressed.
	 */
	protected action(): void{
		if(this.disabled)
			return;
			
		this.options.selectedCallback.apply(this.options.context, [this.items[this.selectedIndex]]); 
	}

	/**
	 * Fires when the up key is pressed. Moves the selected menu item up.
	 */
	protected up(): void {
		if(this.disabled)
			return;
		this.selectedIndex--;
		if(this.disabledItems.indexOf(this.selectedIndex) > -1){
			this.up();
			return;			
		}
		if(this.selectedIndex < 0){
			this.selectedIndex = (this.menuItems.length - 1);
			if(this.disabledItems.indexOf(this.selectedIndex) > -1){
				this.up();
				return;			
			}
		}
		if(this.options.highlightCallback != null){
			this.options.highlightCallback.apply(this.options.context, [this.items[this.selectedIndex]]);
		}
	}

	/**
	 * Fires when the down key is pressed. Moves the selected menu item down.
	 */
	public down(): void {
		if(this.disabled)
			return;
		this.selectedIndex++;
		if(this.disabledItems.indexOf(this.selectedIndex) > -1){
			this.down();
			return;			
		}

		if(this.selectedIndex >= this.menuItems.length){
			this.selectedIndex = 0;
			if(this.disabledItems.indexOf(this.selectedIndex) > -1){
				this.down();
				return;			
			}
		}


		if(this.options.highlightCallback != null){
			this.options.highlightCallback.apply(this.options.context, [this.items[this.selectedIndex]]);
		}
	}

	/**
	 * Redraws this control onto the screen.
	 */
	protected redraw(): void {
		this.menuItems = [];
		this.clear();
		let current = 0;
		let x = 0;
		
		if(this.options.cursor){
			// DRAW A SINGLE CURSOR SO WE CAN MOVE IT AROUND NEXT TO MENU ITEMS
			this.cursor = new Cursor({
				scene: this.options.scene,
				x:0,
				y:0,
				direction: Direction.Right, blink: true
			}).setOrigin(0, 0.5);
			this.add(this.cursor);
			x = 40;
		}

		
		this.items.forEach((item) => {
			const menuItem = this.scene.make.text({ x: x, y: current, text: item }, false)
				.setFont(this.options.font)
				.setFontSize(this.options.fontSize);

			if(this.options.shadow != null){
				menuItem.setShadow(this.options.shadow.xOffset, this.options.shadow.yOffset, this.options.shadow.color, this.options.shadow.blur);
			}

			this.menuItems.push(menuItem);
			current += menuItem.displayHeight + this.options.spacing;
			this.add(menuItem);
		});
		this.reset();
	}

	/**
	 * Resets all of the menu items back to their default styles.
	 */
	protected reset(): void {
		const selectedColor = this.options.selectedColor;
		const disabledColor = this.options.disabledColor;
		const unselectedColor = this.options.unselectedColor;

		this.menuItems.forEach((item, index)=>{
			item.setColor(unselectedColor);
			if(this.selectedIndex == index){
				item.setColor(selectedColor);
				if(this.options.cursor){
					const yOffset = item.displayHeight / 2;
					this.cursor.setPosition(item.x - 40, item.y + yOffset);
				}
			}
			if(this.disabledItems.includes(index)){
				item.setColor(disabledColor);
			}
		});
	}


	//#endregion PRIVATE METHODS

	//#region PUBLIC METHODS

	
	/**
	 * Returns a value indicating if the specified item is disabled
	 * @param index The index of the menu item to disable.
	 */
	public isDisabled(index: number | string): boolean {
		let ind = 0;
		if(typeof index == 'string'){
			ind = this.items.indexOf(index);
		} else {
			ind = index;
		}
		return this.disabledItems.indexOf(ind) > -1;
	}
	
	/**
	 * Disables the menu item at the specified index.
	 * @param index The index of the menu item to disable.
	 */
	public disableItem(index: number | string): void {
		if(typeof index == 'string'){
			const ind = this.items.indexOf(index);
			const position = this.disabledItems.indexOf(ind);
			if(position == -1)
				this.disabledItems.push(ind);
			if(this.selectedIndex == ind){
				this.selectedIndex = -1;
			}
		} else {
			const position = this.disabledItems.indexOf(index);
			if(position == -1)
				this.disabledItems.push(index);
			if(this.selectedIndex == index){
				this.selectedIndex = -1;
			}
		}
		this.reset();
	}

	/**
	 * Reenables a disabled item.
	 * @param index 
	 */
	public enableItem(index: number | string): void {
		if(typeof index == 'string'){
			const ind1 = this.items.indexOf(index);
			const ind2 = this.disabledItems.indexOf(ind1);
			if(ind2 > -1){
				this.disabledItems.splice(ind2, 1);
			}
		} else {
			const ind = this.disabledItems.indexOf(index);
			if(ind > -1){
				this.disabledItems.splice(ind, 1);
			}
		}
		this.reset();
	}

	/**
	 * Adds a new menu item to this menu.
	 * @param text 
	 */
	public addMenuItem(text: string | string[]) : void {
		if(Array.isArray(text)){
			const arr = text as string[];
			arr.forEach(item=>this.items.push(item));
		} else {
			this.items.push(text as string);
		}
		this.redraw();
	}

	/**
	 * Clears all the menu items from this control.
	 */
	public clear(): void {
		this.removeAll(true);
		this.menuItems = [];
		this.disabledItems = [];
	}

	/**
	 * Replaces the menu items in the list
	 * @param items 
	 */
	public replaceItems(items: string[]): void{
		this.items = items;
		let current = 0;
		let x = 0;
		
		if(this.items.length < this.menuItems.length){
			let startIndex = this.items.length;

			for(let i = startIndex; i < this.menuItems.length; i++){
				this.menuItems[i].visible = false;
				this.menuItems[i].destroy(true);
			}

			this.menuItems.splice(startIndex);
		}

		this.items.forEach((item, index) => {
			if(index < this.menuItems.length){
				this.menuItems[index].setText(item);
				current += this.menuItems[index].displayHeight + this.options.spacing;
			} else {
				const menuItem = this.scene.make.text({ x: x, y: current, text: item }, false)
					.setFont(this.options.font)
					.setFontSize(this.options.fontSize);

				if(this.options.shadow != null){
					menuItem.setShadow(this.options.shadow.xOffset, this.options.shadow.yOffset, this.options.shadow.color, this.options.shadow.blur);
				}
				this.menuItems.push(menuItem);
				this.add(menuItem);
				current += menuItem.displayHeight + this.options.spacing;
			}
		});
		this.reset();
 	}

	 public destroy(): void{
		 this.unhookEvents();
		 super.destroy(true);
	 }

	//#endregion PUBLIC METHODS

}
