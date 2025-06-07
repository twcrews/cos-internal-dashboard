import { HomeWidgetsNewDonor } from '../../../../lib/planningCenter/giving/privateTypes';
import { PlanningCenterCollectionResponse } from '../../../../lib/planningCenter/shared';
import { PersonTile } from '../../person-tile/person-tile.component';
import { DateTime } from 'luxon';

export const parseNewDonors = (
  value: PlanningCenterCollectionResponse<HomeWidgetsNewDonor>
): PersonTile[] => {
  const data = value.data ?? [];
  return data.map((d) => ({
    avatarUrl: d.attributes?.avatar_url,
    name: d.attributes?.name ?? 'Unknown person',
    caption: DateTime.fromISO(
      d.attributes?.first_donation_received_at?.toString() ?? ''
    ).toFormat('MMMM d'),
  }));
};
