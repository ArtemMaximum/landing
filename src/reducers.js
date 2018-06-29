import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import apps from './modules/apps/reducer'

export default combineReducers({
  form,
  apps,
});