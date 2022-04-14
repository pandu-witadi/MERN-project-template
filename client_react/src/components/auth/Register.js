//
//
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { register } from '../../store/actions/auth'


const Register = ({  register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    })

    const { email, name, password, confirmPassword } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value} )
    const onSubmit = async(e) => {
        e.preventDefault()
        if (password !== confirmPassword)
            alert('password do not match')
        else
            register({ email, password, name })
    }

    // redirect
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <>
            <h1 className="large text-primary">Register</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={ e => onSubmit(e) }>

                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={ e => onChange(e) }
                        required
                        />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={ e => onChange(e) }
                        required
                        />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    name="password"

                    value={password}
                    onChange={ e => onChange(e) }
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"

                    value={confirmPassword}
                    onChange={ e => onChange(e) }
                    required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
            Already have an account? <Link to="/login">Login</Link>
            </p>
        </>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(
    mapStateToProps,
    { register }
)(Register)
