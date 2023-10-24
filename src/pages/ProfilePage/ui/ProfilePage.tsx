import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateError,
  profileActions,
  ProfileCard,
  profileReducer
} from 'myEntities/Profile';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { type Currency } from 'myEntities/Currency';
import { type Country } from 'myEntities/Country';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'myEntities/Profile/model/types/profile';
const reducers: ReducersList = {
  profile: profileReducer
};

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  useEffect(() => {
    if(__PROJECT__ !=='storybook'){
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const validateErrorTranslationList = {
    [ValidateProfileError.INCORRECT_AGE]:
      "Yosh haqidagi ma'lumot notogri kiritildi",
    [ValidateProfileError.INCORRECT_USER_DATA]:
      "User ma'lumotlarini kiritishda xatolikka berdi",
    [ValidateProfileError.INCORRECT_COUNTRY]: 'davlat tanlanmadi'
  };
  const getSelectorProfileErrors = useSelector(getProfileValidateError);

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {getSelectorProfileErrors?.length
          ? getSelectorProfileErrors?.map((err) => {
            return (
                <Text
                  theme={TextTheme.ERROR}
                  key={err}
                  // @ts-expect-error
                  text={`${validateErrorTranslationList[err]}`}
                />
            );
          })
          : ''}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
