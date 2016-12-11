import React from 'react';
import UserList from '../../Container/userList';
import UserDetails from '../../Container/userDetails';

class App extends React.Component{
	render(){
		return (
			<div>
				<h2>UserList</h2>
				<UserList/>
				<hr/>
				<h2>UserDetails</h2>
				<UserDetails/>
			</div>
		)
	}
}

export default App;