const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')

const authMiddleware = require('../middlewares/authMiddleware')

//! PUBLIC ROUTES:
router.post('/signup', UsersController.signUp)
router.post('/signin', UsersController.signIn)

// TODO
router.delete('/signout', (req, res) => {
  // log out
})

router.get('/:id', UsersController.getUserByID, UsersController.getOneUser)
router.patch('/:id', UsersController.getUserByID, UsersController.updateUser)

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
router.patch(
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
