import { StateSchema } from 'app/providers/storeProvider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
