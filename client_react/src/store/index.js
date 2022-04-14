//
//
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// import alert from './alert'
import { authReducer } from './reducers/auth'
// import profile from './profile'


const initialState = {}
const middleware = [ thunk ]




const rootReducer = combineReducers({
    // alert,
    auth: authReducer,
    // profile
})

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware) )
)

export default store
