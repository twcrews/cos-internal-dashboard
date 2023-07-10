import { planningCenterProducts } from 'src/lib/configuration';
import {
  Address,
  AnniversaryCouples,
  App,
  BackgroundCheck,
  BirthdayPeople,
  Campus,
  Carrier,
  ConnectedPerson,
  Email,
  FieldDatum,
  FieldDefinition,
  FieldOption,
  Form,
  FormField,
  FormFieldOption,
  FormSubmission,
  FormSubmissionValue,
  Household,
  HouseholdMembership,
  InactiveReason,
  List,
  ListCategory,
  ListResult,
  ListShare,
  ListStar,
  MaritalStatus,
  Message,
  MessageGroup,
  NamePrefix,
  NameSuffix,
  Note,
  NoteCategory,
  NoteCategoryShare,
  NoteCategorySubscription,
  Organization,
  OrganizationStatistics,
  PeopleImport,
  PeopleImportConflict,
  PeopleImportHistory,
  Person,
  PersonApp,
  PhoneNumber,
  PlatformNotification,
  Report,
  Rule,
  SchoolOption,
  ServiceTime,
  SocialProfile,
  Tab,
  Workflow,
  WorkflowCard,
  WorkflowCardActivity,
  WorkflowCardNote,
  WorkflowCategory,
  WorkflowShare,
  WorkflowStep,
  WorkflowStepAssigneeSummary,
} from 'src/lib/planningCenter/people/2023-03-21/types';
import { fetchCollection, fetchSingle } from 'src/lib/planningCenter/shared';

const rootUrl =
  planningCenterProducts.find((p) => p.name === 'People')?.baseUrl ?? '';

export const People = {
  fetch: () => fetchSingle<Organization>(`${rootUrl}/`),
  addresses: {
    fetchAll: () => fetchCollection<Address>(`${rootUrl}/addresses`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Address>(`${rootUrl}/addresses/${id}`),
    }),
  },
  anniversaryCouples: {
    fetchAll: () =>
      fetchCollection<AnniversaryCouples>(`${rootUrl}/anniversary_couples`),
  },
  apps: {
    fetchAll: () => fetchCollection<App>(`${rootUrl}/apps`),
    select: (id: string) => ({
      fetch: () => fetchSingle<App>(`${rootUrl}/apps/${id}`),
    }),
  },
  backgroundChecks: {
    fetchAll: () =>
      fetchCollection<BackgroundCheck>(`${rootUrl}/background_checks`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<BackgroundCheck>(`${rootUrl}/background_checks/${id}`),
    }),
  },
  birthdayPeople: {
    fetchAll: () =>
      fetchCollection<BirthdayPeople>(`${rootUrl}/birthday_people`),
  },
  campuses: {
    fetchAll: () => fetchCollection<Campus>(`${rootUrl}/campuses`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Campus>(`${rootUrl}/campuses/${id}`),
      lists: {
        fetchAll: () =>
          fetchCollection<List>(`${rootUrl}/campuses/${id}/lists`),
      },
      serviceTimes: {
        fetchAll: () =>
          fetchCollection<ServiceTime>(
            `${rootUrl}/campuses/${id}/service_times`
          ),
      },
    }),
  },
  carriers: {
    fetchAll: () => fetchCollection<Carrier>(`${rootUrl}/carriers`),
  },
  emails: {
    fetchAll: () => fetchCollection<Email>(`${rootUrl}/emails`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Email>(`${rootUrl}/emails/${id}`),
    }),
  },
  fieldData: {
    fetchAll: () => fetchCollection<FieldDatum>(`${rootUrl}/campuses`),
    select: (id: string) => ({
      fetch: () => fetchSingle<FieldDatum>(`${rootUrl}/field_data/${id}`),
      fieldOption: {
        fetch: () =>
          fetchSingle<FieldOption>(`${rootUrl}/field_data/${id}/field_option`),
      },
      tab: {
        fetch: () => fetchSingle<Tab>(`${rootUrl}/field_data/${id}/tab`),
      },
    }),
  },
  fieldDefinitions: {
    fetchAll: () =>
      fetchCollection<FieldDefinition>(`${rootUrl}/field_definitions`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<FieldDefinition>(`${rootUrl}/field_definitions/${id}`),
      fieldOptions: {
        fetchAll: () =>
          fetchCollection<FieldOption>(
            `${rootUrl}/field_definitions/${id}/field_options`
          ),
        select: (fieldOptionId: string) => ({
          fetch: () =>
            fetchSingle<FieldOption>(
              `field_definitions/${id}/field_options/${fieldOptionId}`
            ),
        }),
      },
    }),
  },
  forms: {
    fetchAll: () => fetchCollection<Form>(`${rootUrl}/forms`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Form>(`${rootUrl}/forms/${id}`),
      fields: {
        fetchAll: () =>
          fetchCollection<FormField>(`${rootUrl}/forms/${id}/fields`),
        select: (fieldId: string) => ({
          fetch: () =>
            fetchSingle<FormField>(`${rootUrl}/forms/${id}/fields/${fieldId}`),
          options: {
            fetchAll: () =>
              fetchCollection<FormFieldOption>(
                `forms/${id}/fields/${fieldId}/options`
              ),
            select: (optionId: string) => ({
              fetch: () =>
                fetchSingle<FormFieldOption>(
                  `forms/${id}/fields/${fieldId}/options/${optionId}`
                ),
            }),
          },
        }),
      },
      formSubmissions: {
        fetchAll: () =>
          fetchCollection<FormSubmission>(
            `${rootUrl}/forms/${id}/form_submissions`
          ),
        select: (submissionId: string) => ({
          fetch: () =>
            fetchSingle<FormSubmission>(
              `forms/${id}/form_submissions/${submissionId}`
            ),
          form: {
            fetch: () =>
              fetchSingle<Form>(
                `forms/${id}/form_submissions/${submissionId}/form`
              ),
          },
          formFields: {
            fetchAll: () =>
              fetchCollection<FormField>(
                `forms/${id}/form_submissions/${submissionId}/form_fields`
              ),
          },
          formSubmissionValues: {
            fetchAll: () =>
              fetchCollection<FormSubmissionValue>(
                `forms/${id}/form_submissions/${submissionId}/form_submission_values`
              ),
            select: (valueId: string) =>
              fetchSingle<FormSubmissionValue>(
                `forms/${id}/form_submissions/${submissionId}/form_submission_values/${valueId}`
              ),
          },
        }),
      },
    }),
  },
  households: {
    fetchAll: () => fetchCollection<Household>(`${rootUrl}/households`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Household>(`${rootUrl}/households/${id}`),
      memberships: {
        fetchAll: () =>
          fetchCollection<HouseholdMembership>(
            `households/${id}/household_memberships`
          ),
        select: (membershipId: string) => ({
          fetch: () =>
            fetchSingle<HouseholdMembership>(
              `households/${id}/household_memberships/${membershipId}`
            ),
        }),
      },
      people: {
        fetchAll: () =>
          fetchCollection<Person>(`${rootUrl}/households/${id}/people`),
      },
    }),
  },
  inactiveReasons: {
    fetchAll: () =>
      fetchCollection<InactiveReason>(`${rootUrl}/inactive_reasons`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<InactiveReason>(`${rootUrl}/inactive_reasons/${id}`),
    }),
  },
  listCategories: {
    fetchAll: () => fetchCollection<ListCategory>(`${rootUrl}/list_categories`),
  },
  lists: {
    fetchAll: () => fetchCollection<List>(`${rootUrl}/lists`),
    select: (id: string) => ({
      fetch: () => fetchSingle<List>(`${rootUrl}/lists/${id}`),
      listResults: {
        fetchAll: () =>
          fetchCollection<ListResult>(`${rootUrl}/lists/${id}/list_results`),
        select: (resultId: string) => ({
          fetch: () =>
            fetchSingle<ListResult>(
              `${rootUrl}/lists/${id}/list_results/${resultId}`
            ),
        }),
      },
      people: {
        fetchAll: () =>
          fetchCollection<Person>(`${rootUrl}/lists/${id}/people`),
      },
      rules: {
        fetchAll: () => fetchCollection<Rule>(`${rootUrl}/lists/${id}/rules`),
        select: (ruleId: string) => ({
          fetch: () =>
            fetchSingle<Rule>(`${rootUrl}/lists/${id}/rules/${ruleId}`),
        }),
      },
      shares: {
        fetchAll: () =>
          fetchCollection<ListShare>(`${rootUrl}/lists/${id}/shares`),
        select: (shareId: string) => ({
          fetch: () =>
            fetchSingle<ListShare>(`${rootUrl}/lists/${id}/shares/${shareId}`),
        }),
      },
      stars: {
        fetchAll: () =>
          fetchCollection<ListStar>(`${rootUrl}/lists/${id}/star`),
      },
    }),
  },
  maritalStata: {
    fetchAll: () =>
      fetchCollection<MaritalStatus>(`${rootUrl}/marital_statuses`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<MaritalStatus>(`${rootUrl}/marital_statuses/${id}`),
    }),
  },
  messageGroups: {
    fetchAll: () => fetchCollection<MessageGroup>(`${rootUrl}/message_groups`),
    select: (id: string) => ({
      fetch: () => fetchSingle<MessageGroup>(`${rootUrl}/message_groups/${id}`),
      messages: {
        fetchAll: () =>
          fetchCollection<Message>(`${rootUrl}/message_groups/${id}/messages`),
      },
    }),
  },
  namePrefixes: {
    fetchAll: () => fetchCollection<NamePrefix>(`${rootUrl}/name_prefixes`),
    select: (id: string) => ({
      fetch: () => fetchSingle<NamePrefix>(`${rootUrl}/name_prefixes/${id}`),
    }),
  },
  nameSuffixes: {
    fetchAll: () => fetchCollection<NameSuffix>(`${rootUrl}/name_suffixes`),
    select: (id: string) => ({
      fetch: () => fetchSingle<NameSuffix>(`${rootUrl}/name_suffixes/${id}`),
    }),
  },
  noteCategories: {
    fetchAll: () => fetchCollection<NoteCategory>(`${rootUrl}/note_categories`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<NoteCategory>(`${rootUrl}/note_categories/${id}`),
      shares: {
        fetchAll: () =>
          fetchCollection<NoteCategoryShare>(
            `${rootUrl}/note_categories/${id}/shares`
          ),
        select: (shareId: string) => ({
          fetch: () =>
            fetchSingle<NoteCategoryShare>(
              `note_categories/${id}/shares/${shareId}`
            ),
        }),
      },
      subscribers: {
        fetchAll: () =>
          fetchCollection<Person>(
            `${rootUrl}/note_categories/${id}/subscribers`
          ),
      },
      subscriptions: {
        fetchAll: () =>
          fetchCollection<NoteCategorySubscription>(
            `note_categories/${id}/subscriptions`
          ),
      },
    }),
  },
  noteCategorySubscription: {
    fetchAll: () =>
      fetchCollection<NoteCategorySubscription>(
        `${rootUrl}/note_category_subscriptions`
      ),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<NoteCategorySubscription>(
          `note_category_subscriptions/${id}`
        ),
    }),
  },
  notes: {
    fetchAll: () => fetchCollection<Note>(`${rootUrl}/notes`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Note>(`${rootUrl}/notes/${id}`),
    }),
  },
  people: {
    fetchAll: () => fetchCollection<Person>(`${rootUrl}/people`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Person>(`${rootUrl}/people/${id}`),
      addresses: {
        fetchAll: () =>
          fetchCollection<Address>(`${rootUrl}/people/${id}/addresses`),
      },
      apps: {
        fetchAll: () => fetchCollection<App>(`${rootUrl}/people/${id}/apps`),
      },
      backgroundChecks: {
        fetchAll: () =>
          fetchCollection<BackgroundCheck>(
            `${rootUrl}/people/${id}/background_checks`
          ),
      },
      connectedPeople: {
        fetchAll: () =>
          fetchCollection<ConnectedPerson>(
            `${rootUrl}/people/${id}/connected_people`
          ),
        select: (connectedPersonId: string) => ({
          fetch: () =>
            fetchSingle<ConnectedPerson>(
              `people/${id}/connected_people/${connectedPersonId}`
            ),
        }),
      },
      emails: {
        fetchAll: () =>
          fetchCollection<Email>(`${rootUrl}/people/${id}/emails`),
      },
      fieldData: {
        fetchAll: () =>
          fetchCollection<FieldDatum>(`${rootUrl}/people/${id}/field_data`),
      },
      householdMemberships: {
        fetchAll: () =>
          fetchCollection<HouseholdMembership>(
            `people/${id}/household_memberships`
          ),
      },
      households: {
        fetchAll: () =>
          fetchCollection<Household>(`${rootUrl}/people/${id}/households`),
      },
      message_groups: {
        fetchAll: () =>
          fetchCollection<MessageGroup>(
            `${rootUrl}/people/${id}/message_groups`
          ),
      },
      messages: {
        fetchAll: () =>
          fetchCollection<Message>(`${rootUrl}/people/${id}/messages`),
      },
      notes: {
        fetchAll: () => fetchCollection<Note>(`${rootUrl}/people/${id}/notes`),
      },
      organization: {
        fetch: () =>
          fetchSingle<Organization>(`${rootUrl}/people/${id}/organization`),
      },
      personApps: {
        fetchAll: () =>
          fetchCollection<PersonApp>(`${rootUrl}/people/${id}/person_apps`),
        select: (appId: string) => ({
          fetch: () =>
            fetchSingle<PersonApp>(
              `${rootUrl}/people/${id}/person_apps/${appId}`
            ),
        }),
      },
      phoneNumbers: {
        fetchAll: () =>
          fetchCollection<PhoneNumber>(`${rootUrl}/people/${id}/phone_numbers`),
      },
      platformNotifications: {
        fetchAll: () =>
          fetchCollection<PlatformNotification>(
            `people/${id}/platform_notifications`
          ),
        select: (notificationId: string) => ({
          fetch: () =>
            fetchSingle<PlatformNotification>(
              `people/${id}/platform_notifications/${notificationId}`
            ),
        }),
      },
      socialProfiles: {
        fetchAll: () =>
          fetchCollection<SocialProfile>(
            `${rootUrl}/people/${id}/social_profiles`
          ),
      },
      workflowCards: {
        fetchAll: () =>
          fetchCollection<WorkflowCard>(
            `${rootUrl}/people/${id}/workflow_cards`
          ),
      },
      workflowShares: {
        fetchAll: () =>
          fetchCollection<WorkflowShare>(
            `${rootUrl}/people/${id}/workflow_shares`
          ),
      },
    }),
  },
  peopleImports: {
    fetchAll: () => fetchCollection<PeopleImport>(`${rootUrl}/people_imports`),
    select: (id: string) => ({
      fetch: () => fetchSingle<PeopleImport>(`${rootUrl}/people_imports/${id}`),
      conflicts: {
        fetchAll: () =>
          fetchCollection<PeopleImportConflict>(
            `people_imports/${id}/conflicts`
          ),
        select: (conflictId: string) => ({
          fetch: () =>
            fetchSingle<PeopleImportConflict>(
              `people_imports/${id}/conflicts/${conflictId}`
            ),
        }),
      },
      histories: {
        fetchAll: () =>
          fetchCollection<PeopleImportHistory>(
            `people_imports/${id}/histories`
          ),
        select: (historyId: string) => ({
          fetch: () =>
            fetchSingle<PeopleImportHistory>(
              `people_imports/${id}/histories/${historyId}`
            ),
        }),
      },
    }),
  },
  phoneNumbers: {
    fetchAll: () => fetchCollection<PhoneNumber>(`${rootUrl}/phone_numbers`),
    select: (id: string) => ({
      fetch: () => fetchSingle<PhoneNumber>(`${rootUrl}/phone_numbers/${id}`),
    }),
  },
  reports: {
    fetchAll: () => fetchCollection<Report>(`${rootUrl}/reports`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Report>(`${rootUrl}/reports/${id}`),
      createdBy: {
        fetch: () => fetchSingle<Person>(`${rootUrl}/reports/${id}/created_by`),
      },
      updatedBy: {
        fetch: () => fetchSingle<Person>(`${rootUrl}/reports/${id}/updated_by`),
      },
    }),
  },
  schoolOptions: {
    fetchAll: () => fetchCollection<SchoolOption>(`${rootUrl}/school_options`),
    select: (id: string) => ({
      fetch: () => fetchSingle<SchoolOption>(`${rootUrl}/school_options/${id}`),
    }),
  },
  socialProfiles: {
    fetchAll: () =>
      fetchCollection<SocialProfile>(`${rootUrl}/social_profiles`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<SocialProfile>(`${rootUrl}/social_profiles/${id}`),
    }),
  },
  stats: {
    fetch: () => fetchSingle<OrganizationStatistics>(`${rootUrl}/stats`),
  },
  tabs: {
    fetchAll: () => fetchCollection<Tab>(`${rootUrl}/tabs`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Tab>(`${rootUrl}/tabs/${id}`),
      fieldDefinitions: {
        fetchAll: () =>
          fetchCollection<FieldDefinition>(
            `${rootUrl}/tabs/${id}/field_definitions`
          ),
      },
      fieldOptions: {
        fetchAll: () =>
          fetchCollection<FieldOption>(`${rootUrl}/tabs/${id}/field_options`),
        select: (optionId: string) => ({
          fetch: () =>
            fetchSingle<FieldOption>(
              `${rootUrl}/tabs/${id}/field_options/${optionId}`
            ),
        }),
      },
    }),
  },
  workflowCategories: {
    fetchAll: () =>
      fetchCollection<WorkflowCategory>(`${rootUrl}/workflow_categories`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<WorkflowCategory>(`${rootUrl}/workflow_categories/${id}`),
    }),
  },
  workflows: {
    fetchAll: () => fetchCollection<Workflow>(`${rootUrl}/workflows`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Workflow>(`${rootUrl}/workflows/${id}`),
      cards: {
        fetchAll: () =>
          fetchCollection<WorkflowCard>(`${rootUrl}/workflows/${id}/cards`),
        select: (cardId: string) => ({
          fetch: () =>
            fetchSingle<WorkflowCard>(
              `${rootUrl}/workflows/${id}/cards/${cardId}`
            ),
          activities: {
            fetchAll: () =>
              fetchCollection<WorkflowCardActivity>(
                `workflows/${id}/cards/${id}/activities`
              ),
            select: (activityId: string) => ({
              fetch: () =>
                fetchSingle<WorkflowCardActivity>(
                  `workflows/${id}/card/${cardId}/activities/${activityId}`
                ),
            }),
          },
          notes: {
            fetchAll: () =>
              fetchCollection<WorkflowCardNote>(
                `workflows/${id}/card/${cardId}/notes`
              ),
            select: (noteId: string) => ({
              fetch: () =>
                fetchSingle<WorkflowCardNote>(
                  `workflows/${id}/cards/${cardId}/notes/${noteId}`
                ),
            }),
          },
        }),
      },
      sharedPeople: {
        fetchAll: () =>
          fetchCollection<Person>(`${rootUrl}/workflows/${id}/shared_people`),
      },
      shares: {
        fetchAll: () =>
          fetchCollection<WorkflowShare>(`${rootUrl}/workflows/${id}/shares`),
        select: (shareId: string) => ({
          fetch: () =>
            fetchSingle<WorkflowShare>(
              `${rootUrl}/workflows/${id}/shares/${shareId}`
            ),
        }),
      },
      steps: {
        fetchAll: () =>
          fetchCollection<WorkflowStep>(`${rootUrl}/workflows/${id}/steps`),
        select: (stepId: string) => ({
          fetch: () =>
            fetchSingle<WorkflowStep>(
              `${rootUrl}/workflows/${id}/steps/${stepId}`
            ),
          assigneeSummaries: {
            fetchAll: () =>
              fetchCollection<WorkflowStepAssigneeSummary>(
                `workflows/${id}/steps/${stepId}/assignee_summaries`
              ),
            select: (summaryId: string) => ({
              fetch: () =>
                fetchSingle<WorkflowCardActivity>(
                  `workflows/${id}/steps/${stepId}/assignee_summaries/${summaryId}`
                ),
            }),
          },
        }),
      },
    }),
  },
};
