import { givingApiUrl } from 'src/lib/configuration';
import {
  Batch,
  BatchGroup,
  Campus,
  Designation,
  DesignationRefund,
  Donation,
  Fund,
  Label,
  Organization,
  PaymentMethod,
  PaymentSource,
  Person,
  RecurringDonation,
  Refund,
} from 'src/lib/planningCenter/giving/2019-10-18/types';
import { fetchCollection, fetchSingle } from 'src/lib/planningCenter/shared';

export const Giving = {
  fetch: () => fetchSingle<Organization>(`${givingApiUrl}/`),
  batchGroups: {
    fetchAll: () => fetchCollection<BatchGroup>(`${givingApiUrl}/batch_groups`),
    select: (id: string) => ({
      fetch: () => fetchSingle<BatchGroup>(`${givingApiUrl}/batch_groups/${id}`),
      batches: {
        fetchAll: () =>
          fetchCollection<Batch>(`${givingApiUrl}/batch_groups/${id}/batches`),
      },
      owner: {
        fetch: () => fetchSingle<Person>(`${givingApiUrl}/batch_groups/${id}/owner`),
      },
    }),
  },
  batches: {
    fetchAll: () => fetchCollection<Batch>(`${givingApiUrl}/batches`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Batch>(`${givingApiUrl}/batches/${id}`),
      donations: {
        fetchAll: () =>
          fetchCollection<Donation>(`${givingApiUrl}/batches/${id}/donations`),
      },
    }),
  },
  campuses: {
    fetchAll: () => fetchCollection<Campus>(`${givingApiUrl}/campuses`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Campus>(`${givingApiUrl}/campuses/${id}`),
      donations: {
        fetchAll: () =>
          fetchCollection<Donation>(`${givingApiUrl}/campuses/${id}/donations`),
      },
    }),
  },
  donations: {
    fetchAll: () => fetchCollection<Donation>(`${givingApiUrl}/donations`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Donation>(`${givingApiUrl}/donations/${id}`),
      designations: {
        fetchAll: () =>
          fetchCollection<Designation>(
            `${givingApiUrl}/donations/${id}/designations`
          ),
        select: (designationId: string) => ({
          fetch: () =>
            fetchSingle<Designation>(
              `donations/${id}/designations/${designationId}`
            ),
        }),
      },
      labels: {
        fetchAll: () =>
          fetchCollection<Label>(`${givingApiUrl}/donations/${id}/labels`),
      },
      refund: {
        fetch: () => fetchSingle<Refund>(`${givingApiUrl}/donations/${id}/refund`),
        designationRefunds: {
          fetchAll: () =>
            fetchCollection<DesignationRefund>(
              `donations/${id}/refund/designation_refunds`
            ),
          select: (refundId: string) => ({
            fetch: () =>
              fetchSingle<DesignationRefund>(
                `donations/${id}/refund/designation_refunds/${refundId}`
              ),
          }),
        },
      },
    }),
  },
  funds: {
    fetchAll: () => fetchCollection<Fund>(`${givingApiUrl}/funds`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Fund>(`${givingApiUrl}/funds/${id}`),
    }),
  },
  labels: {
    fetchAll: () => fetchCollection<Label>(`${givingApiUrl}/labels`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Label>(`${givingApiUrl}/labels/${id}`),
    }),
  },
  paymentSources: {
    fetchAll: () =>
      fetchCollection<PaymentSource>(`${givingApiUrl}/payment_sources`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<PaymentSource>(`${givingApiUrl}/payment_sources/${id}`),
      donations: {
        fetchAll: () =>
          fetchCollection<Donation>(
            `${givingApiUrl}/payment_sources/${id}/donations`
          ),
      },
    }),
  },
  people: {
    fetchAll: () => fetchCollection<Person>(`${givingApiUrl}/people`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Person>(`${givingApiUrl}/people/${id}`),
      batchGroups: {
        fetchAll: () =>
          fetchCollection<BatchGroup>(`${givingApiUrl}/people/${id}/batch_groups`),
      },
      batches: {
        fetchAll: () =>
          fetchCollection<Batch>(`${givingApiUrl}/people/${id}/batches`),
      },
      donations: {
        fetchAll: () =>
          fetchCollection<Donation>(`${givingApiUrl}/people/${id}/donations`),
      },
      paymentMethods: {
        fetchAll: () =>
          fetchCollection<PaymentMethod>(
            `${givingApiUrl}/people/${id}/payment_methods`
          ),
        select: (paymentMethodId: string) => ({
          fetch: () =>
            fetchSingle<PaymentMethod>(
              `people/${id}/payment_methods/${paymentMethodId}`
            ),
          recurringDonations: {
            fetchAll: () =>
              fetchCollection<RecurringDonation>(
                `people/${id}/payment_methods/${paymentMethodId}/recurring_donations`
              ),
          },
        }),
      },
    }),
  },
  recurringDonations: {
    fetchAll: () =>
      fetchCollection<RecurringDonation>(`${givingApiUrl}/recurring_donations`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<RecurringDonation>(`${givingApiUrl}/recurring_donations/${id}`),
      designations: {
        fetchAll: () =>
          fetchCollection<Designation>(
            `recurring_donations/${id}/designations`
          ),
      },
    }),
  },
};
