import produce from 'immer';
import SecureLS from 'secure-ls';
import {
  InternationalisationState,
  CHANGE_LANGUAGE,
  SET_TRANSLATOR_FUNCTION,
  InternationalisationTypes,
  ApplicationAction
} from 'store/types';

const ls = new SecureLS({ encodingType: 'aes' });
const DEFAULT_LANGUAGE = InternationalisationTypes.FR;

export const initialState: InternationalisationState = {
  locale: ls.get('lang') || DEFAULT_LANGUAGE
};

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return produce(state, (draft) => {
        draft.locale = action.language;
      });
    case SET_TRANSLATOR_FUNCTION:
      return produce(state, (draft) => {
        draft.t = action.t;
      });
    default:
      return state;
  }
};

export default reducer;
