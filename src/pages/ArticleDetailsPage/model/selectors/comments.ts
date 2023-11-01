import { StateSchema } from 'app/providers/storeProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.comments?.isLoading;
};

export const getArticleCommentsError = (state: StateSchema) => {
    return state.articleDetailsPage?.comments?.error;
};
