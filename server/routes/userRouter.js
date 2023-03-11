const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')

const authMiddleware = require('../middlewares/authMiddleware')

//! PUBLIC ROUTES:
router.post('/signup', UsersController.signUp)
router.post('/signin', UsersController.signIn)
router.delete('/signout', UsersController.signOut)

router.get('/:id', UsersController.getUserByID, UsersController.getOneUser)
router.patch('/:id', UsersController.getUserByID, UsersController.updateUser)

//! PROTECTED TO SIGNED USER:
router.post('/refresh',authMiddleware, UsersController.refresh)


//! PROTECTED TO ADMIN:
router.get(
  '/',
  authMiddleware,
  UsersController.isAdmin,
  UsersController.getAllUsers
)
router.patch(
  '/:id/make-admin',
  authMiddleware,
  UsersController.isAdmin,
  UsersController.getUserByID,
  UsersController.makeAdmin
)
router.delete(
  '/:id/make-admin',
  authMiddleware,
  UsersController.isAdmin,
  UsersController.getUserByID,
  UsersController.removeAdmin
)
router.delete(
  '/:id',
  authMiddleware,
  UsersController.isAdmin,
  UsersController.getUserByID,
  UsersController.deleteUser
)

module.exports = router
