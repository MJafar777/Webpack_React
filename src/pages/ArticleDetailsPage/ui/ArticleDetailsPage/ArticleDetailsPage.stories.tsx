import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Article, ArticleBlockType, ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
    <ArticleDetailsPage {...args} />
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
                {
                    img1: 'https://agronet.uz/wp-content/uploads/2020/05/pomidor-fitoftora.jpg',
                    paragraphs1:
                        'Касалликнинг ривожланиш шароитлари: Касалликни қўзғатувчи замбуруғ томорқаларда етиштириладиган картошка ва помидорда, шунингдек итузумгулдошлар оиласига мансуб бегона ўтларда сақланиши мумкин. Касалликнинг ривожланишига салқин ва нам об-ҳаво қулай имконият яратади.',
                },
                {
                    img1: 'https://agronet.uz/wp-content/uploads/2020/05/pomidor-fuzarioz.jpg',
                    paragraphs1:
                        'Кураш чоралари: Мазкур касалликка қарши фунгитсидлар пуркаш ва касалликнинг авж олишини башорат қилиш тизимини йўлга қўйиш зарур. Помидорни картошкадан сўнг ёки картошка билан ёнма-ён етиштириш тавсия этилмайди, чунки картошка ўсимлиги кўпинча мазкур касаллик кўзғатувчисининг манбаи ҳисобланади.',
                },
                {
                    img1: 'https://agronet.uz/wp-content/uploads/2020/05/pomidor-kladosporioz.jpg',
                    paragraphs1:
                        'Касалликнинг ривожланиш шароитлари: Касалликни қўзғатувчи замбуруғ томорқаларда етиштириладиган картошка ва помидорда, шунингдек итузумгулдошлар оиласига мансуб бегона ўтларда сақланиши мумкин. Касалликнинг ривожланишига салқин ва нам об-ҳаво қулай имконият яратади.',
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
