// require('dotenv').config()
const sha256 = require('js-sha256')
const jwt = require('jsonwebtoken')
const UsersDAO = require('../models/UsersDAO')
const logger = require('../utils/logger')
const {
  signInValidation,
  signUpValidation,
  updateValidation
} = require('../validations/usersValidations')

module.exports = class UsersController {
  // AUTH RELATED
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
        firstName: req.body.firstName ?? null,
        lastName: req.body.lastName ?? null,
        phone: req.body.phone ?? null
      }
      //TODO:
      // const existingUser = await UsersDAO.getUserByUsername(userObject.username)

      if (newUserObject.password !== newUserObject.passwordVerify) {
        return res.status(400).json({
          succes: false,
          message: '❌ Passwords do not match'
        })
      }

      newUserObject.password = sha256(newUserObject.password)

      const newUserID = await UsersDAO.createUser(newUserObject)
      return res.status(201).json({
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

      //! EMAIL + PASSWORD ARE VALID AND APPROVED => CREATE TOKEN
      const accessToken = jwt.sign(
        {
          user_id: user._id,
          email: user.email
        },
        process.env.ACCESS_TOKEN_SECRET
      )

      res.status(200).json({
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

  // DB RELATED
  static async getUserByID (req, res, next) {
    let result
    try {
      result = await UsersDAO.getUserByID(req.params.id)
      if (!result) {
        logger('UsersController.getUserByID', 'user not found')
        return res.status(404).json({
          success: false,
          message: '❌ Can not find user'
        })
      }
    } catch (err) {
      logger('UsersController.getUserByID', err.message)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }

    req.user = result
    next()
  }

  static getOneUser (req, res) {
    return res.status(200).json({ user: req.user })
  }

  static async getAllUsers (req, res) {
    try {
      const result = await UsersDAO.getAll()
      return res.status(200).json({ users: result })
    } catch (err) {
      logger('UsersController.getAllUsers', err.message)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
  }

  static async resetPassword () {}

  static async updateUser (req, res) {
    try {
      const validRequest = updateValidation(req.body)
      if (!validRequest)
        return res.status(400).json({
          success: false,
          message: '❌ Fields not valid'
        })

      const result = await UsersDAO.updateUser(req.user._id, req.body)
      return res.status(200).json({
        succes: true,
        updatedFileds: req.body
      })
    } catch (err) {
      logger('UsersController.updateUser', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

  static async deleteUser (req, res) {
    //
    try {
      const result = await UsersDAO.deleteUser(req.user._id)

      return res.status(200).json({
        succes: true,
        message: `✅ User (${req.user._id} deleted succesfully)`
      })
    } catch (err) {
      logger('UsersController.deleteUser', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

  static async makeAdmin (req, res) {}

  static async removeAdmin (req, res) {}
}
