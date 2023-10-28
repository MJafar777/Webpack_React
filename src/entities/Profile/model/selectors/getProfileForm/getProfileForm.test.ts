import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return value', () => {
    const data = {
      username: 'Jafar',
        lastname: 'Mirzaraximov',
        age: 23,
        city: 'Tashkent',
        first: 'vjvjvjvj'
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
