import React from 'react'
import {Link} from 'react-router-dom'

const Homepage = () => {
	return(
		<div className = "home-hero">
			<h1>Whats Happening</h1>
			<h4>New to Warbler</h4>
			<Link className = "btn btn-primary" to = "/signup">
				Sign Up Here
			</Link>
		</div>
	)
}

export default Homepage
