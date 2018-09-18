import * as ACTION_TYPES from '../action-types'
import { requestHandler } from '../../config/api'

const requestCarholderDataSuccess = carholderData => {
    return {
        type: ACTION_TYPES.FETCH_CARHOLDER_DATA_SUCCESS,
        payload: carholderData
    }
}

  
const requestCarholderDataError = apiError => {
    return {
        type: ACTION_TYPES.FETCH_CARHOLDER_DATA_ERROR,
        payload: apiError
    }
}

export const requestCarHolderData = carNumber => dispatch => requestHandler(carNumber)
    .then(response => dispatch(requestCarholderDataSuccess(response)))
    .catch(apiError => dispatch(requestCarholderDataError(apiError)))