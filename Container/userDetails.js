import React,{Component} from 'react';
import {connect} from 'react-redux';

class userDetails extends Component{
	render(){
		if(!this.props.user){
			return(<div>Select a User...</div>)
		}
		return (
			<div>
				<span>{this.props.user.first}</span>
				<span>{this.props.user.last}</span>
				<span>{this.props.user.age}</span>
				<p>{this.props.user.description}</p>
			</div>
		)
	}
}

function matchStateToProps(state){
	debugger;
	return ({
		user: state.activeUser
	})
}

export default connect(matchStateToProps)(userDetails);