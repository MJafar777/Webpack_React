import React from 'react';
import cls from './ProfileCard.module.scss';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CountrySelect } from 'myEntities/Country';
import { CurrencySelect } from 'myEntities/Currency';
import { type Profile } from '../../model/types/profile';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { type Country } from 'myEntities/Country/model/types/country';
import { type Currency } from 'myEntities/Currency/model/types/currency';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';

interface ProfileCardProps {
    data?: Profile
    error?: string
    readonly?: boolean
    className?: string
    isLoading?: boolean
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCountry?: (country: Country) => void
  onChangeCurrency?: (currency: Currency) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    data,
    error,
    readonly,
    isLoading,
    className,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency,
    onChangeLastname,
    onChangeUsername,
    onChangeFirstname,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
    );
  }

  if (error) {
    return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    text={t('Попробуйте обновить страницу')}
                    title={t('Произошла ошибка при загрузке профиля')}
                />
            </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  };

  return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />

                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />

                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />

                <Input
                    value={data?.city}
                    placeholder={t('Город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <Input
                    value={data?.username}
                    placeholder={t('Введите имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />

                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />

                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />

                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
  );
};
