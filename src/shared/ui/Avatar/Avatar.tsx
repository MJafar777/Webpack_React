  import cls from './Avatar.module.scss';
  import React, { type CSSProperties, useMemo } from 'react';
  import { classNames, type Mods } from 'shared/lib/classNames/classNames';

  interface AvatarProps {
    src?: string
    alt?: string
    size?: number
    className?: string
  }

  export const Avatar = ({
    className, src, size, alt
  }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(() => ({
      width: size || 100,
      height: size || 100
    }), [size]);

    return (
          <img
              src={src}
              alt={alt}
              style={styles}
              className={classNames(cls.Avatar, mods, [className])}
          />
    );
  };
