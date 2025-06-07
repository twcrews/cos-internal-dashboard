import { ChartData } from "chart.js";
import { EventDay } from "../app/dashboard/agenda/lib/types";
import { PersonTile } from "../app/dashboard/person-tile/person-tile.component";
import { Rsvp } from "../app/dashboard/rsvp-item/lib/types";

export type AppData = {
  newProfiles?: PersonTile[];
  rsvps?: Rsvp[];
  firstTimeVisitors?: PersonTile[];
  birthdays?: PersonTile[];
  newDonors?: PersonTile[];

  auditoriumData?: ChartData;
  kidsCheckInData?: ChartData;
  givingData?: ChartData;

  agenda?: EventDay[];
}