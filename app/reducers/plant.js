import {
  SELECT_PLANT, INVALIDATE_PLANT,
  REQUEST_PLANTS, RECEIVE_PLANTS
} from '../actions/plant'

export function selectedPlant(state = {}, action) {
  switch (action.type) {
    case SELECT_PLANT:
      return action.plant;
    default:
      return state
  }
}

function plants(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_PLANT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_PLANTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_PLANTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state
  }
}


export function plantsByPlantQuery(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_PLANT:
    case RECEIVE_PLANTS:
    case REQUEST_PLANTS:
      return Object.assign({}, state, {
        [action.plant]: plants(state[action.plant], action)
      });
    default:
      return state
  }
}

