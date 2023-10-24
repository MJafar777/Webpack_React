import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import React from 'react';
interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
