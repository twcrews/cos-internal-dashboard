export type AttendanceType = {
  name?: string;
  color?: string;
  created_at?: Date;
  updated_at?: Date;
  limit?: number;
};

export type CheckIn = {
  checked_out_at?: Date;
  confirmed_at?: Date;
  created_at?: Date;
  emergency_contact_name?: string;
  emergency_contact_phone_number?: string;
  first_name?: string;
  kind?: string;
  last_name?: string;
  medical_notes?: string;
  number?: number;
  one_time_guest?: boolean;
  security_code?: string;
  updated_at?: Date;
};

export type CheckInGroup = {
  check_ins_count?: number;
  created_at?: Date;
  name_labels_count?: number;
  print_status?: PrintStatus;
  security_labels_count?: number;
  updated_at?: Date;
};

export type CheckInTime = {
  kind?: string;
  has_validated?: boolean;
  services_integrated?: boolean;
  alerts?: any[];
};

export type Event = {
  name?: string;
  frequency?: string;
  enable_services_integration?: boolean;
  created_at?: Date;
  updated_at?: Date;
  archived_at?: Date;
  integration_key?: string;
  location_times_enabled?: boolean;
  pre_select_enabled?: boolean;
};

export type EventLabel = {
  quantity?: number;
  for_regular?: boolean;
  for_guest?: boolean;
  for_volunteer?: boolean;
  created_at?: Date;
  updated_at?: Date;
};

export type EventPeriod = {
  starts_at?: Date;
  ends_at?: Date;
  regular_count?: number;
  guest_count?: number;
  volunteer_count?: number;
  note?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type EventTime = {
  total_count?: number;
  starts_at?: Date;
  shows_at?: Date;
  hides_at?: Date;
  regular_count?: number;
  guest_count?: number;
  volunteer_count?: number;
  created_at?: Date;
  updated_at?: Date;
  name?: string;
  hour?: number;
  minute?: number;
  day_of_week?: number;
};

export type Headcount = {
  total?: number;
  updated_at?: Date;
  created_at?: Date;
};

export type Label = {
  name?: string;
  xml?: string;
  prints_for?: string;
  roll?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Location = {
  name?: string;
  kind?: string;
  opened?: boolean;
  questions?: string;
  age_min_in_months?: number;
  age_max_in_months?: number;
  age_range_by?: string;
  age_on?: Date;
  child_or_adult?: string;
  effective_date?: Date;
  gender?: string;
  grade_min?: number;
  grade_max?: number;
  max_occupancy?: number;
  min_volunteers?: number;
  attendees_per_volunteer?: number;
  position?: number;
  updated_at?: Date;
  created_at?: Date;
};

export type LocationEventPeriod = {
  regular_count?: number;
  guest_count?: number;
  volunteer_count?: number;
  created_at?: Date;
  updated_at?: Date;
};

export { LocationEventPeriod as LocationEventTime };

export type LocationLabel = {
  quantity?: number;
  for_regular?: boolean;
  for_guest?: boolean;
  for_volunteer?: boolean;
  created_at?: Date;
  updated_at?: Date;
};

export type Option = {
  body?: string;
  quantity?: number;
  created_at?: Date;
  updated_at?: Date;
};

export type Organization = {
  date_format_pattern?: string;
  time_zone_olson?: string;
  name?: string;
  daily_check_ins?: number;
  time_zone?: string;
  avatar_url?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type Pass = {
  code?: string;
  kind?: PassKind;
  created_at?: Date;
  updated_at?: Date;
};

export type Person = {
  addresses?: PersonAddress[];
  email_addresses?: PersonEmail[];
  phone_numbers?: PersonPhoneNumber[];
  avatar_url?: string;
  name_prefix?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  name_suffix?: string;
  birthdate?: Date;
  grade?: number;
  gender?: string;
  medical_notes?: string;
  child?: boolean;
  permission?: string;
  headcounter?: boolean;
  last_checked_in_at?: Date;
  check_in_count?: number;
  created_at?: Date;
  updated_at?: Date;
  passed_background_check?: boolean;
  demographic_avatar_url?: string;
  name?: string;
  top_permission?: string;
};

export type PersonAddress = {
  street?: string;
  street_line_1?: string;
  street_line_2?: string;
  city?: string;
  state?: string;
  zip?: string;
  location?: string;
  primary?: boolean;
};

export type PersonEmail = {
  address?: string;
  location?: string;
  primary?: boolean;
  blocked?: boolean;
};

export type PersonPhoneNumber = {
  number?: string;
  carrier?: string;
  location?: string;
  primary?: boolean;
};

export type PersonEvent = {
  check_in_count?: number;
  updated_at?: Date;
  created_at?: Date;
};

export type RosterListPerson = {
  first_name?: string;
  last_name?: string;
  name?: string;
  demographic_avatar_url?: string;
  grade?: string;
  gender?: string;
  medical_notes?: string;
  birthdate?: Date;
};

export type Station = {
  mode?: number;
  name?: string;
  timeout_seconds?: number;
  input_type?: InputType;
  input_type_options?: InputTypeOptions;
  created_at?: Date;
  updated_at?: Date;
};

export type Theme = {
  image_thumbnail?: string;
  name?: string;
  color?: string;
  text_color?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
  background_color?: string;
  mode?: string;
};

export enum PrintStatus {
  NotReady = 'not_ready',
  Ready = 'ready',
  Printed = 'printed',
  Canceled = 'canceled',
  Skipped = 'skipped',
}

export enum PassKind {
  Barcode = 'barcode',
  PassKit = 'pkpass',
}

export enum InputType {
  Scanner = 'scanner',
  Keypad = 'keypad',
}

export enum InputTypeOptions {
  All = 'all_input_types',
  KeypadOnly = 'only_keypad',
  ScannerOnly = 'only_scanner',
}
