import {combineReducers} from 'redux';
import UsersReducers from './reducer-Users';
import ActiveUser from './reducer-ActiveUser';

const allReducers = combineReducers({
	users:UsersReducers,
	activeUser : ActiveUser
})

export default allReducers;