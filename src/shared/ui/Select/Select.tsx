  import cls from './Select.module.scss';
  import React, { type ChangeEvent, memo, useMemo } from 'react';
  import { classNames, type Mods } from 'shared/lib/classNames/classNames';

  export interface SelectOption {
    value: string
    content: string
  }

  interface SelectProps {
    label?: string
    value?: string
    readonly?: boolean
    className?: string
    options?: SelectOption[]
    onChange?: (value: string) => void
  }

  export const Select = memo((props: SelectProps) => {
    const { className, label, options, onChange, value, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    const optionsList = useMemo(
      () =>
        options?.map((opt) => (
          <option className={cls.option} value={opt.value} key={opt.value}>
            {opt.content}
          </option>
        )),
      [options]
    );

    const mods: Mods = {};

    return (
      <div className={classNames(cls.Wrapper, mods, [className])}>
        {label && <span className={cls.label}>{`${label}>`}</span>}
        <select
          disabled={readonly}
          className={cls.select}
          value={value}
          onChange={onChangeHandler}
        >
          {optionsList}
        </select>
      </div>
    );
  });
