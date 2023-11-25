import { Settings } from 'dd-config';
import { Logger as TSLogger, ILogObj } from "tslog";


export class Logger {

	private log: TSLogger<ILogObj>;

	constructor(
		private settings: Settings){
		this.log = new TSLogger({
			prettyLogTemplate: "{{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t",
			minLevel: this.settings.game.logLevel,
			type: 'pretty'
		});

		}

	/**
	 * Logs specified debug statement
	 * @param message the statement to log.
	 */
	public debug(message:string) : void{
		this.log.debug(message);
	}

	/**
	 * Logs specified info statement
	 * @param message the statement to log.
	 */
	public info(message: string): void {
		this.log.info(message);
	}

	/**
	 * Logs specified warning statement
	 * @param message the statement to log.
	 */
	public warn(message: string): void {
		this.log.warn(message);
	}

	/**
	 * Logs specified error statement
	 * @param message the statement to log.
	 */
	public error(message: string): void {
		this.log.error(message);
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
