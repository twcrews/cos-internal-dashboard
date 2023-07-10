import { planningCenterProducts } from 'src/lib/configuration';
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

const rootUrl =
  planningCenterProducts.find((p) => p.name === 'Giving')?.baseUrl ?? '';

export const Giving = {
  fetch: () => fetchSingle<Organization>(`${rootUrl}/`),
  batchGroups: {
    fetchAll: () => fetchCollection<BatchGroup>(`${rootUrl}/batch_groups`),
    select: (id: string) => ({
      fetch: () => fetchSingle<BatchGroup>(`${rootUrl}/batch_groups/${id}`),
      batches: {
        fetchAll: () =>
          fetchCollection<Batch>(`${rootUrl}/batch_groups/${id}/batches`),
      },
      owner: {
        fetch: () => fetchSingle<Person>(`${rootUrl}/batch_groups/${id}/owner`),
      },
    }),
  },
  batches: {
    fetchAll: () => fetchCollection<Batch>(`${rootUrl}/batches`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Batch>(`${rootUrl}/batches/${id}`),
      donations: {
        fetchAll: () =>
          fetchCollection<Donation>(`${rootUrl}/batches/${id}/donations`),
      },
    }),
  },
  campuses: {
    fetchAll: () => fetchCollection<Campus>(`${rootUrl}/campuses`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Campus>(`${rootUrl}/campuses/${id}`),
      donations: {
        fetchAll: () =>
          fetchCollection<Donation>(`${rootUrl}/campuses/${id}/donations`),
      },
    }),
  },
  donations: {
    fetchAll: () => fetchCollection<Donation>(`${rootUrl}/donations`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Donation>(`${rootUrl}/donations/${id}`),
      designations: {
        fetchAll: () =>
          fetchCollection<Designation>(
            `${rootUrl}/donations/${id}/designations`
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
          fetchCollection<Label>(`${rootUrl}/donations/${id}/labels`),
      },
      refund: {
        fetch: () => fetchSingle<Refund>(`${rootUrl}/donations/${id}/refund`),
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
    fetchAll: () => fetchCollection<Fund>(`${rootUrl}/funds`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Fund>(`${rootUrl}/funds/${id}`),
    }),
  },
  labels: {
    fetchAll: () => fetchCollection<Label>(`${rootUrl}/labels`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Label>(`${rootUrl}/labels/${id}`),
    }),
  },
  paymentSources: {
    fetchAll: () =>
      fetchCollection<PaymentSource>(`${rootUrl}/payment_sources`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<PaymentSource>(`${rootUrl}/payment_sources/${id}`),
      donations: {
        fetchAll: () =>
          fetchCollection<Donation>(
            `${rootUrl}/payment_sources/${id}/donations`
          ),
      },
    }),
  },
  people: {
    fetchAll: () => fetchCollection<Person>(`${rootUrl}/people`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Person>(`${rootUrl}/people/${id}`),
      batchGroups: {
        fetchAll: () =>
          fetchCollection<BatchGroup>(`${rootUrl}/people/${id}/batch_groups`),
      },
      batches: {
        fetchAll: () =>
          fetchCollection<Batch>(`${rootUrl}/people/${id}/batches`),
      },
      donations: {
        fetchAll: () =>
          fetchCollection<Donation>(`${rootUrl}/people/${id}/donations`),
      },
      paymentMethods: {
        fetchAll: () =>
          fetchCollection<PaymentMethod>(
            `${rootUrl}/people/${id}/payment_methods`
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
      fetchCollection<RecurringDonation>(`${rootUrl}/recurring_donations`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<RecurringDonation>(`${rootUrl}/recurring_donations/${id}`),
      designations: {
        fetchAll: () =>
          fetchCollection<Designation>(
            `recurring_donations/${id}/designations`
          ),
      },
    }),
  },
};
