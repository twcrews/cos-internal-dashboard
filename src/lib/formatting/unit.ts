import pluralize from "pluralize";
import numberToWords from "number-to-words";

export const unitToLocaleString = (value: number, baseUnit?: string): string =>
	value.toLocaleString() +
	(baseUnit ? ` ${smartPluralize(value, baseUnit)}` : "");

export const unitToWords = (value: number, baseUnit?: string): string => {
	const numberWords = numberToWords.toWords(value);
	if (baseUnit) {
		return `${numberWords} ${smartPluralize(value, baseUnit)}`;
	}
	return numberWords;
};

export const smartPluralize = (value: number, baseUnit: string): string =>
	value === 1 || value === -1 ? baseUnit : pluralize(baseUnit);
