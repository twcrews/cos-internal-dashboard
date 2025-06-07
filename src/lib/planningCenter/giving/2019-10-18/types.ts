export type Batch = {
  created_at?: Date;
  updated_at?: Date;
  committed_at?: Date;
  description?: string;
  total_cents?: number;
  total_currency?: string;
  status?: BatchStatus;
};

export type BatchGroup = {
  created_at?: Date;
  updated_at?: Date;
  description?: string;
  committed?: true;
  total_cents?: number;
  total_currency?: string;
  status?: BatchStatus;
};

export type Campus = {
  name?: string;
  address?: Address;
};

export type Designation = {
  amount_cents?: number;
  amount_currency?: string;
};

export type { Designation as DesignationRefund };

export type Donation = {
  created_at?: Date;
  updated_at?: Date;
  payment_method_sub?: PaymentMethodSubtype;
  payment_last4?: string;
  payment_brand?: string;
  payment_check_number?: number;
  payment_check_dated_at?: Date;
  fee_cents?: number;
  payment_method?: PaymentMethodType;
  received_at?: Date;
  amount_cents?: number;
  payment_status?: PaymentStatus;
  completed_at?: Date;
  amount_currency?: string;
  fee_currency?: string;
  refunded?: boolean;
  refundable?: boolean;
};

export type Fund = {
  color?: string;
  created_at?: Date;
  default?: boolean;
  deletable?: boolean;
  description?: string;
  ledger_code?: string;
  name?: string;
  updated_at?: Date;
  visibility?: FundVisibility;
};

export type Label = {
  slug?: string;
};

export type Note = {
  body?: string;
};

export type Organization = {
  name?: string;
};

export type PaymentMethod = {
  created_at?: Date;
  updated_at?: Date;
  method_type?: PaymentMethodArchtype;
  method_subtype?: PaymentMethodSubtype;
  last4?: string;
  brand?: string;
  expiration?: Date;
  verified?: boolean;
};

export type PaymentSource = {
  created_at?: Date;
  updated_at?: Date;
  name?: string;
};

export type Person = {
  addresses?: Address[];
  donor_number?: number;
  email_addresses?: EmailAddress[];
  first_name?: string;
  last_name?: string;
  permissions?: string;
  phone_numbers?: PhoneNumber[];
};

export type Pledge = {
  created_at?: Date;
  updated_at?: Date;
  amount_cents?: number;
  amount_currency?: string;
  joint_giver_amount_cents?: number;
  donated_total_cents?: number;
  joint_giver_donated_total_cents?: number;
};

export type PledgeCampaign = {
  created_at?: Date;
  updated_at?: Date;
  name?: string;
  description?: string;
  starts_at?: Date;
  ends_at?: Date;
  goal_cents?: number;
  goal_currency?: string;
  show_goal_in_church_center?: boolean;
  received_total_from_pledges_cents?: number;
  received_total_outside_of_pledges_cents?: number;
};

export type RecurringDonation = {
  created_at?: Date;
  updated_at?: Date;
  release_hold_at?: Date;
  amount_cents?: number;
  status?: string;
  last_donation_received_at?: Date;
  next_occurrence?: Date;
  schedule?: {
    day_in_month?: {
      day?: number;
    };
  };
  amount_currency?: string;
};

export type { Designation as RecurringDonationDesignation };

export type Refund = {
  created_at?: Date;
  updated_at?: Date;
  amount_cents?: number;
  amount_currency?: string;
  fee_cents?: number;
  refunded_at?: Date;
  fee_currency?: string;
};

export enum BatchStatus {
  InProgress = 'in_progress',
  Updating = 'updating',
  Committed = 'committed',
}

export enum PaymentMethodSubtype {
  Credit = 'credit',
  Debit = 'debit',
  Prepaid = 'prepaid',
  Unknown = 'unknown',
}

export enum PaymentStatus {
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum PaymentMethodType {
  Ach = 'ach',
  Cash = 'cash',
  Check = 'check',
  Card = 'card',
}

export enum FundVisibility {
  Everywhere = 'everywhere',
  AdminOnly = 'admin_only',
  Hidden = 'hidden',
  Nowhere = 'nowhere',
}

export enum PaymentMethodArchtype {
  Card = 'card',
  BankAccount = 'bank_account',
}

type Address = {
  street_line_1?: string;
  street_line_2?: string;
  city?: string;
  state?: string;
  zip?: string;
  location?: string;
  primary?: boolean;
  street?: string;
  line_1?: string;
  line_2?: string;
};

type EmailAddress = {
  address?: string;
  location?: string;
  blocked?: boolean;
  primary?: boolean;
};

type PhoneNumber = {
  number?: string;
  carrier?: string;
  location?: string;
  primary?: boolean;
};
