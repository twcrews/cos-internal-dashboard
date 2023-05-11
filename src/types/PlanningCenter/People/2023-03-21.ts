export type Address = {
  city?: string;
  state?: string;
  zip?: string;
  street?: string;
  location?: string;
  primary?: boolean;
  created_at?: Date;
  updated_at?: Date;
};

export type App = {
  name?: string;
  url?: string;
};

export type BackgroundCheck = {
  current?: boolean;
  note?: string;
  status_updated_at?: Date;
  report_url?: string;
  expires_on?: Date;
  result?: string;
  completed_at?: Date;
};

export type Campus = {
  avatar_url?: string;
  church_center_enabled?: boolean;
  city?: string;
  contact_email_address?: string;
  country?: string;
  created_at?: Date;
  date_format?: string;
  description?: string;
  geolocation_set_manually?: boolean;
  latitude?: number;
  longitude?: number;
  name?: string;
  phone_number?: string;
  state?: string;
  street?: string;
  time_zone?: string;
  twenty_four_hour_time?: boolean;
  updated_at?: Date;
  website?: string;
  zip?: string;
};

export type Carrier = {
  value?: string;
  name?: string;
  international?: boolean;
};

export type Condition = {
  application?: string;
  definition_class?: string;
  comparison?: string;
  settings?: string;
  definition_identifier?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type ConnectedPerson = {
  given_name?: string;
  first_name?: string;
  nickname?: string;
  middle_name?: string;
  last_name?: string;
  gender?: string;
  organization_name?: string;
  organization_id?: number;
};

export type Email = {
  address?: string;
  location?: string;
  primary?: boolean;
  created_at?: Date;
  updated_at?: Date;
  blocked?: boolean;
};

export type FieldDatum = {
  file?: {
    url?: string;
  };
  file_content_type?: string;
  file_name?: string;
  file_size?: string;
  value?: string;
};

export type FieldDefinition = {
  data_type?: string;
  name?: string;
  sequence?: number;
  slug?: string;
  config?: string;
  deleted_at?: Date;
  tab_id?: number;
};

export type FieldOption = {
  value?: string;
  sequence?: number;
};

export type Form = {
  name?: string;
  description?: string;
  active?: boolean;
  archived_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  submission_count?: number;
  public_url?: string;
  recently_viewed?: boolean;
  archived?: boolean;
};

export type FormField = {
  field_type?: string;
  label?: string;
  description?: string;
  required?: boolean;
  settings?: string;
  sequence?: number;
  created_at?: Date;
  updated_at?: Date;
};

export type FormFieldOption = {
  label?: string;
  sequence?: number;
  created_at?: Date;
  updated_at?: Date;
};

export type FormSubmission = {
  verified?: boolean;
  requires_verification?: boolean;
  created_at?: Date;
};

export type FormSubmissionValue = {
  display_value?: string;
  attachments?: any[];
};

export type Household = {
  name?: string;
  member_count?: number;
  primary_contact_name?: string;
  created_at?: Date;
  updated_at?: Date;
  avatar?: string;
  primary_contact_id?: number;
};

export type HouseholdMembership = {
  person_name?: string;
  pending?: boolean;
};

export type InactiveReason = {
  value?: string;
};

export type List = {
  name?: string;
  auto_refresh?: boolean;
  status?: string;
  has_inactive_results?: boolean;
  include_inactive?: boolean;
  returns?: string;
  return_original_if_none?: boolean;
  subset?: string;
  automations_active?: boolean;
  automations_count?: number;
  paused_automations_count?: number;
  description?: string;
  invalid?: boolean;
  name_or_description?: string;
  recently_viewed?: boolean;
  refreshed_at?: Date;
  starred?: boolean;
  total_people?: number;
  batch_completed_at?: Date;
  created_at?: Date;
  updated_at?: Date;
};

export type ListCategory = {
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  organization_id?: number;
};

export type ListResult = {
  created_at?: Date;
  updated_at?: Date;
};

export type ListStar = {
  created_at?: Date;
};

export type ListShare = {
  permission?: ListSharePermission;
  group?: PermissionGroup;
  created_at?: Date;
  name?: string;
};

export type MailchimpSyncStatus = {
  status?: string;
  error?: string;
  progress?: number;
  completed_at?: Date;
  segment_id?: number;
};

export { InactiveReason as MaritalStatus };

export type Message = {
  kind?: MessageKind;
  to_addresses?: string;
  subject?: string;
  file?: string;
  delivery_status?: string;
  reject_reason?: string;
  created_at?: Date;
  sent_at?: Date;
  bounced_at?: Date;
  rejection_notification_sent_at?: Date;
  from_name?: string;
  from_address?: string;
  read_at?: Date;
  app_name?: string;
  message_type?: string;
};

export type MessageGroup = {
  uuid?: string;
  message_type?: string;
  from_address?: string;
  subject?: string;
  message_count?: number;
  system_message?: boolean;
  created_at?: Date;
};

export { InactiveReason as NamePrefix };

export { InactiveReason as NameSuffix };

export type Note = {
  note?: string;
  created_at?: Date;
  updated_at?: Date;
  display_date?: Date;
  note_category_id?: number;
  organization_id?: number;
  person_id?: number;
  created_by_id?: number;
};

export type NoteCategory = {
  name?: string;
  locked?: boolean;
  created_at?: Date;
  updated_at?: Date;
  organization_id?: number;
};

export type NoteCategoryShare = {
  group?: PermissionGroup;
  permission?: NoteCategorySharePermission;
  person_id?: number;
};

export { ListResult as NoteCategorySubscription };

export type Organization = {
  name?: string;
  country_code?: string;
  date_format?: number;
  time_zone?: string;
  contact_website?: string;
  created_at?: Date;
  avatar_url?: string;
};

export type PeopleImport = {
  attribs?: string;
  status?: PeopleImportStatus;
  created_at?: Date;
  updated_at?: Date;
  processed_at?: Date;
  undone_at?: Date;
};

export type PeopleImportConflict = {
  kind?: string;
  name?: string;
  message?: string;
  data?: string;
  conflicting_changes?: string;
  ignore?: boolean;
  created_at?: Date;
  updated_at?: Date;
};

export type PeopleImportHistory = {
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  conflicting_changes?: Record<string | number | symbol, any>;
  kind?: string;
};

export type Person = {
  given_name?: string;
  first_name?: string;
  nickname?: string;
  middle_name?: string;
  last_name?: string;
  birthdate?: Date;
  anniversary?: Date;
  gender?: string;
  grade?: number;
  child?: boolean;
  graduation_year?: number;
  site_administrator?: boolean;
  accounting_administrator?: boolean;
  people_permissions?: string;
  membership?: string;
  inactivated_at?: Date;
  status?: string;
  medical_notes?: string;
  created_at?: Date;
  updated_at?: Date;
  avatar?: string;
  name?: string;
  demographic_avatar_url?: string;
  directory_status?: string;
  passed_background_check?: boolean;
  can_create_forms?: boolean;
  can_email_lists?: boolean;
  school_type?: string;
  remote_id?: number;
};

export type PersonApp = {
  allow_pco_login?: boolean;
  people_permissions?: PersonAppPermissions;
};

export type PersonMerger = {
  created_at?: Date;
  person_to_keep_id?: number;
  person_to_remove_id?: number;
};

export type PhoneNumber = {
  number?: string;
  carrier?: string;
  location?: string;
  primary?: boolean;
  created_at?: Date;
  updated_at?: Date;
  e164?: string;
  international?: string;
  national?: string;
  country_code?: string;
};

export type PlatformNotification = {
  html?: string;
};

export type Report = {
  name?: string;
  body?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Rule = {
  subset?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type SchoolOption = {
  value?: string;
  sequence?: number;
  beginning_grade?: string;
  ending_grade?: string;
  school_types?: string[];
};

export type ServiceTime = {
  start_time?: number;
  day?: DayOfWeek;
  description?: string;
};

export type SocialProfile = {
  site?: string;
  url?: string;
  verified?: boolean;
  created_at?: Date;
  updated_at?: Date;
};

export type Tab = {
  name?: string;
  sequence?: number;
  slug?: string;
};

export type Workflow = {
  name?: string;
  my_ready_card_count?: number;
  total_ready_card_count?: number;
  completed_card_count?: number;
  total_cards_count?: number;
  total_ready_and_snoozed_card_count?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  campus_id?: number;
  workflow_category_id?: number;
  recently_viewed?: boolean;
};

export type WorkflowCard = {
  snooze_until?: Date;
  overdue?: boolean;
  stage?: string;
  calculated_due_at_in_days_ago?: number;
  sticky_assignment?: boolean;
  created_at?: Date;
  updated_at?: Date;
  completed_at?: Date;
  flagged_for_notification_at?: Date;
  removed_at?: Date;
  moved_to_step_at?: Date;
};

export type WorkflowCardActivity = {
  comment?: string;
  content?: string;
  form_submission_url?: string;
  person_avatar_url?: string;
  person_name?: string;
  reassigned_to_avatar_url?: string;
  reassigned_to_name?: string;
  subject?: string;
  type?: string;
  content_is_html?: boolean;
  created_at?: Date;
};

export type WorkflowCardNote = {
  note?: string;
  created_at?: Date;
};

export type WorkflowCategory = {
  name?: string;
  created_at?: Date;
  updated_at?: Date;
};

export { NoteCategoryShare as WorkflowShare };

export type WorkflowStep = {
  created_at?: Date;
  updated_at?: Date;
  sequence?: number;
  name?: string;
  description?: string;
  auto_snooze_days?: number;
  auto_snooze_value?: number;
  auto_snooze_interval?: WorkflowStepSnoozeInterval;
  expected_response_time_in_days?: number;
  my_ready_card_count?: number;
  total_ready_card_count?: number;
  default_assignee_id?: number;
};

export type WorkflowStepAssigneeSummary = {
  ready_count?: number;
  snoozed_count?: number;
};

export enum FieldType {
  String = 'string',
  Text = 'text',
  Checkboxes = 'checkboxes',
  Dropdown = 'dropdown',
  Date = 'date',
  PhoneNumber = 'phone_number',
  Address = 'address',
  Birthday = 'birthday',
  Gender = 'gender',
  CustomField = 'custom_field',
  Note = 'note',
  Workflow = 'workflow',
  Heading = 'heading',
  Number = 'number',
  Boolean = 'boolean',
  File = 'file',
  Medical = 'medical',
  WorkflowCheckbox = 'workflow_checkbox',
  WorkflowCheckboxes = 'workflow_checkboxes',
  WorkflowDropdown = 'workflow_dropdown',
  MaritalStatus = 'marital_status',
  Anniversary = 'anniversary',
  Grade = 'grade',
  PrimaryCampus = 'primary_campus',
  School = 'school',
  Household = 'household',
}

export enum ListSharePermission {
  View = 'view',
  Manage = 'manage',
}

export enum NoteCategorySharePermission {
  View = 'view',
  ViewAndCreate = 'view_create',
}

export enum PermissionGroup {
  NoAccess = 'No Access',
  Viewer = 'Viewer',
  Editor = 'Editor',
  Manager = 'Manager',
}

export enum MessageKind {
  Email = 'email',
  Sms = 'sms',
  ChurchCenter = 'church_center_message',
}

export enum PeopleImportStatus {
  Matching = 'matching',
  ProcessingPreview = 'processing_preview',
  Previewing = 'previewing',
  ProcessingImport = 'processing_import',
  Complete = 'complete',
  Undone = 'undone',
  Undoing = 'undoing',
}

export enum PersonAppPermissions {
  NoAccess = 'no_access',
  Viewer = 'viewer',
  Editor = 'editor',
}

export enum DayOfWeek {
  Sunday = 'sunday',
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
}

export enum WorkflowStepSnoozeInterval {
  Day = 'day',
  Week = 'week',
  Month = 'month',
}
