const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/UsersController')

const authMiddleware = require('../middlewares/authMiddleware')

router.post('/signup', UsersController.signUp)
router.post('/signin', UsersController.signIn)
router.post('/signout', (req, res) => {
  // log out
})

router.get('/:id', (req, res) => {
  // return a specific user by id
})

router.put('/:id', (req, res) => {
  // update a specific user
})

router.get('/', (req, res) => {
  // return all users
  //! protected to ADMIN
})

router.delete('/:id', (req, res) => {
  // delete a specific user
})

module.exports = router
