import React from 'react';
import cls from './PageLoader.module.scss';
import { Loader } from '../../ui/Loader/Loader';
import { classNames } from '../../lib/classNames/classNames';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
