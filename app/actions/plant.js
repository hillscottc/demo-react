import fetch from 'isomorphic-fetch'

export const REQUEST_PLANTS = 'REQUEST_PLANTS';
export const RECEIVE_PLANTS = 'RECEIVE_PLANTS';
export const SELECT_PLANT = 'SELECT_PLANT';
export const INVALIDATE_PLANT = 'INVALIDATE_PLANT';


export function selectPlant(plant) {
  return {
    type: SELECT_PLANT,
    plant
  }
}


export function invalidatePlant(plant) {
  return {
    type: INVALIDATE_PLANT,
    plant
  }
}


function requestPlants(plant) {
  return {
    type: REQUEST_PLANTS,
    plant
  }
}


function receivePlants(json) {
  return {
    type: RECEIVE_PLANTS,
    plants: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}


function fetchPlants(plant) {
  return dispatch => {

    const plantsJson = [{"id": "1", "name": "palm"}, {"id": "2", "name": "bush"}];

    return dispatch(receivePlants(plantsJson));

  }
}


function shouldFetchPlants(state, plant) {
  const plants = state.plantsByPlantQuery[plant];
  if (!plants) {
    return true
  }
  if (plants.isFetchingReddit) {
    return false
  }
  return plants.didInvalidate
}


export function fetchPlantsIfNeeded(plant) {
  return (dispatch, getState) => {
    if (shouldFetchPlants(getState(), plant)) {
      return dispatch(fetchPlants(plant))
    }
  }
}
