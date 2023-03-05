const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')

const authMiddleware = require('../middlewares/authMiddleware')

router.post('/signup', UsersController.signUp)
router.post('/signin', UsersController.signIn)

// TODO
router.delete('/signout', (req, res) => {
  // log out
})

router.get('/:id', UsersController.getUserByID, UsersController.getOneUser)
router.patch('/:id', UsersController.getUserByID, UsersController.updateUser)



  //TODO protected to ADMIN:
router.get('/', UsersController.getAllUsers)
router.patch('/:id/make-admin', UsersController.getUserByID, UsersController.makeAdmin)
router.patch('/:id/make-admin', UsersController.getUserByID, UsersController.removeAdmin)
router.delete('/:id', UsersController.getUserByID, UsersController.deleteUser)

module.exports = router
