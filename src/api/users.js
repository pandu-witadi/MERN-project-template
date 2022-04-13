//
//
const { check, validationResult } = require('express-validator')

const CF = require('../config/default')
const User = require('../models/User')
const {
    passwordHash,
    createToken,
} = require('../util/auth')


const register = async (req, res) => {
    // input checking
    await check('name', 'Name is required').notEmpty().run(req)
    await check('email', 'Please include a valid email').isEmail().run(req)
    await check('password', 'Password length 6 or more characters').isLength({ min: 6 }).run(req)

    const errors = validationResult(req)
    if ( !errors.isEmpty() )
        return res.status(400).json({ errors: errors.array() })

    const { email, password, name } = req.body
    try {

        let user = await User.findOne({ email: email })
        if (user)
            return res.status(400).json({ errors: [{ msg: 'email already registered' }] })

        user = await User.create({
            email: email,
            hashPassword: await passwordHash(password),
            name: name
        })
        let accessToken = createToken({ userId: user._id })
        let { hashPassword, __v, ...others } = user._doc

        return res.status(200).json({
            accessToken: accessToken
        })
    } catch(err) {
        return res.status(400).json({ errors: [{ msg: 'register error' }] })
    }
}

module.exports = {
    register
}
