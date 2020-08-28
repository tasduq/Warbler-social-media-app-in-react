import React , {Component} from 'react'
import {Link} from 'react-router-dom'

class Authform extends Component{
	constructor(props){
		super(props)
		this.state = {
			email:"",
			password:"",
			username:"",
			profileImgUrl:""
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	handleChange(evt){
		this.setState({
			[evt.target.name] : evt.target.value
		})
	}
	
	handleSubmit(evt){
		evt.preventDefault()
		const authType = this.props.signup ? "signup" : "signin"
		this.props.onAuth(authType , this.state).then(() => {
			console.log("logged u in")
		})
	}
	
	render(){
		const {email , password , username , profileImgUrl} = this.state
		const {heading , buttonText , signup} = this.props
		return(
			<div>
				<div className = "row justify-content-md-center text-center">
					<div className = "col-md-6">
						<form onSubmit  = {this.handleSubmit}>
							<h2>{heading}</h2>
							<label htmlFor = "email">Email</label>
							<input 
								className = "form-control" 
								type = "email" 
								value = {email} 
								name = "email" 
								id = "email"
								onChange = {this.handleChange} 
							/>
							<label htmlFor = "password">Password</label>
							<input 
								className = "form-control" 
								type = "password" 
								value = {password} 
								name = "password" 
								id = "password"
								onChange = {this.handleChange} 
							/>
							{signup && (
								<div>
									<label htmlFor = "username">Username</label>
									<input 
										className = "form-control" 
										type = "text" 
										value = {username} 
										name = "username" 
										id = "username"
										onChange = {this.handleChange} 
									/>
									<label htmlFor = "profileimage">Profile Image Url</label>
									<input 
										className = "form-control" 
										type = "text" 
										value = {profileImgUrl} 
										name = "profileImgUrl" 
										id = "profileImgUrl"
										onChange = {this.handleChange} 
									/>
								</div>
							) }
							<button type = "submit" className = "btn btn-primary btn-block btn-lg">{buttonText}</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}


export default Authform;