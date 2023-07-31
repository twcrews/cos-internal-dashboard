import { unitToLocaleString } from "./unit";
import { friendlyList } from "./enum";

export const friendlyTimespanString = (timespan: number): string =>
	friendlyList(friendlyTimespanArray(timespan));

export const friendlyTimespanArray = (timespan: number): string[] => {
	if (timespan <= 0) {
		return [];
	}

	const years = totalYears(timespan);
	const weeksRemaining = totalWeeks(timespan - millisecondsFromYears(years));
	const daysRemaining = totalDays(
		timespan -
			millisecondsFromYears(years) -
			millisecondsFromWeeks(weeksRemaining)
	);
	const hoursRemaining = totalHours(
		timespan -
			millisecondsFromYears(years) -
			millisecondsFromWeeks(weeksRemaining) -
			millisecondsFromDays(daysRemaining)
	);
	const minutesRemaining = totalMinutes(
		timespan -
			millisecondsFromYears(years) -
			millisecondsFromWeeks(weeksRemaining) -
			millisecondsFromDays(daysRemaining) -
			millisecondsFromHours(hoursRemaining)
	);
	const secondsRemaining = totalSeconds(
		timespan -
			millisecondsFromYears(years) -
			millisecondsFromWeeks(weeksRemaining) -
			millisecondsFromDays(daysRemaining) -
			millisecondsFromHours(hoursRemaining) -
			millisecondsFromMinutes(minutesRemaining)
	);
	const millisecondsRemaining =
		timespan -
		millisecondsFromYears(years) -
		millisecondsFromWeeks(weeksRemaining) -
		millisecondsFromDays(daysRemaining) -
		millisecondsFromHours(hoursRemaining) -
		millisecondsFromMinutes(minutesRemaining) -
		millisecondsFromSeconds(secondsRemaining);

	const returnArray: string[] = [];

	if (years > 0) {
		returnArray.push(unitToLocaleString(years, "year"));
	}
	if (weeksRemaining > 0) {
		returnArray.push(unitToLocaleString(weeksRemaining, "week"));
	}
	if (daysRemaining > 0) {
		returnArray.push(unitToLocaleString(daysRemaining, "day"));
	}
	if (hoursRemaining > 0) {
		returnArray.push(unitToLocaleString(hoursRemaining, "hour"));
	}
	if (minutesRemaining > 0) {
		returnArray.push(unitToLocaleString(minutesRemaining, "minute"));
	}
	if (secondsRemaining > 0) {
		returnArray.push(unitToLocaleString(secondsRemaining, "second"));
	}
	if (millisecondsRemaining > 0) {
		returnArray.push(unitToLocaleString(millisecondsRemaining, "millisecond"));
	}

	return returnArray;
};

export const timespan = (start: Date, end: Date): number => {
	return Math.abs(end.getTime() - start.getTime());
};

const millisecondsFromYears = (years: number): number =>
	years * millisecondsInAYear;
const millisecondsFromWeeks = (weeks: number): number =>
	weeks * millisecondsInAWeek;
const millisecondsFromDays = (days: number): number =>
	days * millisecondsInADay;
const millisecondsFromHours = (hours: number): number =>
	hours * millisecondsInAnHour;
const millisecondsFromMinutes = (minutes: number): number =>
	minutes * millisecondsInAMinute;
const millisecondsFromSeconds = (seconds: number): number =>
	seconds * millisecondsInASecond;

const totalYears = (timespan: number): number =>
	Math.floor(timespan / millisecondsInAYear);
const totalWeeks = (timespan: number): number =>
	Math.floor(timespan / millisecondsInAWeek);
const totalDays = (timespan: number): number =>
	Math.floor(timespan / millisecondsInADay);
const totalHours = (timespan: number): number =>
	Math.floor(timespan / millisecondsInAnHour);
const totalMinutes = (timespan: number): number =>
	Math.floor(timespan / millisecondsInAMinute);
const totalSeconds = (timespan: number): number =>
	Math.floor(timespan / millisecondsInASecond);

const millisecondsInASecond = 1000;
const millisecondsInAMinute = millisecondsInASecond * 60;
const millisecondsInAnHour = millisecondsInAMinute * 60;
const millisecondsInADay = millisecondsInAnHour * 24;
const millisecondsInAWeek = millisecondsInADay * 7;
const millisecondsInAYear = millisecondsInAWeek * 52;
