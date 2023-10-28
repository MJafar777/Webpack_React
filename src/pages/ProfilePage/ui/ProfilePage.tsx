  import { classNames } from 'shared/lib/classNames/classNames';
  import {
    DynamicModuleLoader,
    type ReducersList
  } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
  import {
    ProfileCard,
    getProfileForm,
    profileActions,
    profileReducer,
    getProfileError,
    fetchProfileData,
    getProfileReadonly,
    getProfileIsLoading,
    getProfileValidateError
  } from 'entities/Profile';

  import { useSelector } from 'react-redux';
  import { type Country } from 'entities/Country';
  import { type Currency } from 'entities/Currency';
  import { Text, TextTheme } from 'shared/ui/Text/Text';
  import React, { useCallback, useEffect } from 'react';
  import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

  import { ValidateProfileError } from 'entities/Profile/model/types/profile';
  import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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
        "Yoshinsizni noto'gri kiritdingiz",
      [ValidateProfileError.INCORRECT_USER_DATA]:
        "User ma'lumotlari xato",
      [ValidateProfileError.INCORRECT_COUNTRY]:
       'Davlatni tanlang',
      [ValidateProfileError.INCORRECT_SERVER]:
      "serverda qandaydir xatolik bor, qayta urinib ko'ring"
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
            error={error}
            data={formData}
            readonly={readonly}
            isLoading={isLoading}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeAvatar={onChangeAvatar}
            onChangeCountry={onChangeCountry}
            onChangeUsername={onChangeUsername}
            onChangeCurrency={onChangeCurrency}
            onChangeLastname={onChangeLastname}
            onChangeFirstname={onChangeFirstname}
          />
        </div>
      </DynamicModuleLoader>
    );
  };

  export default ProfilePage;