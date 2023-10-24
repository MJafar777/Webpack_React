import { type StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
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
        data
      }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
