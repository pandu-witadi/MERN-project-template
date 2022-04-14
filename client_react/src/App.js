//
//
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styleApp.css'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'


// axios settings
import axios from 'axios'
import { baseURL } from './setUrl'
axios.defaults.baseURL = baseURL


const App = () => {
    return (
        <BrowserRouter>
            <>
                <Navbar />
                <section className="container">
                        <Switch>
                            <Route exact path='/register' component={Register} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/dashboard' component={Dashboard} />
                            <PrivateRoute exact path='/dashboard' component={Dashboard} />
                        </Switch>
                    </section>
            </>
        </BrowserRouter>
    )
}

export default App
