import { DateTime } from "luxon"
import { Tag } from "../../../../lib/planningCenter/calendar/types";

export type AgendaEvent = {
	title: string;
	subtitle?: string;
	tags: Tag[];
}

export type EventDay = {
	date: DateTime;
	events: AgendaEvent[];
}