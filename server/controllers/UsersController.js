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
        avatar: null,
        phone: req.body.phone ?? null,
        settings: {
          darkMode: false
        }
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
    console.log(req.body)
    try {
      res.clearCookie('cookie-session')

      const validRequest = signInValidation(req.body)
      if (!validRequest)
        return res.status(400).json({
          success: false,
          message: '❌ Please fill all fields'
        })

      const user = await UsersDAO.getUserByEmail(req.body.email)
      if (!user || user.password != sha256(req.body.password)) {
        return res.status(401).json({
          success: false,
          message: '❌ Wrong username or password'
        })
      }

      //! EMAIL + PASSWORD ARE VALID AND APPROVED => CREATE TOKEN AND SET A COOKIE
      const accessToken = jwt.sign(
        {
          _id: user._id,
          email: user.email
        },
        process.env.ACCESS_TOKEN_SECRET
      )

      res.status(200).json({
        accessToken: accessToken,
        signedUser: {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.avatar,
          phone: user.phone,
          createdAt: user.createdAt,
          permission: user.permission,
          petsWishList: user.petsWishList,
          settings: user.settings
        }
      })
    } catch (err) {
      logger('UsersController.signIn', `Error in UsersController.Login ${err}`)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
  }

  static async refresh (req, res) {
    console.log('refreshing')
    console.log(req.currentUser)

    try {
      const user = await UsersDAO.getUserByID(req.currentUser._id)
      console.log(user)
      if (!user) {
        logger('UsersController.refresh', 'user not found')
        return res.status(404).json({
          success: false,
          message: '❌ Cannot find user'
        })
      }
      console.log(req.token)
      res.status(200).json({
        success: true,
        accessToken: req.token,
        signedUser: {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.avatar,
          phone: user.phone,
          createdAt: user.createdAt,
          permission: user.permission,
          petsWishList: user.petsWishList,
          settings: user.settings
        }
      })
    } catch (err) {
      logger(
        'UsersController.refresh',
        `Error in UsersController.refresh ${err}`
      )
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
  }

  static async signOut (req, res) {
    try {
      res.status(200).json({
        success: true,
        message: '✅ User signed out successfully'
      })
    } catch (err) {}
  }

  // DB RELATED
  static async getUserByID (req, res, next) {
    let result
    try {
      result = await UsersDAO.getUserByID(req.params.id)
      if (!result) {
        logger('UsersController.getUserByID', 'user not found')
        return res.status(404).json({
          success: false,
          message: '❌ Cannot find user'
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
    return res.status(200).json({ 
      success: true,
      user: req.user 
    })
  }

  static async getAllUsers (req, res) {
    try {
      const result = await UsersDAO.getAll()
      return res.status(200).json({ 
        success: true,
        users: result 
      })
    } catch (err) {
      logger('UsersController.getAllUsers', err.message)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
  }

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

  static async addPetToWishList (req, res) {
    const { currentUser, pet } = req

    try {
      const result = await UsersDAO.addPetToWishList(currentUser._id, pet._id)

      if (result.modifiedCount === 0) {
        logger('UsersController.addPetToWishList', '❌ Pet already exists')
        return res.status(409).json({
          success: false,
          message: '❌ Pet already exists'
        })
      }

      return res.status(200).json({
        succes: true,
        user: currentUser.email,
        petAddedToWishList: pet.name
      })
    } catch (err) {
      logger('UsersController.addPetToWishList', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

  static async removePetFromWishList (req, res) {
    const { currentUser, pet } = req

    try {
      const result = await UsersDAO.removePetFromWishList(
        currentUser._id,
        pet._id
      )

      if (result.modifiedCount === 0) {
        logger(
          'UsersController.removePetFromWishList',
          '❌ Pet was not in wish list'
        )
        return res.status(404).json({
          success: false,
          message: '❌ Pet was not in wish list'
        })
      }

      return res.status(200).json({
        succes: true,
        user: currentUser.email,
        petRemovedFromWishList: pet.name
      })
    } catch (err) {
      logger('UsersController.removePetFromWishList', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

  static async getPetsByUser (req, res, next) {
    const { user } = req



    if (user.petsWishList.length === 0) {
      res.status(404).json({
        success: false,
        message: '❌ No pets were found in user wish-list'
      })
    }

    req.petsIDs = user.petsWishList
    next()
  }

  static async resetPassword () {}

  static async isAdmin (req, res, next) {
    const { currentUser } = req
    const fullUserData = await UsersDAO.getUserByID(currentUser._id)
    if (fullUserData.permission !== 'admin') {
      logger('UserController.isAdmin', '❌ Not admin - access denied')
      return res.status(401).json({
        success: false,
        message: `❌ Not admin - access denied`
      })
    }

    logger('UserController.isAdmin', '✅ Admin permissins verified')
    next()
  }

  static async makeAdmin (req, res) {}

  static async removeAdmin (req, res) {}
}
