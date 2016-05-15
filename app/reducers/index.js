import { combineReducers } from 'redux'

import {  postsByReddit, selectedReddit} from './reddit'
import {  plantsByPlantQuery, selectedPlant} from './plant'

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  plantsByPlantQuery,
  selectedPlant
});

export default rootReducer
