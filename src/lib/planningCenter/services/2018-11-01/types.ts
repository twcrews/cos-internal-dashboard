export type Arrangement = {
  bpm?: number;
  created_at?: Date;
  has_chords?: boolean;
  length?: number;
  meter?: Meter;
  name?: string;
  notes?: string;
  print_margin?: PrintMargin;
  print_orientation?: PrintOrientation;
  print_page_size?: PrintPageSize;
  updated_at?: Date;
  chord_chart?: string;
  chord_chart_font?: string;
  chord_chart_key?: string;
  chord_chart_columns?: number;
  chord_chart_font_size?: ChordChartFontSize;
  has_chord_chart?: boolean;
  lyrics_enabled?: boolean;
  number_chart_enabled?: boolean;
  numeral_chart_enabled?: boolean;
  sequence?: string[];
  sequence_short?: string[];
  sequence_full?: { label?: string; number?: string }[];
  chord_chart_chord_color?: number;
  archived_at?: Date;
  lyrics?: string;
};

export type ArrangementSections = {
  sections?: { label?: string; lyrics?: string; breaks_at?: string }[];
};

export type Attachment = {
  created_at?: Date;
  page_order?: string;
  updated_at?: Date;
  filename?: string;
  file_size?: number;
  licenses_purchased?: number;
  licenses_remaining?: number;
  licenses_used?: number;
  content_type?: string;
  display_name?: string;
  filetype?: string;
  linked_url?: string;
  pco_type?: string;
  remote_link?: string;
  thumbnail_url?: string;
  url?: string;
  allow_mp3_download?: boolean;
  web_streamable?: boolean;
  downloadable?: boolean;
  transposable?: boolean;
  streamable?: boolean;
  has_preview?: boolean;
};

export type AttachmentActivity = {
  date?: Date;
  attachment_url?: string;
  activity_type?: string;
};

export type AttachmentType = {
  name?: string;
  aliases?: string;
  capoed_chord_charts?: boolean;
  chord_charts?: boolean;
  exclusions?: string;
  lyrics?: boolean;
  number_charts?: boolean;
  numeral_charts?: boolean;
  built_in?: boolean;
};

export type Attendance = {
  checked_in_at?: Date;
  check_ins_event_id?: string;
  check_ins_event_period_id?: string;
};

export type AvailableSignup = {
  organization_name?: string;
  planning_center_url?: string;
  service_type_name?: string;
  signups_available?: boolean;
};

export type Blockout = {
  description?: string;
  group_identifier?: string;
  organization_name?: string;
  reason?: string;
  repeat_frequency?: RepeatFrequency;
  repeat_interval?: RepeatInterval;
  repeat_period?: RepeatPeriod;
  settings?: string;
  time_zone?: string;
  created_at?: Date;
  updated_at?: Date;
  repeat_until?: Date;
  starts_at?: Date;
  ends_at?: Date;
  share?: boolean;
};

export type BlockoutDate = {
  group_identifier?: string;
  reason?: string;
  time_zone?: string;
  share?: boolean;
  starts_at?: Date;
  ends_at?: Date;
  ends_at_utc?: Date;
  starts_at_utc?: Date;
};

export type BlockoutException = {
  date?: Date;
  created_at?: Date;
  updated_at?: Date;
};

export type BlockoutScheduleConflict = {
  dates?: string;
  organization_name?: string;
  person_avatar?: string;
  person_name?: string;
  position_display_times?: string;
  service_type_name?: string;
  short_dates?: string;
  status?: string;
  team_name?: string;
  team_position_name?: string;
  sort_date?: Date;
  can_accept_partial?: boolean;
};

export type Contributor = {
  created_at?: Date;
  updated_at?: Date;
  contributable_action?: string;
  contributable_category?: string;
  contributable_type?: string;
  full_name?: string;
  photo_thumbnail_url?: string;
};

export type CustomSlide = {
  body?: string;
  label?: string;
  order?: number;
  enabled?: boolean;
};

export type EmailTemplate = {
  kind?: string;
  created_at?: Date;
  updated_at?: Date;
  html_body?: string;
  subject?: string;
};

export type EmailTemplateRenderedResponse = {
  body?: string;
  subject?: string;
};

export type Folder = {
  created_at?: Date;
  name?: string;
  updated_at?: Date;
  container?: string;
};

export type FolderPath = {
  path?: [];
};

export type Item = {
  title?: string;
  sequence?: number;
  created_at?: Date;
  updated_at?: Date;
  length?: number;
  item_type?: string;
  html_details?: string;
  service_position?: string;
  description?: string;
  key_name?: string;
  custom_arrangement_sequence?: [];
  custom_arrangement_sequence_short?: [];
  custom_arrangement_sequence_full?: [];
};

export type ItemNote = {
  created_at?: Date;
  updated_at?: Date;
  content?: string;
  category_name?: string;
};

export type ItemNoteCategory = {
  created_at?: Date;
  deleted_at?: Date;
  name?: string;
  sequence?: number;
  updated_at?: Date;
  frequently_used?: boolean;
};

export type ItemTime = {
  live_start_at?: Date;
  live_end_at?: Date;
  exclude?: boolean;
  length?: number;
  length_offset?: number;
};

export type Key = {
  created_at?: Date;
  updated_at?: Date;
  name?: string;
  alternate_keys?: { name?: string; key?: MusicKey }[];
  ending_key?: MusicKey;
  starting_key?: MusicKey;
  starting_minor?: boolean;
  ending_minor?: boolean;
};

export type Layout = {};

export type Live = {
  series_title?: string;
  title?: string;
  dates?: string;
  live_channel?: string;
  chat_room_channel?: string;
  can_control?: boolean;
  can_take_control?: boolean;
  can_chat?: boolean;
  can_control_video_feed?: boolean;
};

export type LiveController = {
  created_at?: Date;
  updated_at?: Date;
  full_name?: string;
  photo_thumbnail_url?: string;
};

export type Media = {
  created_at?: Date;
  updated_at?: Date;
  themes?: string;
  title?: string;
  thumbnail_file_name?: string;
  thumbnail_content_type?: string;
  thumbnail_file_size?: number;
  thumbnail_updated_at?: Date;
  preview_file_name?: string;
  preview_content_type?: string;
  preview_file_size?: number;
  preview_updated_at?: Date;
  length?: number;
  media_type?: MediaType;
  media_type_name?: string;
  thumbnail_url?: string;
  creator_name?: string;
  preview_url?: string;
  image_url?: string;
};

export type MediaSchedule = {
  plan_dates?: string;
  plan_short_dates?: string;
  service_type_name?: string;
  plan_sort_date?: Date;
};

export type NeededPosition = {
  quantity?: number;
  team_position_name?: string;
  scheduled_to?: string;
};

export type Organization = {
  ccli?: string;
  created_at?: Date;
  date_format?: DateFormat;
  music_stand_enabled?: boolean;
  name?: string;
  projector_enabled?: boolean;
  time_zone?: string;
  twenty_four_hour_time?: boolean;
  updated_at?: Date;
  owner_name?: string;
  required_to_set_download_permission?: PermissionLevel;
  secret?: string;
  allow_mp3_download?: boolean;
  calendar_starts_on_sunday?: boolean;
  ccli_connected?: boolean;
  ccli_reporting_enabled?: boolean;
  extra_file_storage_allowed?: boolean;
  file_storage_exceeded?: boolean;
  file_storage_size?: boolean;
  file_storage_size_used?: boolean;
  file_storage_extra_enabled?: boolean;
  rehearsal_mix_enabled?: boolean;
  legacy_id?: string;
  file_storage_extra_charges?: number;
  people_allowed?: number;
  people_remaining?: number;
  beta?: boolean;
  rehearsal_pack_connected?: boolean;
};

export type Person = {
  photo_url?: string;
  photo_thumbnail_url?: string;
  preferred_app?: string;
  assigned_to_rehearsal_team?: boolean;
  archived_at?: Date;
  created_at?: Date;
  first_name?: string;
  last_name?: string;
  name_prefix?: string;
  name_suffix?: string;
  updated_at?: Date;
  facebook_id?: string;
  legacy_id?: string;
  full_name?: string;
  max_permissions?: string;
  permissions?: string;
  status?: string;
  anniversary?: Date;
  birthdate?: Date;
  given_name?: string;
  middle_name?: string;
  nickname?: string;
  access_media_attachments?: boolean;
  access_plan_attachments?: boolean;
  access_song_attachments?: boolean;
  archived?: boolean;
  site_administrator?: boolean;
  logged_in_at?: Date;
  notes?: string;
  passed_background_check?: boolean;
  ical_code?: string;
  preferred_max_plans_per_day?: number;
  preferred_max_plans_per_month?: number;
  praise_charts_enabled?: boolean;
  me_tab?: string;
  plans_tab?: string;
  songs_tab?: string;
  media_tab?: string;
  people_tab?: string;
  can_edit_all_people?: boolean;
  can_view_all_people?: boolean;
  onboardings?: [];
};

export type PersonTeamPositionAssignment = {
  created_at?: Date;
  updated_at?: Date;
  schedule_preference?: string;
  preferred_weeks?: [];
};

export type Plan = {
  created_at?: Date;
  title?: string;
  updated_at?: Date;
  public?: boolean;
  series_title?: string;
  plan_notes_count?: number;
  other_time_count?: number;
  rehearsal_time_count?: number;
  service_time_count?: number;
  plan_people_count?: number;
  needed_positions_count?: number;
  items_count?: number;
  total_length?: number;
  can_view_order?: boolean;
  multi_day?: boolean;
  prefers_order_view?: boolean;
  rehearsable?: boolean;
  files_expire_at?: Date;
  sort_date?: Date;
  last_time_at?: Date;
  permissions?: string;
  dates?: string;
  short_dates?: string;
  planning_center_url?: string;
  reminders_disabled?: boolean;
};

export type PlanNote = {
  created_at?: Date;
  updated_at?: Date;
  category_name?: string;
  content?: string;
};

export type PlanNoteCategory = {
  created_at?: Date;
  deleted_at?: Date;
  name?: string;
  sequence?: number;
  updated_at?: Date;
};

export type PlanPerson = {
  status?: string;
  created_at?: Date;
  updated_at?: Date;
  notes?: string;
  decline_reason?: string;
  name?: string;
  notification_changed_by_name?: string;
  notification_sender_name?: string;
  team_position_name?: string;
  photo_thumbnail?: string;
  scheduled_by_name?: string;
  status_updated_at?: Date;
  notification_changed_at?: Date;
  notification_prepared_at?: Date;
  notification_read_at?: Date;
  notification_sent_at?: Date;
  prepare_notification?: boolean;
  can_accept_partial?: boolean;
};

export type PlanPersonTime = {
  status?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type PlanTemplate = {
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  item_count?: number;
  team_count?: number;
  note_count?: number;
  can_view_order?: boolean;
  multi_day?: boolean;
  prefers_order_view?: boolean;
  rehearsable?: boolean;
};

export type PlanTime = {
  created_at?: Date;
  updated_at?: Date;
  name?: string;
  time_type?: string;
  recorded?: boolean;
  team_reminders?: [];
  starts_at?: Date;
  ends_at?: Date;
  live_starts_at?: Date;
  live_ends_at?: Date;
};

export type PublicView = {
  series_and_plan_titles?: boolean;
  item_lengths?: boolean;
  service_times?: boolean;
  song_items?: boolean;
  media_items?: boolean;
  regular_items?: boolean;
  headers?: boolean;
  itunes?: boolean;
  amazon?: boolean;
  spotify?: boolean;
  youtube?: boolean;
  vimeo?: boolean;
};

export type ReportTemplate = {
  body?: string;
  title?: string;
  type?: string;
  default?: boolean;
};

export type Schedule = {
  sort_date?: Date;
  dates?: string;
  decline_reason?: string;
  organization_name?: string;
  organization_time_zone?: string;
  organization_twenty_four_hour_time?: string;
  person_name?: string;
  position_display_times?: string;
  responds_to_name?: string;
  service_type_name?: string;
  short_dates?: string;
  status?: string;
  team_name?: string;
  team_position_name?: string;
  can_accept_partial?: boolean;
  can_accept_partial_one_time?: boolean;
  can_rehearse?: boolean;
  plan_visible?: boolean;
  plan_visible_to_me?: boolean;
};

export type ScheduledPerson = {
  full_name?: string;
  status?: string;
  thumbnail?: string;
};

export type SchedulingPreference = {
  preference?: string;
};

export type Series = {
  created_at?: Date;
  updated_at?: Date;
  artwork_file_name?: string;
  artwork_content_type?: string;
  artwork_file_size?: number;
  title?: string;
  artwork_for_dashboard?: string;
  artwork_for_mobile?: string;
  artwork_for_plan?: string;
  artwork_original?: string;
  has_artwork?: boolean;
};

export type ServiceType = {
  archived_at?: Date;
  created_at?: Date;
  deleted_at?: Date;
  name?: string;
  sequence?: number;
  updated_at?: Date;
  permissions?: string;
  background_check_permissions?: string;
  comment_permissions?: string;
  custom_item_types?: string;
  frequency?: string;
  last_plan_from?: string;
  standard_item_types?: string;
  attachment_types_enabled?: boolean;
};

export { FolderPath as ServiceTypePath };

export type SignupSheet = {
  sort_date?: Date;
  group_key?: string;
  team_name?: string;
  display_times?: string;
  position_name?: string;
  title?: string;
  sort_index?: number;
};

export type SignupSheetMetadata = {
  conflicts?: {};
  time_type?: string;
  time_name?: string;
  ends_at?: Date;
  starts_at?: Date;
};

export type SkippedAttachment = {
  skipped?: boolean;
};

export type Song = {
  title?: string;
  created_at?: Date;
  updated_at?: Date;
  admin?: string;
  author?: string;
  copyright?: string;
  hidden?: boolean;
  notes?: string;
  themes?: string;
  last_scheduled_short_dates?: string;
  last_scheduled_at?: Date;
  ccli_number?: number;
};

export type SongSchedule = {
  arrangement_name?: string;
  key_name?: string;
  plan_dates?: string;
  service_type_name?: string;
  plan_sort_date?: string;
};

export type SongbookStatus = {
  status?: string;
  status_code?: string;
  status_token?: string;
  url?: string;
};

export type SplitTeamRehearsalAssignment = {
  schedule_special_service_times?: boolean;
};

export type Tag = {
  name?: string;
};

export type TagGroup = {
  name?: string;
  required?: boolean;
  allow_multiple_selections?: boolean;
  tags_for?: string;
  service_type_folder_name?: string;
};

export type Team = {
  name?: string;
  rehearsal_team?: boolean;
  sequence?: number;
  schedule_to?: string;
  default_status?: string;
  default_prepare_notifications?: boolean;
  created_at?: Date;
  updated_at?: Date;
  archived_at?: Date;
  viewers_see?: number;
  assigned_directly?: boolean;
  secure_team?: boolean;
  last_plan_from?: string;
  stage_color?: string;
  stage_variant?: string;
};

export type TeamLeader = {
  send_responses_for_accepts?: boolean;
  send_responses_for_declines?: boolean;
  send_responses_for_blockouts?: boolean;
};

export type TeamPosition = {
  name?: string;
  sequence?: number;
  tags?: [];
  negative_tag_groups?: [];
  tag_groups?: [];
};

export type TextSetting = {
  scheduling_requests_enabled?: boolean;
  general_emails_enabled?: boolean;
  scheduling_replies_enabled?: boolean;
  reminders_enabled?: boolean;
  carrier?: string;
  display_number?: string;
  normalized_number?: string;
};

export type TimePreferenceOption = {
  day_of_week?: number;
  created_at?: Date;
  updated_at?: Date;
  description?: string;
  sort_index?: string;
  time_type?: string;
  minute_of_day?: number;
  starts_at?: Date;
};

export type Zoom = {
  aspect_ratio?: number;
  zoom_level?: number;
  x_offset?: number;
  y_offset?: number;
};

export enum Meter {
  TwoTwo = '2/2',
  TwoFour = '2/4',
  ThreeFour = '3/4',
  FourFour = '4/4',
  FiveFour = '5/4',
  SixFour = '6/4',
  ThreeEight = '3/8',
  SixEight = '6/8',
  SevenEight = '7/8',
  NineEight = '9/8',
  TwelveEight = '12/8',
}

export enum PrintMargin {
  None = '0.0in',
  QuarterInch = '0.25in',
  HalfInch = '0.5in',
  ThreeQuarterInch = '0.75in',
  OneInch = '1.0in',
}

export enum PrintOrientation {
  Portrait = 'Portrait',
  Landscape = 'Landscape',
}

export enum PrintPageSize {
  Widescreen = 'Widescreen (16x9)',
  Fullscreen = 'Fullscreen (4x3)',
  A4 = 'A4',
  Letter = 'Letter',
  Legal = 'Legal',
  Tabloid = '11x17',
}

export enum ChordChartFontSize {
  Ten = 10,
  Eleven = 11,
  Twelve = 12,
  Thirteen = 13,
  Fourteen = 14,
  Fifteen = 15,
  Sixteen = 16,
  Eighteen = 18,
  Twenty = 20,
  TwentyTwo = 22,
  TwentyFour = 24,
  TwentySix = 26,
  TwentyEight = 28,
  ThirtyTwo = 32,
  ThirtySix = 36,
  FortyTwo = 42,
  FortyEight = 48,
}

export enum PlanPersonStatus {
  Confirmed = 'C',
  Unconfirmed = 'U',
  Declined = 'D',
}

export enum RepeatFrequency {
  None = 'no_repeat',
  One = 'every_1',
  Two = 'every_2',
  Three = 'every_3',
  Four = 'every_4',
  Five = 'every_5',
  Six = 'every_6',
  Seven = 'every_7',
  Eight = 'every_8',
}

export enum RepeatInterval {
  ExactDay = 'exact_day_of_month',
  FirstWeek = 'week_of_month_1',
  SecondWeek = 'week_of_month_2',
  ThirdWeek = 'week_of_month_3',
  FourthWeek = 'week_of_month_4',
  LastWeek = 'week_of_month_last',
}

export enum RepeatPeriod {
  Daily = 'daily',
  Weekly = 'weekly',
  Monthly = 'monthly',
  Annually = 'yearly',
}

export enum MusicKey {
  AFlat = 'Ab',
  A = 'A',
  ASharp = 'A#',
  BFlat = 'Bb',
  B = 'B',
  C = 'C',
  CSharp = 'C#',
  DFlat = 'Db',
  D = 'D',
  DSharp = 'D#',
  Eflat = 'Eb',
  E = 'E',
  F = 'F',
  FSharp = 'F#',
  GFlat = 'Gb',
  G = 'G',
  GSharp = 'G#',
  AFlatMinor = 'Abm',
  AMinor = 'Am',
  ASharpMinor = 'A#m',
  BFlatMinor = 'Bbm',
  BMinor = 'Bm',
  CMinor = 'Cm',
  CSharpMinor = 'C#m',
  DFlatMinor = 'Dbm',
  DMinor = 'Dm',
  DSharpMinor = 'D#m',
  EFlatMinor = 'Ebm',
  EMinor = 'Em',
  FMinor = 'Fm',
  FSharpMinor = 'F#m',
  GFlatMinor = 'Gbm',
  GMinor = 'Gm',
  GSharpMinor = 'G#m',
}

export enum MediaType {
  Audio = 'audio',
  BackgroundAudio = 'background_audio',
  BackgroundImage = 'background_image',
  BackgroundVideo = 'background_video',
  Countdown = 'countdown',
  Document = 'document',
  Drama = 'drama',
  Image = 'image',
  Powerpoint = 'powerpoint',
  SongVideo = 'song_video',
  Video = 'video',
}

export enum DateFormat {
  US = 'US',
  EU = 'EU',
}

export enum PermissionLevel {
  Editor = 'editor',
  Administrator = 'administrator',
  SiteAdministrator = 'site_administrator',
}
