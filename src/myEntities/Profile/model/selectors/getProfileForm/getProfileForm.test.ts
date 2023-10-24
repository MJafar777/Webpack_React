import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return value', () => {
    const data = {
      username: 'Behzod',
      lastname: 'hamroyev',
      age: 23,
      city: 'firs',
      first: 'sklsd'
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
