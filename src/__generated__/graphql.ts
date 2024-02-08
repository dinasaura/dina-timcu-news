/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AccessType = {
  access_option: Scalars['String']['output'];
  commentable: Scalars['String']['output'];
  direct: Scalars['String']['output'];
  download: Scalars['String']['output'];
  password: Scalars['String']['output'];
  pay: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

export type Account = {
  _id: Scalars['String']['output'];
  avatar: Scalars['String']['output'];
  birthdate: Scalars['Float']['output'];
  created_date: Scalars['Float']['output'];
  email: Scalars['String']['output'];
  external_accounts: Array<UserExternalAccountResolver>;
  first_name: Scalars['String']['output'];
  has_delivery: Scalars['Boolean']['output'];
  ip: Scalars['String']['output'];
  is_blocked: Scalars['Boolean']['output'];
  is_suspicious: Scalars['Boolean']['output'];
  is_verified: Scalars['Boolean']['output'];
  lang: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  login: Scalars['String']['output'];
  marketplace: Scalars['Boolean']['output'];
  phones: Array<Phones>;
  role: Scalars['Int']['output'];
  sex: Scalars['String']['output'];
  token: Scalars['String']['output'];
  update_date: Scalars['Float']['output'];
  user_id: Scalars['String']['output'];
};

export type AccountChangeLanguageResponse = {
  error_message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type AccountRegisterResponse = {
  error_message: Scalars['String']['output'];
  errors_by_field?: Maybe<ErrorsByField>;
  show_error_message: Scalars['Boolean']['output'];
  success: Scalars['Boolean']['output'];
};

export type AccountServiceResponse = {
  errors: Array<FieldName>;
  message: Scalars['String']['output'];
  message_i18n?: Maybe<MultilangString>;
  reason: Scalars['String']['output'];
  status_code: Scalars['Int']['output'];
  user: Account;
};

export type ActivatePhoneInput = {
  phone_number: Scalars['String']['input'];
  verification_code: Scalars['String']['input'];
};

export type ActivatePhoneRegisterInput = {
  method: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type Ad = {
  __typename?: 'Ad';
  id: Scalars['String']['output'];
  img: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/**
 * #######################################################################################################################
 * Mutations Inputs
 * #######################################################################################################################
 */
export type AddNewsMediaInput = {
  file: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddRemoveContactInput = {
  phone_number: Scalars['String']['input'];
};

export type AutocompleteResp = {
  __typename?: 'AutocompleteResp';
  count: Scalars['Int']['output'];
  keyword: Scalars['String']['output'];
};

export type AvatarSettingsInput = {
  avatar: Scalars['String']['input'];
};

export type Banner = {
  color: Scalars['String']['output'];
  font_size: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  ticket_buy: Scalars['Boolean']['output'];
};

export type BannerInfo = {
  desktop: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Breadcrumb = {
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type BusinessDates = {
  from: Scalars['Int']['output'];
  to: Scalars['Int']['output'];
};

export type CallBackUrlParamsInput = {
  delivery?: InputMaybe<Scalars['String']['input']>;
  lang: Scalars['String']['input'];
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Category = {
  description?: Maybe<MultilangString>;
  event_props: Array<EventProps>;
  featured_news?: Maybe<MultilangString>;
  filter_ids: Array<Scalars['String']['output']>;
  filters: Array<Filter>;
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  is_visible: Scalars['Boolean']['output'];
  need_address: Scalars['Boolean']['output'];
  need_rating: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  project_id: Scalars['String']['output'];
  public: Scalars['Boolean']['output'];
  seo_title?: Maybe<MultilangString>;
  title?: Maybe<MultilangString>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ClientInfo = {
  IHostEmail: Scalars['String']['output'];
  IHostNameOnCard: Scalars['String']['output'];
  IHostPhone: Scalars['String']['output'];
  IHostStreet: Scalars['String']['output'];
  agree?: Maybe<Scalars['Boolean']['output']>;
  login: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

/**
 * ##################################################################################
 * Input
 * ##################################################################################
 */
export type ClientInfoInput = {
  IHostEmail: Scalars['String']['input'];
  IHostNameOnCard: Scalars['String']['input'];
  IHostPhone: Scalars['String']['input'];
  IHostStreet: Scalars['String']['input'];
  agree?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  payment_project_id?: InputMaybe<Scalars['String']['input']>;
  user_id: Scalars['String']['input'];
};

export type Company = {
  company_code: Scalars['String']['output'];
  company_name: Scalars['String']['output'];
  id: Scalars['String']['output'];
  project_id: Scalars['String']['output'];
};

/** contact settings */
export type ContactSettingsInput = {
  activate_phone?: InputMaybe<ActivatePhoneInput>;
  activate_phone_register?: InputMaybe<ActivatePhoneRegisterInput>;
  add_contact?: InputMaybe<AddRemoveContactInput>;
  remove_contact?: InputMaybe<AddRemoveContactInput>;
};

export type Contacts = {
  block: Scalars['String']['output'];
  city: Scalars['String']['output'];
  email: Scalars['String']['output'];
  geo?: Maybe<Geo>;
  house: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  site: Scalars['String']['output'];
  street: Scalars['String']['output'];
};

export type Content = {
  __typename?: 'Content';
  access_type?: Maybe<AccessType>;
  album: Array<Photo>;
  banner: Scalars['String']['output'];
  banner_info?: Maybe<BannerInfo>;
  banner_mobile: Scalars['String']['output'];
  business_dates?: Maybe<BusinessDates>;
  can_edit: Scalars['Boolean']['output'];
  can_like: Scalars['Boolean']['output'];
  copyright: Scalars['String']['output'];
  counter_comment_today: Scalars['Int']['output'];
  counters?: Maybe<Counters>;
  cparent?: Maybe<Topic>;
  cparent_id: Scalars['String']['output'];
  dates?: Maybe<ContentDates>;
  decoration: Scalars['Int']['output'];
  description?: Maybe<ContentDescription>;
  disclaimer: Scalars['Int']['output'];
  dominant_emotion: Scalars['String']['output'];
  emotions?: Maybe<Emotions>;
  emotions_sum: Scalars['Int']['output'];
  exclude_from_feeds: Scalars['Boolean']['output'];
  gold_status: Scalars['Boolean']['output'];
  hide_ads_google?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  in_main_block: Scalars['Boolean']['output'];
  intervals?: Maybe<Array<ViewInterval>>;
  ip: Scalars['String']['output'];
  is_favorite: Scalars['Boolean']['output'];
  is_featured: Scalars['Boolean']['output'];
  lang: Scalars['String']['output'];
  media?: Maybe<ContentMedia>;
  moderation?: Maybe<ContentModeration>;
  ord: Scalars['Int']['output'];
  owner?: Maybe<User>;
  owner_id: Scalars['String']['output'];
  parent_id: Array<Scalars['String']['output']>;
  parents: Array<Topic>;
  poll_id: Scalars['String']['output'];
  project_id: Scalars['String']['output'];
  raw_tags: Array<RawTag>;
  search?: Maybe<ContentSearch>;
  short_url: Scalars['String']['output'];
  similar: Array<Content>;
  tags: Array<Scalars['String']['output']>;
  thumbnail: Scalars['String']['output'];
  thumbnails: Array<Scalars['String']['output']>;
  title?: Maybe<ContentTitle>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
  user_emotion: Scalars['String']['output'];
  video_duration: Scalars['String']['output'];
};

export type ContentDates = {
  commented: Scalars['String']['output'];
  deleted: Scalars['String']['output'];
  last_content: Scalars['String']['output'];
  posted: Scalars['String']['output'];
  posted_content: Scalars['String']['output'];
  updated: Scalars['String']['output'];
};


export type ContentDatesCommentedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ContentDatesDeletedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ContentDatesLast_ContentArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ContentDatesPostedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ContentDatesPosted_ContentArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type ContentDatesUpdatedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type ContentDescription = {
  cut: Scalars['String']['output'];
  intro: Scalars['String']['output'];
  long: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

export type ContentMedia = {
  content_id: Scalars['String']['output'];
  is_hd: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
};

export type ContentModeration = {
  ban_reason: Array<Scalars['String']['output']>;
  blocked: Scalars['Boolean']['output'];
  deleted: Scalars['Boolean']['output'];
  draft: Scalars['Boolean']['output'];
  moderated: Scalars['Boolean']['output'];
  original: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  visible: Scalars['Boolean']['output'];
};

export type ContentSearch = {
  RuTitle: Scalars['String']['output'];
  en_description: Scalars['String']['output'];
  en_title: Scalars['String']['output'];
  ka_description: Scalars['String']['output'];
  ka_title: Scalars['String']['output'];
  ro_description: Scalars['String']['output'];
  ro_title: Scalars['String']['output'];
  ru_description: Scalars['String']['output'];
  ru_title: Scalars['String']['output'];
  shingles: Scalars['String']['output'];
};

export type ContentTitle = {
  long: Scalars['String']['output'];
  short: Scalars['String']['output'];
};

export type Counters = {
  comment: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  like: Scalars['Int']['output'];
  sub: Scalars['Int']['output'];
  tendency: Scalars['Int']['output'];
  view: Scalars['Int']['output'];
};

export type Custom = {
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Dates = {
  created: Scalars['String']['output'];
  hide_hours: Scalars['Boolean']['output'];
  hide_schedule: Scalars['Boolean']['output'];
  launch_date: Scalars['String']['output'];
  range_hours: Scalars['Boolean']['output'];
  schedule: Array<Schedule>;
  show_calendar: Scalars['Boolean']['output'];
  soon: Scalars['Boolean']['output'];
};


export type DatesCreatedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type DatesLaunch_DateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Decoration = {
  background_color: Scalars['String']['output'];
  background_repeat_x: Scalars['String']['output'];
  background_repeat_y: Scalars['String']['output'];
  header_color: Scalars['String']['output'];
  header_image: Scalars['String']['output'];
};

export type DeliveryStatus = {
  full_adress: FullAdress;
  status: Scalars['String']['output'];
};

export type EmailSettingsInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};

export type Emotions = {
  __typename?: 'Emotions';
  good: Scalars['Int']['output'];
  laughing: Scalars['Int']['output'];
  sad: Scalars['Int']['output'];
  surprised: Scalars['Int']['output'];
  yuck: Scalars['Int']['output'];
};

export type ErrorsByField = {
  email?: Maybe<FieldName>;
  login?: Maybe<FieldName>;
  password?: Maybe<FieldName>;
  project_id?: Maybe<FieldName>;
};

export type Event = {
  __typename?: 'Event';
  additional_props: Array<EventProperty>;
  attend_qty: Scalars['Int']['output'];
  banner?: Maybe<Banner>;
  banner_mobile?: Maybe<Banner>;
  cover: Scalars['String']['output'];
  dates?: Maybe<Dates>;
  description?: Maybe<MultilangString>;
  has_tickets: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  kinopoisk: Scalars['String']['output'];
  media: Array<Media>;
  meta_description?: Maybe<MultilangString>;
  moderation?: Maybe<Moderation>;
  owner_id: Scalars['String']['output'];
  parent: Array<Category>;
  parent_id: Array<Scalars['String']['output']>;
  place: Array<Place>;
  project_id: Scalars['String']['output'];
  ratio?: Maybe<EventRatio>;
  rules_description?: Maybe<MultilangString>;
  seo_title?: Maybe<MultilangString>;
  short_description?: Maybe<MultilangString>;
  similar: Array<Event>;
  stopped: Scalars['Boolean']['output'];
  tags: Array<Scalars['String']['output']>;
  ticket_events: Array<TicketServiceEvent>;
  tickets: Scalars['String']['output'];
  title?: Maybe<MultilangString>;
  type: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type EventOptions = {
  event_pay_methods: Array<Scalars['String']['output']>;
  event_type: Scalars['String']['output'];
  idnp: Scalars['Boolean']['output'];
};

export type EventProperty = {
  title: MultilangString;
  value: MultilangString;
};

export type EventProps = {
  title?: Maybe<MultilangString>;
};

export type EventRatio = {
  imdb: Scalars['Float']['output'];
  kinopoisk: Scalars['Float']['output'];
};

export type ExternalAccountField = {
  ExternalAccount: Scalars['String']['output'];
  Provider: Scalars['String']['output'];
};

export type ExternalAccountResp = {
  errors: Array<FieldName>;
  errors_by_field: ErrorsByField;
  external_account: ExternalAccountField;
  message: Scalars['String']['output'];
  message_i18n?: Maybe<MultilangString>;
  reason: Scalars['String']['output'];
  status_code: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type FieldName = {
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
  message_i18n?: Maybe<MultilangString>;
  value: Scalars['String']['output'];
};

export type Filter = {
  icon: Scalars['String']['output'];
  is_displayed: Scalars['Boolean']['output'];
  is_visible: Scalars['Boolean']['output'];
  options: Array<Option>;
  title?: Maybe<MultilangString>;
  url: Scalars['String']['output'];
};

export enum FilterType {
  All = 'ALL',
  Bool = 'BOOL',
  Nonbool = 'NONBOOL'
}

export type Forecast = {
  __typename?: 'Forecast';
  cloud_percentage: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  forecast_date: Scalars['Int']['output'];
  humidity: Scalars['Int']['output'];
  icon: Scalars['String']['output'];
  location_id: Scalars['Int']['output'];
  parsed: Scalars['Int']['output'];
  pressure: Scalars['Int']['output'];
  rain_rate: Scalars['Float']['output'];
  source_id: Scalars['Int']['output'];
  sunrise: Scalars['Int']['output'];
  sunset: Scalars['Int']['output'];
  temperature: Scalars['Float']['output'];
  wind_direction: Scalars['Int']['output'];
  wind_speed: Scalars['Float']['output'];
};

export type ForecastDay = {
  __typename?: 'ForecastDay';
  Date: Scalars['Int']['output'];
  Day: Forecast;
  Night: Forecast;
};

export type ForecastList = {
  __typename?: 'ForecastList';
  Location: Scalars['String']['output'];
  Locations: Array<Scalars['String']['output']>;
  SourcesForecast: Array<Maybe<Source>>;
};

export type ForgotPasswordResp = {
  account_email: Scalars['String']['output'];
  errors: Array<FieldName>;
  errors_by_field: ErrorsByField;
  message: Scalars['String']['output'];
  message_i18n?: Maybe<MultilangString>;
  success: Scalars['Boolean']['output'];
};

export type FormTemplate = {
  fields: Array<FormTemplateField>;
  participant_declaration_link: Scalars['String']['output'];
  participant_declaration_type: Scalars['String']['output'];
  payment_terms_link: Scalars['String']['output'];
  regulation_link: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type FormTemplateField = {
  is_required: Scalars['Boolean']['output'];
  max: Scalars['Int']['output'];
  min: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  option: Scalars['String']['output'];
  options: Array<Scalars['String']['output']>;
  title: MultilangString;
  type: Scalars['String']['output'];
};

export type FullAdress = {
  adress: Scalars['String']['output'];
  apartment_office: Scalars['String']['output'];
  city: Scalars['String']['output'];
  door_code: Scalars['String']['output'];
  entrance: Scalars['String']['output'];
  floor: Scalars['String']['output'];
};

export type FullAdressInput = {
  adress?: InputMaybe<Scalars['String']['input']>;
  apartment_office?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  door_code?: InputMaybe<Scalars['String']['input']>;
  entrance?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
};

/**
 * ##################################################################################
 * Input
 * ##################################################################################
 */
export type GeneralSettingsInput = {
  birthdate?: InputMaybe<Scalars['Int']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
};

export type Geo = {
  lat: Scalars['Float']['output'];
  lon: Scalars['Float']['output'];
};

export type Group = {
  group_name: Scalars['String']['output'];
  teams: Array<Maybe<Team>>;
};

export type Hall = {
  id: Scalars['String']['output'];
  title?: Maybe<MultilangString>;
};

export type Histogram = {
  amount: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
};

export type IdControlStats = {
  alias: Scalars['String']['output'];
  avg_scan: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  n_scanned: Scalars['Int']['output'];
  start_date: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  stop_date: Scalars['Int']['output'];
};

export type IdControlValidateTicketResponse = {
  reason: Scalars['String']['output'];
  status_code: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type IdControlZone = {
  count: Scalars['Int']['output'];
  method: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  scanned: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  zone: Scalars['String']['output'];
};

export type Image = {
  cover: Scalars['String']['output'];
  logo: Scalars['String']['output'];
};

export type Limit = {
  limit_timestamp?: Maybe<Scalars['Int']['output']>;
};

/**
 * ####################################################################################
 * Topic
 * ####################################################################################
 */
export type LiveCode = {
  __typename?: 'LiveCode';
  home: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  sidebar: Scalars['String']['output'];
};


/**
 * ####################################################################################
 * Topic
 * ####################################################################################
 */
export type LiveCodeSidebarArgs = {
  isHome?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LoginSettingsInput = {
  new_login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MTicket = {
  available_ids: Array<Scalars['Int']['output']>;
  barcode: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  event_id: Scalars['String']['output'];
  hall_id: Scalars['String']['output'];
  place_id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  price_id: Scalars['Int']['output'];
  row_id: Scalars['Int']['output'];
  sector_id: Scalars['Int']['output'];
  site_id: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  ticket_id: Scalars['String']['output'];
};

export type Match = {
  away_flag?: Maybe<Scalars['String']['output']>;
  away_score?: Maybe<Scalars['Int']['output']>;
  away_scorers: Array<Maybe<Scalars['String']['output']>>;
  away_team_en?: Maybe<Scalars['String']['output']>;
  away_team_id?: Maybe<Scalars['String']['output']>;
  home_flag?: Maybe<Scalars['String']['output']>;
  home_score?: Maybe<Scalars['Int']['output']>;
  home_scorers: Array<Maybe<Scalars['String']['output']>>;
  home_team_en?: Maybe<Scalars['String']['output']>;
  home_team_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  local_date?: Maybe<Scalars['Int']['output']>;
  match_id?: Maybe<Scalars['String']['output']>;
  match_status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Media = {
  id: Scalars['String']['output'];
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Moderation = {
  blocked: Scalars['Boolean']['output'];
  moderated: Scalars['Boolean']['output'];
  visible: Scalars['Boolean']['output'];
};

export type MultilangString = {
  en: Scalars['String']['output'];
  ka: Scalars['String']['output'];
  nu: Scalars['String']['output'];
  ro: Scalars['String']['output'];
  ru: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * ##########################################################################
   * Account Mutation
   * ##########################################################################
   */
  accountRegister?: Maybe<AccountRegisterResponse>;
  addLaunchNotification: Scalars['Boolean']['output'];
  addNews: Scalars['Boolean']['output'];
  bannerClick?: Maybe<Ad>;
  changeLanguage: AccountChangeLanguageResponse;
  company_upsert: Company;
  contentEmote: Emotions;
  /**
   * ##########################################################################
   * Content Mutations
   * ##########################################################################
   */
  contentLike: Scalars['Int']['output'];
  /**
   * ##########################################################################
   * # Mutation: "forgetPassword"
   * # All requests must have:
   *  -    app_id
   * # Throught Email:
   *  -    email:"email_ex"
   *  -    recovery_type:"email"
   * # Throught username:
   *  -    username:"username_ex"
   * # Throught phone:
   *  -    phone_number:078941971
   *  -    code_type:"sms || voice_call"
   * ##########################################################################
   */
  editUserSettings?: Maybe<AccountServiceResponse>;
  errorReport: Scalars['Boolean']['output'];
  eventAddIdControl: Scalars['Boolean']['output'];
  /**
   * ##########################################################################
   * Event Mutations
   * ##########################################################################
   */
  eventAttend?: Maybe<Event>;
  eventRemoveIdControl: Scalars['Boolean']['output'];
  externalAccounts: ExternalAccountResp;
  forgotPassword: ForgotPasswordResp;
  forgotPasswordActivate: ForgotPasswordResp;
  placeRate?: Maybe<Place>;
  simpalsIDLogin?: Maybe<Account>;
  stopEventSale: Scalars['Boolean']['output'];
  transactionCancel: Scalars['Boolean']['output'];
  transactionContinue?: Maybe<Transaction>;
  /**
   * ##########################################################################
   * Ticket Mutations
   * ##########################################################################
   */
  transactionInit?: Maybe<Transaction>;
  transactionInvitation?: Maybe<Transaction>;
  /** sub/unsub */
  userChangeSubscription: UserChangeSubscriptionResponse;
  userIDControlUpdateTicket?: Maybe<IdControlValidateTicketResponse>;
  userIDControlValidateTicket?: Maybe<IdControlValidateTicketResponse>;
};


export type MutationAccountRegisterArgs = {
  app_id: Scalars['String']['input'];
  email: Scalars['String']['input'];
  lang: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationAddLaunchNotificationArgs = {
  event_id: Scalars['Int']['input'];
  lang: Scalars['String']['input'];
  launch_date: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
  user_email: Scalars['String']['input'];
};


export type MutationAddNewsArgs = {
  contacts: Scalars['String']['input'];
  description: Scalars['String']['input'];
  media_input?: InputMaybe<Array<InputMaybe<AddNewsMediaInput>>>;
  project_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationBannerClickArgs = {
  id: Scalars['String']['input'];
};


export type MutationChangeLanguageArgs = {
  app_id: Scalars['String']['input'];
  lang: Scalars['String']['input'];
};


export type MutationCompany_UpsertArgs = {
  company_code: Scalars['String']['input'];
  company_name: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  project_id: Scalars['String']['input'];
};


export type MutationContentEmoteArgs = {
  emotion: Scalars['String']['input'];
  id: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationContentLikeArgs = {
  delta: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationEditUserSettingsArgs = {
  avatar_settings?: InputMaybe<AvatarSettingsInput>;
  contact_settings?: InputMaybe<ContactSettingsInput>;
  email_settings?: InputMaybe<EmailSettingsInput>;
  general_settings?: InputMaybe<GeneralSettingsInput>;
  login_settings?: InputMaybe<LoginSettingsInput>;
  password_settings?: InputMaybe<PasswordSettingsInput>;
};


export type MutationErrorReportArgs = {
  content_id: Scalars['String']['input'];
  error: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type MutationEventAddIdControlArgs = {
  IsBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  alias: Scalars['String']['input'];
  eventID: Scalars['String']['input'];
  userID: Scalars['String']['input'];
};


export type MutationEventAttendArgs = {
  event_id: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationEventRemoveIdControlArgs = {
  eventID: Scalars['String']['input'];
  userID: Scalars['String']['input'];
};


export type MutationExternalAccountsArgs = {
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  external_user_id: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  app_id?: InputMaybe<Scalars['String']['input']>;
  code_type?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  recovery_type?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationForgotPasswordActivateArgs = {
  app_id: Scalars['String']['input'];
  code: Scalars['String']['input'];
  lang?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  password_repeat: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};


export type MutationPlaceRateArgs = {
  id: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
  rate: Scalars['Int']['input'];
  token: Scalars['String']['input'];
};


export type MutationSimpalsIdLoginArgs = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  app_id: Scalars['String']['input'];
  get_cookie?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  user_identifier?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStopEventSaleArgs = {
  event_id: Scalars['String']['input'];
  stopped?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTransactionCancelArgs = {
  id: Scalars['Int']['input'];
  user_id: Scalars['String']['input'];
};


export type MutationTransactionContinueArgs = {
  client?: InputMaybe<ClientInfoInput>;
  transaction_id: Scalars['Int']['input'];
};


export type MutationTransactionInitArgs = {
  action?: InputMaybe<Scalars['String']['input']>;
  call_back_url?: InputMaybe<Scalars['String']['input']>;
  call_back_url_params?: InputMaybe<CallBackUrlParamsInput>;
  client?: InputMaybe<ClientInfoInput>;
  client_reservation_timer?: InputMaybe<Scalars['Int']['input']>;
  delivery?: InputMaybe<Scalars['Boolean']['input']>;
  full_adress?: InputMaybe<FullAdressInput>;
  payment_project_id: Scalars['String']['input'];
  payment_status?: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
  promo_code_id?: InputMaybe<Scalars['String']['input']>;
  tickets: Array<TicketValidatorInput>;
};


export type MutationTransactionInvitationArgs = {
  action: Scalars['String']['input'];
  client?: InputMaybe<ClientInfoInput>;
  event_id: Scalars['String']['input'];
  place_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  reason: Scalars['String']['input'];
  tickets: Array<TicketValidatorInput>;
};


export type MutationUserChangeSubscriptionArgs = {
  action: Scalars['String']['input'];
  email: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type MutationUserIdControlUpdateTicketArgs = {
  event_id: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationUserIdControlValidateTicketArgs = {
  event_id: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type Option = {
  id: Scalars['String']['output'];
  title?: Maybe<MultilangString>;
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['String']['output'];
  map_link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rates: Array<Rate>;
  type: Scalars['String']['output'];
};

export type Page = {
  author: Scalars['String']['output'];
  content: MultilangString;
  current_part_of_path: Scalars['String']['output'];
  date: PageDate;
  full_url: Scalars['String']['output'];
  id: Scalars['String']['output'];
  last_editor: Scalars['String']['output'];
  og_content: MultilangString;
  position: Scalars['Int']['output'];
  project_id: Scalars['String']['output'];
  title: MultilangString;
};

export type PageDate = {
  created: Scalars['Float']['output'];
  updated: Scalars['Float']['output'];
};

export type PagesResp = {
  children: Array<Page>;
  html: Scalars['String']['output'];
  og: Scalars['String']['output'];
  page: Page;
  title: Scalars['String']['output'];
};

export type PasswordSettingsInput = {
  new_password: Scalars['String']['input'];
  new_password_repeat: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type PaymentParams = {
  key: Scalars['String']['output'];
  nonce: Scalars['String']['output'];
};

export type Phones = {
  country_code: Scalars['Int']['output'];
  is_commercial: Scalars['Boolean']['output'];
  is_verified: Scalars['Boolean']['output'];
  national_number: Scalars['String']['output'];
  phone_id: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
  region: MultilangString;
  verification_date: Scalars['Float']['output'];
  verification_required: Scalars['Boolean']['output'];
};

export type Photo = {
  image: Scalars['String']['output'];
  source: Scalars['String']['output'];
};

export type Place = {
  __typename?: 'Place';
  associated: Scalars['String']['output'];
  can_rate: Scalars['Boolean']['output'];
  comments_id: Scalars['String']['output'];
  contacts?: Maybe<Contacts>;
  date_created: Scalars['String']['output'];
  description?: Maybe<MultilangString>;
  events: Array<Event>;
  filters: Array<Filter>;
  halls: Array<Hall>;
  id: Scalars['Int']['output'];
  image?: Maybe<Image>;
  moderation?: Maybe<Moderation>;
  owner_id: Scalars['String']['output'];
  parent: Array<Category>;
  parent_id: Array<Scalars['String']['output']>;
  project_id: Scalars['String']['output'];
  ratio?: Maybe<PlaceRatio>;
  short_description?: Maybe<MultilangString>;
  similar: Array<Place>;
  title?: Maybe<MultilangString>;
  url: Scalars['String']['output'];
  work_time: Array<WorkTime>;
};


export type PlaceDate_CreatedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type PlaceFiltersArgs = {
  type?: InputMaybe<FilterType>;
};

export type PlaceRatio = {
  calc: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  sum: Scalars['Int']['output'];
};

export type PromoCodeData = {
  amount_from: Scalars['Float']['output'];
  amount_to: Scalars['Float']['output'];
  discount_type: Scalars['String']['output'];
  discount_value: Scalars['Int']['output'];
  error: Scalars['String']['output'];
  max_tickets_per_transaction: Scalars['Int']['output'];
  promo_code_type: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type PushNotification = {
  badge: Scalars['String']['output'];
  body: Scalars['String']['output'];
  category: Scalars['String']['output'];
  custom: Array<Custom>;
  date_sent: Scalars['Int']['output'];
  icon: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  bannerRandom?: Maybe<Ad>;
  categories: Array<Category>;
  /**
   * ##########################################################################
   * Category Queries
   * ##########################################################################
   */
  category?: Maybe<Category>;
  chisinauCurrent?: Maybe<Forecast>;
  companies?: Maybe<Array<Company>>;
  content?: Maybe<Content>;
  contents: Array<Content>;
  contentsCount: Scalars['Int']['output'];
  contentsFeatured: Array<Content>;
  contents_autocomplete: Array<AutocompleteResp>;
  /**
   * ##########################################################################
   * Event Queries
   * ##########################################################################
   */
  event?: Maybe<Event>;
  eventIDControlStatistic: Array<Histogram>;
  eventSVGGet: Scalars['String']['output'];
  events: Array<Event>;
  eventsFeatured: Array<Event>;
  favoriteContents: Array<Content>;
  forecastList?: Maybe<ForecastList>;
  liveCode?: Maybe<LiveCode>;
  /**
   * ##########################################################################
   * Pages Queries
   * ##########################################################################
   */
  page?: Maybe<PagesResp>;
  phoneVerificationTimestamp?: Maybe<Limit>;
  /**
   * ##########################################################################
   * Place Queries
   * ##########################################################################
   */
  place?: Maybe<Place>;
  places: Array<Place>;
  /**
   * ##########################################################################
   * Content Queries
   * ##########################################################################
   */
  projectPoll: Scalars['String']['output'];
  promoCodeData?: Maybe<PromoCodeData>;
  /**
   * ##########################################################################
   * PushNotifications Queries
   * ##########################################################################
   */
  pushNotificationsList: Array<PushNotification>;
  rates: RatesResponse;
  report?: Maybe<Report>;
  soldTickets: Array<SoldTicket>;
  /**
   * ##########################################################################
   * Tickets Queries
   * ##########################################################################
   */
  ticketsByEvent: Array<Ticket>;
  topic?: Maybe<Topic>;
  topics: Array<Topic>;
  /**
   * ##########################################################################
   * Account Queries
   * ##########################################################################
   */
  user?: Maybe<AccountServiceResponse>;
  userEventsCount: Scalars['Int']['output'];
  userEventsList: Array<Event>;
  userIDControlStatistic: Array<IdControlStats>;
  userIDControlZonesStatistic: Array<IdControlZone>;
  userSoldTickets: Array<SoldTicket>;
  userTicketsStatistic?: Maybe<TicketsStatistic>;
  userTransactionList: Array<Transaction>;
  user_emails?: Maybe<UserEmailResponse>;
  users: Array<Account>;
  usersAutoComplete: Array<Account>;
  worldCupGroups: Array<Maybe<Group>>;
  /**
   * ##########################################################################
   * World Cup Queries
   * ##########################################################################
   */
  worldCupMatches: Array<Maybe<Match>>;
};


export type QueryBannerRandomArgs = {
  lang: Scalars['String']['input'];
};


export type QueryCategoriesArgs = {
  get_filters?: InputMaybe<Scalars['Boolean']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryArgs = {
  get_filters?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  project_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompaniesArgs = {
  company_name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentArgs = {
  full_url?: InputMaybe<Scalars['String']['input']>;
  get_intervals?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  incr_counter_view?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  mlt?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContentsArgs = {
  affiliations?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  dominant_emotion?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['String']['input']>;
  exclude_business?: InputMaybe<Scalars['Boolean']['input']>;
  exclude_featured?: InputMaybe<Scalars['Boolean']['input']>;
  get_intervals?: InputMaybe<Scalars['Boolean']['input']>;
  gold_status?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  lang: Scalars['String']['input'];
  media_status?: InputMaybe<Scalars['String']['input']>;
  moderated?: InputMaybe<Scalars['Boolean']['input']>;
  only_video?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  owner_login?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  posted_date_from?: InputMaybe<Scalars['Int']['input']>;
  posted_date_to?: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
  search_only_title?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentsCountArgs = {
  affiliations?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  dominant_emotion?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  lang: Scalars['String']['input'];
  media_status?: InputMaybe<Scalars['String']['input']>;
  moderated?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  posted_date_from?: InputMaybe<Scalars['Int']['input']>;
  posted_date_to?: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentsFeaturedArgs = {
  affiliations?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  by_intervals?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  only_video?: InputMaybe<Scalars['Boolean']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  parent_type?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContents_AutocompleteArgs = {
  keyword: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type QueryEventArgs = {
  id: Scalars['Int']['input'];
  nsimilar?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventIdControlStatisticArgs = {
  event_id: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
};


export type QueryEventSvgGetArgs = {
  svg_id: Scalars['String']['input'];
};


export type QueryEventsArgs = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['Int']['input']>;
  date_to?: InputMaybe<Scalars['Int']['input']>;
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  get_duplicates?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  moderated?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  parent_url?: InputMaybe<Scalars['String']['input']>;
  place_id?: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  stopped?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Array<Scalars['Int']['input']>>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventsFeaturedArgs = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['Int']['input']>;
  date_to?: InputMaybe<Scalars['Int']['input']>;
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  moderated?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  parent_url?: InputMaybe<Scalars['String']['input']>;
  place_id?: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  stopped?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFavoriteContentsArgs = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  dominant_emotion?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  lang: Scalars['String']['input'];
  media_status?: InputMaybe<Scalars['String']['input']>;
  moderated?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  posted_date_from?: InputMaybe<Scalars['Int']['input']>;
  posted_date_to?: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryForecastListArgs = {
  id: Scalars['String']['input'];
};


export type QueryLiveCodeArgs = {
  id: Scalars['String']['input'];
};


export type QueryPageArgs = {
  lang: Scalars['String']['input'];
  path: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
};


export type QueryPhoneVerificationTimestampArgs = {
  phone_number: Scalars['String']['input'];
};


export type QueryPlaceArgs = {
  id: Scalars['Int']['input'];
  nevents?: InputMaybe<Scalars['Int']['input']>;
  nsimilar?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPlacesArgs = {
  associated?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  parent_url?: InputMaybe<Scalars['String']['input']>;
  project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectPollArgs = {
  id: Scalars['String']['input'];
};


export type QueryPromoCodeDataArgs = {
  event_id: Scalars['String']['input'];
  project_id: Scalars['String']['input'];
  promo_code_id: Scalars['String']['input'];
};


export type QueryPushNotificationsListArgs = {
  project_id: Scalars['String']['input'];
};


export type QueryRatesArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  compare?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  gcity?: InputMaybe<Scalars['Int']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReportArgs = {
  id: Scalars['String']['input'];
};


export type QuerySoldTicketsArgs = {
  date_from?: InputMaybe<Scalars['Int']['input']>;
  date_target_from?: InputMaybe<Scalars['Int']['input']>;
  date_target_to?: InputMaybe<Scalars['Int']['input']>;
  date_to?: InputMaybe<Scalars['Int']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  id_control?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Array<Scalars['String']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTicketsByEventArgs = {
  date?: InputMaybe<Scalars['Int']['input']>;
  event_id: Scalars['String']['input'];
  get_form_template?: InputMaybe<Scalars['Boolean']['input']>;
  place_id?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  ticket_ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryTopicArgs = {
  id: Scalars['String']['input'];
  incr_counter_view?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTopicsArgs = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  moderated?: InputMaybe<Scalars['Boolean']['input']>;
  owner_id?: InputMaybe<Scalars['String']['input']>;
  parent_id?: InputMaybe<Scalars['String']['input']>;
  parent_type?: InputMaybe<Scalars['String']['input']>;
  posted_date_from?: InputMaybe<Scalars['Int']['input']>;
  posted_date_to?: InputMaybe<Scalars['Int']['input']>;
  project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserArgs = {
  none?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserEventsCountArgs = {
  user_id: Scalars['String']['input'];
  user_type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserEventsListArgs = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  expired?: InputMaybe<Scalars['Boolean']['input']>;
  id_control?: InputMaybe<Scalars['String']['input']>;
  ord?: InputMaybe<Scalars['String']['input']>;
  project_id: Scalars['String']['input'];
  search_text?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  stopped?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_type?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUserIdControlStatisticArgs = {
  event_id: Scalars['String']['input'];
};


export type QueryUserIdControlZonesStatisticArgs = {
  event_id: Scalars['String']['input'];
};


export type QueryUserSoldTicketsArgs = {
  date_from?: InputMaybe<Scalars['Int']['input']>;
  date_target_from?: InputMaybe<Scalars['Int']['input']>;
  date_target_to?: InputMaybe<Scalars['Int']['input']>;
  date_to?: InputMaybe<Scalars['Int']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  id_control?: InputMaybe<Scalars['String']['input']>;
  owner_id: Scalars['String']['input'];
  project_id?: InputMaybe<Scalars['String']['input']>;
  search_text?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Array<Scalars['String']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserTicketsStatisticArgs = {
  event_id: Scalars['String']['input'];
  period: Scalars['String']['input'];
  target_date?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserTransactionListArgs = {
  amount_from?: InputMaybe<Scalars['Int']['input']>;
  amount_to?: InputMaybe<Scalars['Int']['input']>;
  date_from?: InputMaybe<Scalars['Int']['input']>;
  date_to?: InputMaybe<Scalars['Int']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  owner_id: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  payment_status?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  ticket_id?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  transaction_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUser_EmailsArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['Int']['input']>;
  get_count?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  users_ids: Array<Scalars['String']['input']>;
};


export type QueryUsersAutoCompleteArgs = {
  login: Scalars['String']['input'];
};


export type QueryWorldCupGroupsArgs = {
  group: Scalars['String']['input'];
  team_id: Scalars['String']['input'];
};


export type QueryWorldCupMatchesArgs = {
  match_id: Scalars['String']['input'];
  match_type: Scalars['String']['input'];
  team_id: Scalars['String']['input'];
};

export type Rate = {
  __typename?: 'Rate';
  buy: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  diff: Scalars['Float']['output'];
  nominal: Scalars['Float']['output'];
  sell: Scalars['Float']['output'];
  value: Scalars['Float']['output'];
};

export type RatesResponse = {
  __typename?: 'RatesResponse';
  official: Organization;
  organizations: Array<Organization>;
};


export type RatesResponseOrganizationsArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/**
 * ####################################################################################
 * Content
 * ####################################################################################
 */
export type RawTag = {
  __typename?: 'RawTag';
  name: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type Report = {
  __typename?: 'Report';
  arguments?: Maybe<ReportArguments>;
  contents: Array<Maybe<Content>>;
  count: Scalars['Int']['output'];
  selectedGroups: Array<Maybe<ReportGroup>>;
  selectedTags: Array<Scalars['String']['output']>;
};

export type ReportArguments = {
  __typename?: 'ReportArguments';
  dateFrom: Scalars['Int']['output'];
  dateTo: Scalars['Int']['output'];
  groups: Array<Scalars['String']['output']>;
};

export type ReportGroup = {
  __typename?: 'ReportGroup';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
};

export type Schedule = {
  dates: Array<Scalars['String']['output']>;
  place_id: Scalars['Int']['output'];
  range: Scalars['Boolean']['output'];
};


export type ScheduleDatesArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Seo = {
  description?: Maybe<MultilangString>;
  meta_description?: Maybe<MultilangString>;
  title?: Maybe<MultilangString>;
};

export type SoldTicket = {
  barcode: Scalars['String']['output'];
  client_info?: Maybe<ClientInfo>;
  date_created: Scalars['String']['output'];
  date_target: Scalars['String']['output'];
  event_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  id_control: Scalars['String']['output'];
  payment_status: Scalars['Int']['output'];
  place: Scalars['String']['output'];
  place_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  promo_code: Scalars['String']['output'];
  row: Scalars['String']['output'];
  scan_date: Scalars['String']['output'];
  status: Scalars['String']['output'];
  ticket_id: Scalars['String']['output'];
  transaction_id: Scalars['Int']['output'];
  zone_ro: Scalars['String']['output'];
  zone_ru: Scalars['String']['output'];
};


export type SoldTicketDate_CreatedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SoldTicketDate_TargetArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type SoldTicketScan_DateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Source = {
  __typename?: 'Source';
  Accuracy: Scalars['String']['output'];
  Forecast: Array<Maybe<ForecastDay>>;
  IconUrl: Scalars['String']['output'];
  Id: Scalars['Int']['output'];
  Name: Scalars['String']['output'];
  PyObject: Scalars['String']['output'];
  Url: Scalars['String']['output'];
};

export type Team = {
  drawn: Scalars['Int']['output'];
  flag: Scalars['String']['output'];
  goals_against: Scalars['Int']['output'];
  goals_for: Scalars['Int']['output'];
  group: Scalars['String']['output'];
  losses: Scalars['Int']['output'];
  matches_played: Scalars['Int']['output'];
  name_en: Scalars['String']['output'];
  points: Scalars['Int']['output'];
  team_id: Scalars['String']['output'];
  wins: Scalars['Int']['output'];
};

export type Ticket = {
  available: Scalars['Boolean']['output'];
  color: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  count_sold: Scalars['Int']['output'];
  date: Scalars['String']['output'];
  date_to: Scalars['String']['output'];
  event_id: Scalars['String']['output'];
  form_template: FormTemplate;
  group_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mTicket?: Maybe<MTicket>;
  options: Scalars['String']['output'];
  ord: Scalars['Int']['output'];
  place: Scalars['String']['output'];
  place_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  ref_id: Scalars['String']['output'];
  row: Scalars['String']['output'];
  session_id: Scalars['String']['output'];
  ticket_date_id: Scalars['String']['output'];
  type: Scalars['String']['output'];
  zone_en: Scalars['String']['output'];
  zone_ro: Scalars['String']['output'];
  zone_ru: Scalars['String']['output'];
};


export type TicketDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type TicketDate_ToArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type TicketDate = {
  color: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  date: Scalars['String']['output'];
  date_stop: Scalars['String']['output'];
  delivery_access: Scalars['Boolean']['output'];
  event_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  ord: Scalars['Int']['output'];
  place_id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  zone_en: Scalars['String']['output'];
  zone_ro: Scalars['String']['output'];
  zone_ru: Scalars['String']['output'];
};


export type TicketDateDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type TicketDateDate_StopArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type TicketServiceEvent = {
  can_book: Scalars['Boolean']['output'];
  cashier_ids: Array<Scalars['String']['output']>;
  company_name: Scalars['String']['output'];
  courier_payment_access: Scalars['Boolean']['output'];
  event_id: Scalars['String']['output'];
  event_options: EventOptions;
  form_template: FormTemplate;
  has_promo_category: Scalars['Boolean']['output'];
  hide_calendar: Scalars['Boolean']['output'];
  idno: Scalars['String']['output'];
  is_free: Scalars['Boolean']['output'];
  m_ticket_event_id: Array<Scalars['String']['output']>;
  m_ticket_site_id: Scalars['Int']['output'];
  owner_ids: Array<Scalars['String']['output']>;
  place_id: Scalars['String']['output'];
  project_id: Scalars['String']['output'];
  public_event: Scalars['Boolean']['output'];
  return_tickets: Scalars['Boolean']['output'];
  slave_ids: Array<Scalars['String']['output']>;
  stopped: Scalars['Boolean']['output'];
  svgid: Scalars['String']['output'];
  ticket_dates: Array<TicketDate>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TicketValidator = {
  barcode?: Maybe<Scalars['String']['output']>;
  count: Scalars['Int']['output'];
  ticket_id: Scalars['String']['output'];
};

export type TicketValidatorInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  count: Scalars['Int']['input'];
  ticket_id: Scalars['String']['input'];
};

export type TicketsStatistic = {
  cashier_count: Scalars['Int']['output'];
  cashier_total_price: Scalars['Int']['output'];
  histogram: Array<Histogram>;
  invitations_count: Scalars['Int']['output'];
  sold_tickets_count: Scalars['Int']['output'];
  total_tickets_count: Scalars['Int']['output'];
};

export type Topic = {
  __typename?: 'Topic';
  access_type?: Maybe<AccessType>;
  affiliation?: Maybe<Scalars['Int']['output']>;
  attachment: Scalars['String']['output'];
  breadcrumbs: Array<Breadcrumb>;
  color: Scalars['String']['output'];
  counters?: Maybe<Counters>;
  dates?: Maybe<ContentDates>;
  decoration?: Maybe<Decoration>;
  description?: Maybe<MultilangString>;
  id: Scalars['String']['output'];
  moderation?: Maybe<ContentModeration>;
  ord?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<User>;
  owner_id: Scalars['String']['output'];
  parent_id: Scalars['String']['output'];
  project_id: Scalars['String']['output'];
  seo?: Maybe<Seo>;
  title?: Maybe<MultilangString>;
  type: Scalars['String']['output'];
  url?: Maybe<MultilangString>;
};

export type Transaction = {
  call_back_url: Scalars['String']['output'];
  client?: Maybe<ClientInfo>;
  date_created: Scalars['String']['output'];
  delete_reason: Scalars['String']['output'];
  delivery_status: DeliveryStatus;
  event_id: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  m_tickets: Array<MTicket>;
  payment_amount: Scalars['Float']['output'];
  payment_date: Scalars['String']['output'];
  payment_params?: Maybe<PaymentParams>;
  payment_percent: Scalars['Float']['output'];
  payment_status: Scalars['Int']['output'];
  place_id: Scalars['String']['output'];
  reverse_reason: Scalars['String']['output'];
  reverse_user_id: Scalars['String']['output'];
  session_id: Scalars['String']['output'];
  status: Scalars['String']['output'];
  target_date: Scalars['String']['output'];
  tickets: Array<TicketValidator>;
  total_price: Scalars['Float']['output'];
  user_id: Scalars['String']['output'];
};


export type TransactionDate_CreatedArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type TransactionPayment_DateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type TransactionTarget_DateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  getDiff?: InputMaybe<Scalars['Boolean']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  _id: Scalars['String']['output'];
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  ip: Scalars['String']['output'];
  is_blocked: Scalars['Boolean']['output'];
  is_suspicious: Scalars['Boolean']['output'];
  is_verified: Scalars['Boolean']['output'];
  lang: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  login: Scalars['String']['output'];
  phones: Array<UserPhone>;
  role: Scalars['Int']['output'];
  sex: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
};

export type UserChangeSubscriptionResponse = {
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UserEmailResponse = {
  count: Scalars['Int']['output'];
  response: Array<UserInfo>;
  status_code: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type UserExternalAccountResolver = {
  external_user_id: Scalars['String']['output'];
  provider: Scalars['String']['output'];
};

export type UserInfo = {
  email?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['Int']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  last_visit?: Maybe<Scalars['Int']['output']>;
  project_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserPhone = {
  is_verified: Scalars['Boolean']['output'];
  phone_number: Scalars['String']['output'];
};

export type ViewInterval = {
  count: Scalars['Int']['output'];
  date: Scalars['Int']['output'];
};

export type WorkTime = {
  days: Array<Scalars['Int']['output']>;
  end: Scalars['Int']['output'];
  non_stop: Scalars['Boolean']['output'];
  start: Scalars['Int']['output'];
};

export type GetArticleQueryVariables = Exact<{
  articleId: Scalars['String']['input'];
}>;


export type GetArticleQuery = { __typename?: 'Query', content?: { __typename?: 'Content', id: string, thumbnail: string, title?: never | null, description?: never | null, dates?: never | null, counters?: never | null } | null };

export type GetArticlesQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', contents: Array<{ __typename?: 'Content', id: string, thumbnail: string, title?: never | null, description?: never | null, dates?: never | null, cparent?: { __typename?: 'Topic', attachment: string } | null, parents: Array<{ __typename?: 'Topic', attachment: string }> }> };


export const GetArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short"}},{"kind":"Field","name":{"kind":"Name","value":"long"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"long"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"updated"},"name":{"kind":"Name","value":"updated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"StringValue","value":"mm","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"ru","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"getDiff"},"value":{"kind":"BooleanValue","value":true}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"counters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"view"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticleQuery, GetArticleQueryVariables>;
export const GetArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"project_id"},"value":{"kind":"StringValue","value":"5107de83-f208-4ca4-87ed-9b69d58d16e1","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"ru","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"intro"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"updated"},"name":{"kind":"Name","value":"updated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"StringValue","value":"mm","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"StringValue","value":"ru","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"getDiff"},"value":{"kind":"BooleanValue","value":true}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"cparent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachment"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticlesQuery, GetArticlesQueryVariables>;