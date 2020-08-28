import React from "react"
import {Switch  , Route , withRouter , Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import Homepage from '../components/Homepage'
import Authform from '../components/Authform'
import {authUser} from '../store/actions/auth'

const Main = (props) => {
	const {authUser} = props
	return(
		<div className = "container">
			<Switch>
				<Route exact path = "/" render = {(routeProps) => <Homepage {...routeProps} /> } />
				<Route  exact path = "/signin" render = {(routeProps) => {
						return(
							<Authform onAuth = {authUser} buttonText = "Log In" heading = "Welcome back" {...routeProps}                                />
						)
					} }
				/>
				<Route exact path = "/signup" render = {(routeProps) => {
						return(
							<Authform onAuth = {authUser} buttonText = "Sign Up" heading = "Sign up" signup = {true}                                   {...routeProps}  />
						)
					} }
				/>
			</Switch>
		</div>
	)
	
}

function mapStateToProps(state){
	return{
		currentUser: state.currentuser
	}
}

export default withRouter(connect(mapStateToProps , {authUser})(Main))