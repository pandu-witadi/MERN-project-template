//
//
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'


const JSX = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    <React.StrictMode>{JSX}</React.StrictMode>,
    document.getElementById('root')
)
