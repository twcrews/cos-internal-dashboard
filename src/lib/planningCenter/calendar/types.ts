export type Attachment = {
	content_type?: string;
	created_at?: Date;
	description?: string;
	file_size?: number;
	name?: string;
	updated_at?: Date;
	url?: string;
}

export type Conflict = {
	created_at?: Date;
	note?: string;
	resolved_at?: Date;
	updated_at?: Date;
}

export type Event = {
	approval_status?: string;
	created_at?: string;
	description?: string;
	image_url?: string;
	name?: string;
	percent_approved?: number;
	percent_rejected?: number;
	registration_url?: string;
	summary?: string;
	updated_at?: Date;
	visible_in_church_center?: boolean
}

export type EventConnection = {
	connected_to_id?: string;
	connected_to_name?: string;
	connected_to_type?: string;
	product_name?: string;
	connected_to_url?: string;
}

export type EventInstance = {
	all_day_event?: boolean;
	compact_recurrence_description?: string;
	created_at?: Date;
	ends_at?: Date;
	location?: string,
	recurrence?: string,
	recurrence_description?: string,
	starts_at?: Date,
	updated_at?: Date,
	church_center_url?: string,
	published_starts_at?: string,
	published_ends_at?: string
}

export type EventResourceRequest = {
	approval_sent?: boolean,
	approval_status?: string,
	created_at?: Date,
	updated_at?: Date,
	notes?: string,
	quantity?: number
}

export type EventTime = {
	ends_at?: Date,
	starts_at?: Date,
	name?: Date,
	visible_on_kiosks?: boolean,
	visible_on_widget_and_ical?: boolean
}

export type Feed = {
	can_delete?: boolean,
	default_church_center_visibility?: 'hidden' | 'published',
	feed_type?: 'registrations' | 'groups' | 'ical' | 'form',
	imported_at?: Date,
	name?: string,
	source_id?: string
}

export type JobStatus = {
	retries?: number,
	errors?: {},
	message?: string,
	started_at?: Date,
	status?: string
}

export type Organization = {
	name?: string,
	time_zone?: string,
	twenty_four_hour_time?: boolean,
	date_format?: string,
	onboarding?: boolean
}

export type Person = {
	created_at?: Date,
	first_name?: string,
	last_name?: string,
	middle_name?: string,
	updated_at?: Date,
	avatar_url?: string,
	child?: boolean,
	contact_data?: string,
	gender?: string,
	has_access?: boolean,
	name_prefix?: string,
	name_suffix?: string,
	pending_request_count?: number,
	permissions?: number,
	resolves_conflicts?: boolean,
	site_administrator?: boolean,
	status?: 'active' | 'pending' | 'inactive',
	event_permissions_type?: string,
	people_permissions_type?: string,
	room_permissions_type?: string,
	resources_permissions_type?: string
}

export type ReportTemplate = {
	body?: string,
	created_at?: string,
	description?: string,
	title?: string,
	updated_at?: string
}

export type Resource = {
	created_at?: Date,
	kind?: string,
	name?: string,
	serial_number?: string,
	updated_at?: Date,
	description?: string,
	expires_at?: Date,
	home_location?: string,
	image?: string,
	quantity?: number,
	path_name?: string
}

export type ResourceApprovalGroup = {
	created_at?: Date,
	name?: string,
	updated_at?: Date,
	form_count?: number,
	resource_count?: number,
	room_count?: number
}

export type ResourceBooking = {
	created_at?: Date,
	ends_at?: Date,
	starts_at?: Date,
	updated_at?: Date,
	quantity?: number
}

export type ResourceFolder = {
	created_at?: Date,
	name?: string,
	updated_at?: Date,
	ancestry?: string,
	kind?: string,
	path_name?: string
}

export type ResourceQuestion = {
	created_at?: Date,
	kind?: string,
	updated_at?: Date,
	choices?: string,
	description?: string,
	multiple_select?: boolean,
	optional?: boolean,
	position?: number,
	question?: string
}

export type ResourceSuggestion = {
	created_at?: Date,
	quantity?: number,
	updated_at?: Date
}

export type RoomSetup = {
	created_at?: Date,
	name?: string,
	updated_at?: Date,
	description?: string,
	diagram?: string,
	diagram_url?: string,
	diagram_thumbnail_url?: string
}

export type Tag = {
	church_center_category?: boolean,
	color?: string,
	created_at?: Date,
	name?: string,
	position?: number,
	updated_at?: Date
}

export type TagGroup = {
	created_at?: Date,
	name?: string,
	updated_at?: Date,
	required?: boolean
}