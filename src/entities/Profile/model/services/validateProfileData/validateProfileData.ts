import { type Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  const errors: ValidateProfileError[] = [];
  if (!profile) {
    return [ValidateProfileError.NO_PROFILE_DATA];
  }
  if (!profile?.first || !profile?.lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if ((profile?.country) == null) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!profile?.age || !Number.isInteger(profile?.age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  return errors;
};
