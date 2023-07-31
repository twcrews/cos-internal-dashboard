import { peopleApiUrl } from 'src/lib/configuration';
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

export const People = {
  fetch: () => fetchSingle<Organization>(`${peopleApiUrl}/`),
  addresses: {
    fetchAll: () => fetchCollection<Address>(`${peopleApiUrl}/addresses`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Address>(`${peopleApiUrl}/addresses/${id}`),
    }),
  },
  anniversaryCouples: {
    fetchAll: () =>
      fetchCollection<AnniversaryCouples>(`${peopleApiUrl}/anniversary_couples`),
  },
  apps: {
    fetchAll: () => fetchCollection<App>(`${peopleApiUrl}/apps`),
    select: (id: string) => ({
      fetch: () => fetchSingle<App>(`${peopleApiUrl}/apps/${id}`),
    }),
  },
  backgroundChecks: {
    fetchAll: () =>
      fetchCollection<BackgroundCheck>(`${peopleApiUrl}/background_checks`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<BackgroundCheck>(`${peopleApiUrl}/background_checks/${id}`),
    }),
  },
  birthdayPeople: {
    fetchAll: () =>
      fetchCollection<BirthdayPeople>(`${peopleApiUrl}/birthday_people`),
  },
  campuses: {
    fetchAll: () => fetchCollection<Campus>(`${peopleApiUrl}/campuses`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Campus>(`${peopleApiUrl}/campuses/${id}`),
      lists: {
        fetchAll: () =>
          fetchCollection<List>(`${peopleApiUrl}/campuses/${id}/lists`),
      },
      serviceTimes: {
        fetchAll: () =>
          fetchCollection<ServiceTime>(
            `${peopleApiUrl}/campuses/${id}/service_times`
          ),
      },
    }),
  },
  carriers: {
    fetchAll: () => fetchCollection<Carrier>(`${peopleApiUrl}/carriers`),
  },
  emails: {
    fetchAll: () => fetchCollection<Email>(`${peopleApiUrl}/emails`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Email>(`${peopleApiUrl}/emails/${id}`),
    }),
  },
  fieldData: {
    fetchAll: () => fetchCollection<FieldDatum>(`${peopleApiUrl}/campuses`),
    select: (id: string) => ({
      fetch: () => fetchSingle<FieldDatum>(`${peopleApiUrl}/field_data/${id}`),
      fieldOption: {
        fetch: () =>
          fetchSingle<FieldOption>(`${peopleApiUrl}/field_data/${id}/field_option`),
      },
      tab: {
        fetch: () => fetchSingle<Tab>(`${peopleApiUrl}/field_data/${id}/tab`),
      },
    }),
  },
  fieldDefinitions: {
    fetchAll: () =>
      fetchCollection<FieldDefinition>(`${peopleApiUrl}/field_definitions`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<FieldDefinition>(`${peopleApiUrl}/field_definitions/${id}`),
      fieldOptions: {
        fetchAll: () =>
          fetchCollection<FieldOption>(
            `${peopleApiUrl}/field_definitions/${id}/field_options`
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
    fetchAll: () => fetchCollection<Form>(`${peopleApiUrl}/forms`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Form>(`${peopleApiUrl}/forms/${id}`),
      fields: {
        fetchAll: () =>
          fetchCollection<FormField>(`${peopleApiUrl}/forms/${id}/fields`),
        select: (fieldId: string) => ({
          fetch: () =>
            fetchSingle<FormField>(`${peopleApiUrl}/forms/${id}/fields/${fieldId}`),
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
            `${peopleApiUrl}/forms/${id}/form_submissions`
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
    fetchAll: () => fetchCollection<Household>(`${peopleApiUrl}/households`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Household>(`${peopleApiUrl}/households/${id}`),
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
          fetchCollection<Person>(`${peopleApiUrl}/households/${id}/people`),
      },
    }),
  },
  inactiveReasons: {
    fetchAll: () =>
      fetchCollection<InactiveReason>(`${peopleApiUrl}/inactive_reasons`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<InactiveReason>(`${peopleApiUrl}/inactive_reasons/${id}`),
    }),
  },
  listCategories: {
    fetchAll: () => fetchCollection<ListCategory>(`${peopleApiUrl}/list_categories`),
  },
  lists: {
    fetchAll: () => fetchCollection<List>(`${peopleApiUrl}/lists`),
    select: (id: string) => ({
      fetch: () => fetchSingle<List>(`${peopleApiUrl}/lists/${id}`),
      listResults: {
        fetchAll: () =>
          fetchCollection<ListResult>(`${peopleApiUrl}/lists/${id}/list_results`),
        select: (resultId: string) => ({
          fetch: () =>
            fetchSingle<ListResult>(
              `${peopleApiUrl}/lists/${id}/list_results/${resultId}`
            ),
        }),
      },
      people: {
        fetchAll: () =>
          fetchCollection<Person>(`${peopleApiUrl}/lists/${id}/people`),
      },
      rules: {
        fetchAll: () => fetchCollection<Rule>(`${peopleApiUrl}/lists/${id}/rules`),
        select: (ruleId: string) => ({
          fetch: () =>
            fetchSingle<Rule>(`${peopleApiUrl}/lists/${id}/rules/${ruleId}`),
        }),
      },
      shares: {
        fetchAll: () =>
          fetchCollection<ListShare>(`${peopleApiUrl}/lists/${id}/shares`),
        select: (shareId: string) => ({
          fetch: () =>
            fetchSingle<ListShare>(`${peopleApiUrl}/lists/${id}/shares/${shareId}`),
        }),
      },
      stars: {
        fetchAll: () =>
          fetchCollection<ListStar>(`${peopleApiUrl}/lists/${id}/star`),
      },
    }),
  },
  maritalStata: {
    fetchAll: () =>
      fetchCollection<MaritalStatus>(`${peopleApiUrl}/marital_statuses`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<MaritalStatus>(`${peopleApiUrl}/marital_statuses/${id}`),
    }),
  },
  messageGroups: {
    fetchAll: () => fetchCollection<MessageGroup>(`${peopleApiUrl}/message_groups`),
    select: (id: string) => ({
      fetch: () => fetchSingle<MessageGroup>(`${peopleApiUrl}/message_groups/${id}`),
      messages: {
        fetchAll: () =>
          fetchCollection<Message>(`${peopleApiUrl}/message_groups/${id}/messages`),
      },
    }),
  },
  namePrefixes: {
    fetchAll: () => fetchCollection<NamePrefix>(`${peopleApiUrl}/name_prefixes`),
    select: (id: string) => ({
      fetch: () => fetchSingle<NamePrefix>(`${peopleApiUrl}/name_prefixes/${id}`),
    }),
  },
  nameSuffixes: {
    fetchAll: () => fetchCollection<NameSuffix>(`${peopleApiUrl}/name_suffixes`),
    select: (id: string) => ({
      fetch: () => fetchSingle<NameSuffix>(`${peopleApiUrl}/name_suffixes/${id}`),
    }),
  },
  noteCategories: {
    fetchAll: () => fetchCollection<NoteCategory>(`${peopleApiUrl}/note_categories`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<NoteCategory>(`${peopleApiUrl}/note_categories/${id}`),
      shares: {
        fetchAll: () =>
          fetchCollection<NoteCategoryShare>(
            `${peopleApiUrl}/note_categories/${id}/shares`
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
            `${peopleApiUrl}/note_categories/${id}/subscribers`
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
        `${peopleApiUrl}/note_category_subscriptions`
      ),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<NoteCategorySubscription>(
          `note_category_subscriptions/${id}`
        ),
    }),
  },
  notes: {
    fetchAll: () => fetchCollection<Note>(`${peopleApiUrl}/notes`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Note>(`${peopleApiUrl}/notes/${id}`),
    }),
  },
  people: {
    fetchAll: () => fetchCollection<Person>(`${peopleApiUrl}/people`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Person>(`${peopleApiUrl}/people/${id}`),
      addresses: {
        fetchAll: () =>
          fetchCollection<Address>(`${peopleApiUrl}/people/${id}/addresses`),
      },
      apps: {
        fetchAll: () => fetchCollection<App>(`${peopleApiUrl}/people/${id}/apps`),
      },
      backgroundChecks: {
        fetchAll: () =>
          fetchCollection<BackgroundCheck>(
            `${peopleApiUrl}/people/${id}/background_checks`
          ),
      },
      connectedPeople: {
        fetchAll: () =>
          fetchCollection<ConnectedPerson>(
            `${peopleApiUrl}/people/${id}/connected_people`
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
          fetchCollection<Email>(`${peopleApiUrl}/people/${id}/emails`),
      },
      fieldData: {
        fetchAll: () =>
          fetchCollection<FieldDatum>(`${peopleApiUrl}/people/${id}/field_data`),
      },
      householdMemberships: {
        fetchAll: () =>
          fetchCollection<HouseholdMembership>(
            `people/${id}/household_memberships`
          ),
      },
      households: {
        fetchAll: () =>
          fetchCollection<Household>(`${peopleApiUrl}/people/${id}/households`),
      },
      message_groups: {
        fetchAll: () =>
          fetchCollection<MessageGroup>(
            `${peopleApiUrl}/people/${id}/message_groups`
          ),
      },
      messages: {
        fetchAll: () =>
          fetchCollection<Message>(`${peopleApiUrl}/people/${id}/messages`),
      },
      notes: {
        fetchAll: () => fetchCollection<Note>(`${peopleApiUrl}/people/${id}/notes`),
      },
      organization: {
        fetch: () =>
          fetchSingle<Organization>(`${peopleApiUrl}/people/${id}/organization`),
      },
      personApps: {
        fetchAll: () =>
          fetchCollection<PersonApp>(`${peopleApiUrl}/people/${id}/person_apps`),
        select: (appId: string) => ({
          fetch: () =>
            fetchSingle<PersonApp>(
              `${peopleApiUrl}/people/${id}/person_apps/${appId}`
            ),
        }),
      },
      phoneNumbers: {
        fetchAll: () =>
          fetchCollection<PhoneNumber>(`${peopleApiUrl}/people/${id}/phone_numbers`),
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
            `${peopleApiUrl}/people/${id}/social_profiles`
          ),
      },
      workflowCards: {
        fetchAll: () =>
          fetchCollection<WorkflowCard>(
            `${peopleApiUrl}/people/${id}/workflow_cards`
          ),
      },
      workflowShares: {
        fetchAll: () =>
          fetchCollection<WorkflowShare>(
            `${peopleApiUrl}/people/${id}/workflow_shares`
          ),
      },
    }),
  },
  peopleImports: {
    fetchAll: () => fetchCollection<PeopleImport>(`${peopleApiUrl}/people_imports`),
    select: (id: string) => ({
      fetch: () => fetchSingle<PeopleImport>(`${peopleApiUrl}/people_imports/${id}`),
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
    fetchAll: () => fetchCollection<PhoneNumber>(`${peopleApiUrl}/phone_numbers`),
    select: (id: string) => ({
      fetch: () => fetchSingle<PhoneNumber>(`${peopleApiUrl}/phone_numbers/${id}`),
    }),
  },
  reports: {
    fetchAll: () => fetchCollection<Report>(`${peopleApiUrl}/reports`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Report>(`${peopleApiUrl}/reports/${id}`),
      createdBy: {
        fetch: () => fetchSingle<Person>(`${peopleApiUrl}/reports/${id}/created_by`),
      },
      updatedBy: {
        fetch: () => fetchSingle<Person>(`${peopleApiUrl}/reports/${id}/updated_by`),
      },
    }),
  },
  schoolOptions: {
    fetchAll: () => fetchCollection<SchoolOption>(`${peopleApiUrl}/school_options`),
    select: (id: string) => ({
      fetch: () => fetchSingle<SchoolOption>(`${peopleApiUrl}/school_options/${id}`),
    }),
  },
  socialProfiles: {
    fetchAll: () =>
      fetchCollection<SocialProfile>(`${peopleApiUrl}/social_profiles`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<SocialProfile>(`${peopleApiUrl}/social_profiles/${id}`),
    }),
  },
  stats: {
    fetch: () => fetchSingle<OrganizationStatistics>(`${peopleApiUrl}/stats`),
  },
  tabs: {
    fetchAll: () => fetchCollection<Tab>(`${peopleApiUrl}/tabs`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Tab>(`${peopleApiUrl}/tabs/${id}`),
      fieldDefinitions: {
        fetchAll: () =>
          fetchCollection<FieldDefinition>(
            `${peopleApiUrl}/tabs/${id}/field_definitions`
          ),
      },
      fieldOptions: {
        fetchAll: () =>
          fetchCollection<FieldOption>(`${peopleApiUrl}/tabs/${id}/field_options`),
        select: (optionId: string) => ({
          fetch: () =>
            fetchSingle<FieldOption>(
              `${peopleApiUrl}/tabs/${id}/field_options/${optionId}`
            ),
        }),
      },
    }),
  },
  workflowCategories: {
    fetchAll: () =>
      fetchCollection<WorkflowCategory>(`${peopleApiUrl}/workflow_categories`),
    select: (id: string) => ({
      fetch: () =>
        fetchSingle<WorkflowCategory>(`${peopleApiUrl}/workflow_categories/${id}`),
    }),
  },
  workflows: {
    fetchAll: () => fetchCollection<Workflow>(`${peopleApiUrl}/workflows`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Workflow>(`${peopleApiUrl}/workflows/${id}`),
      cards: {
        fetchAll: () =>
          fetchCollection<WorkflowCard>(`${peopleApiUrl}/workflows/${id}/cards`),
        select: (cardId: string) => ({
          fetch: () =>
            fetchSingle<WorkflowCard>(
              `${peopleApiUrl}/workflows/${id}/cards/${cardId}`
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
          fetchCollection<Person>(`${peopleApiUrl}/workflows/${id}/shared_people`),
      },
      shares: {
        fetchAll: () =>
          fetchCollection<WorkflowShare>(`${peopleApiUrl}/workflows/${id}/shares`),
        select: (shareId: string) => ({
          fetch: () =>
            fetchSingle<WorkflowShare>(
              `${peopleApiUrl}/workflows/${id}/shares/${shareId}`
            ),
        }),
      },
      steps: {
        fetchAll: () =>
          fetchCollection<WorkflowStep>(`${peopleApiUrl}/workflows/${id}/steps`),
        select: (stepId: string) => ({
          fetch: () =>
            fetchSingle<WorkflowStep>(
              `${peopleApiUrl}/workflows/${id}/steps/${stepId}`
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
