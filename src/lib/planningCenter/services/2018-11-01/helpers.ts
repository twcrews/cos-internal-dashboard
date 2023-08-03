import { PlanningCenterResponseData } from '../../shared';
import { PlanPerson, PlanPersonStatus } from './types';

export const getPlanPersonStatus = (
  person: PlanningCenterResponseData<PlanPerson>
) => {
  const cleanValue = person.attributes?.status?.toLowerCase();
  switch (cleanValue) {
    case 'c':
    case 'confirmed':
      return PlanPersonStatus.Confirmed;
    case 'd':
    case 'declined':
      return PlanPersonStatus.Declined;
    case 'u':
    case 'unconfirmed':
      return PlanPersonStatus.Unconfirmed;
  }
  return undefined;
};
