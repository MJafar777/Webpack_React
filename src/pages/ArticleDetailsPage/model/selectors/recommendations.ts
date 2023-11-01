import { StateSchema } from 'app/providers/storeProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};

export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.error;
};
