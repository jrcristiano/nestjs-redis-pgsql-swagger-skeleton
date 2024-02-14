const FIRST_LETTER = 0;

function firstUpper(str: string): string {
	return str.charAt(FIRST_LETTER).toUpperCase() + str.slice(1).toLowerCase();
}

export default firstUpper;
