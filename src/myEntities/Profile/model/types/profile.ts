import { type Currency } from 'myEntities/Currency/model/types/currency';
import { type Country } from 'myEntities/Country/model/types/country';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INCORRECT_SERVER = 'INCORRECT_SERVER',
  NO_PROFILE_DATA = 'NO_PROFILE_DATA',
}
export interface Profile {
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateError?: ValidateProfileError[ ]
}
