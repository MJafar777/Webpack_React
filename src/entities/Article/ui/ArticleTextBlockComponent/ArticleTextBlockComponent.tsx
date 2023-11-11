import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text title={block.title} className={cls.title} />}
                        off={
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((paragraph, index) => (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <>
                                <AppImage
                                    fallback={
                                        <Skeleton width="100%" height={250} />
                                    }
                                    src={paragraph.img1}
                                    className={cls.img}
                                    alt={paragraph.paragraphs1}
                                />
                                <Text
                                    key={paragraph.paragraphs1}
                                    text={paragraph.paragraphs1}
                                    className={cls.paragraph}
                                />
                            </>
                        }
                        off={
                            <TextDeprecated
                                key={paragraph.paragraphs1}
                                text={paragraph.paragraphs1}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
