/**
 *  GUID class for Typescript.
 */
export class Guid {

	/**
	 * Returns a new guid.
	 */
	public static newGuid(): Guid {
		return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			const r = Math.random() * 16 | 0;
			const v = (c == 'x') ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		}));
	}

	private static readonly emptyValue = '00000000-0000-0000-0000-000000000000';

	/** A blank guid. */
	public static get empty(): Guid {
		return new Guid(Guid.emptyValue);
	}

	/**
	 * Validates a guid string.
	 * Note that a blank guid is not a valid guid.
	 * Note that it will not try to parse the string, 
	 * it requires the exact format (lowercase and numbers, not wrapped).
	 * @param str 
	 * @returns true if the string is a valid guid string.
	 */
	public static isValid(str: string): boolean {
		const validRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
		return validRegex.test(str);
	}

	private value = Guid.emptyValue;

	constructor(value?: string) {
		if (value) {
			if(value === Guid.emptyValue) {
				this.value = value;
			}
			else if (Guid.isValid(value)) {
				this.value = value;
			}
		}
	}

	/**
	 * Returns a string representation of this guid.
	 */
	public toString() {
		return this.value;
	}

	/**
	 * Returns a JSON representation of this guid.
	 */
	public toJSON(): string {
		return this.value;
	}

	/**
	 * Compares two Guid objects and returns true if they are equal.
	 * @param item 
	 */
	public equals(item: Guid): boolean {
		return item.value === this.value;
	}
}
