import { type Currency } from 'entities/Currency/model/types/currency';
import { type Country } from 'entities/Country/model/types/country';


export enum ValidateProfileError {
    INCORRECT_AGE = 'INCORRECT_AGE',
    NO_PROFILE_DATA = 'NO_PROFILE_DATA',
    INCORRECT_SERVER = 'INCORRECT_SERVER',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    SERVER_ERROR = "SERVER_ERROR"
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
