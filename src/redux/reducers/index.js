
import * as ACTION_TYPES from '../action-types';

const initialState = {
  carHolderDetails: null,
  apiError: null
}

export default function indexReducer(state = initialState, { type, payload }) {
  switch(type) {
    case ACTION_TYPES.FETCH_CARHOLDER_DATA_SUCCESS :{
        return {...state, carHolderDetails: payload}
    }

    case ACTION_TYPES.FETCH_CARHOLDER_DATA_ERROR : {
        return {...state, apiError: payload}
    }

    default:
      return state
    }
}

