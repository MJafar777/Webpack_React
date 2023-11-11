import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {
    ArticleType,
    ArticleBlockType,
} from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Ulbi tv',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                {
                    img1: 'https://agronet.uz/wp-content/uploads/2019/06/1777.jpg',
                    paragraphs1:
                        'Белгилари: Зарарланган баргларнинг банди пастга қараб қийшаяди. Поя ва барглардаги зарарланган жойлар яшил, намлик билан тўйинган ноаниқ шаклдаги йирик доғлар кўринишига эга бўлади. Мазкур доғларнинг ўлчами ортиб боради. Жигарранг тусга киради ва қоғозсимон бўлиб қолади. Мевалардаги зарарланган жойлар эса қаттиқ ноаниқ шаклдаги катта жигарранг-яшил доғлар кўринишида ифодаланади. Мевадаги бундай зарарланган жойнинг юзаси дағал, мойсимон кўринишда бўлади.',
                },
            ],
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];
