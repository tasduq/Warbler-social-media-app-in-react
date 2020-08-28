import rootReducer from './reducers/index'
import {createStore , applyMiddleware , compose} from 'redux'
import thunk from 'redux-thunk'

function configureStore(){
	const store = createStore(
		rootReducer , 
		compose ( applyMiddleware(thunk) ,
		window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	)
	return store
}

export default configureStore