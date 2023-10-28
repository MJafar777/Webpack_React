import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateError } from './getValidateError';
import { ValidateProfileError } from '../../types/profile';

describe('ValidateProfileError.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_SERVER
        ]
      }
    };
    expect(getProfileValidateError(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_SERVER
    ]);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
  });
});
