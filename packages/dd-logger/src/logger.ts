import { Settings, LogLevel } from 'dd-config';


export class Logger {

	constructor(
		private settings: Settings,
		private logFunction: (message:string, args?:any[]) => void){}

	/**
	 * Logs specified debug statement
	 * @param message the statement to log.
	 */
	public debug(message:string, style?: string) : void{
		if(this.settings.game.logLevel <= LogLevel.DEBUG)
			this.logFunction(message, [style]);
	}

	/**
	 * Logs specified info statement
	 * @param message the statement to log.
	 */
	public info(message: string, style?: string): void {
		if(this.settings.game.logLevel <= LogLevel.INFO)
			this.logFunction(message, [style])
	}

	/**
	 * Logs specified warning statement
	 * @param message the statement to log.
	 */
	public warn(message: string, style?: string): void {
		if(this.settings.game.logLevel <= LogLevel.WARN)
			this.logFunction(message, [style])
	}

	/**
	 * Logs specified error statement
	 * @param message the statement to log.
	 */
	public error(message: string, style?: string): void {
		if(this.settings.game.logLevel <= LogLevel.ERROR)
			this.logFunction(message, [style])
	}

	/**
	 * Starts a console log grouping.
	 * @param name 
	 */
	public group(name: string): void {
		console.group(name);
	}

	/**
	 * Ends the console log grouping.
	 */
	public ungroup(): void {
		console.groupEnd();
	}

}
