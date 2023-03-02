// require('dotenv').config()
const sha256 = require('js-sha256')
const jwt = require('jsonwebtoken')
const UsersDAO = require('../models/UsersDAO')
const logger = require('../utils/logger')
const {
  signInValidation,
  signUpValidation
} = require('../validations/usersValidations')

module.exports = class UsersController {
  //
  static async signUp (req, res) {
    //
    try {
      const validRequest = signUpValidation(req.body)
      if (!validRequest)
        return res.status(400).json({
          success: false,
          message: 'Please fill all fields'
        })

      const newUserObject = {
        email: req.body.email,
        password: req.body.password,
        passwordVerify: req.body.passwordVerify,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
      }

      //! TODO: is email unique??
      //TODO:
      // const existingUser = await UsersDAO.getUserByUsername(userObject.username)
      const existingUser = false
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: '❌ Please select a different username'
        })
      }

      if (newUserObject.password !== newUserObject.passwordVerify) {
        return res.status(400).json({
          succes: false,
          message: '❌ Passwords do not match'
        })
      }

      newUserObject.password = sha256(newUserObject.password)

      const newUserID = await UsersDAO.createUser(newUserObject)
      console.log(newUserID)
      return res.status(200).json({
        succes: true,
        message: '✅ New user signed up successfully',
        newUserID: newUserID
      })
    } catch (err) {
      logger('UsersController.signUp', err)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
  }

  static async signIn (req, res) {
    try {
      const validRequest = signInValidation(req.body)

      if (!validRequest)
        return res.status(400).json({
          success: false,
          message: '❌ Please fill all fields'
        })

      const user = await UsersDAO.getUserByEmail(req.body.email)
      if (!user || user.password != sha256(req.body.password)) {
        return res.status(400).json({
          success: false,
          message: '❌ Wrong username or password'
        })
      }

      const accessToken = jwt.sign(
        {
          user_id: user._id,
          email: user.email
        },
        process.env.ACCESS_TOKEN_SECRET
      )

      res.json({
        accessToken: accessToken
      })
    } catch (err) {
      logger('UsersController.signIn', `Error in UsersController.Login ${err}`)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
  }

  static async signOut (req, res) {}
}
