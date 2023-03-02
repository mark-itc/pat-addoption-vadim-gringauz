const express = require('express')
const router = express.Router()

const PetsController = require('../controllers/PetsController')

const authMiddleware = require('../middlewares/authMiddleware')

router.post('/', (req, res) => {
  // create a new pet
})

router.get('/:id', (req, res) => {
  // return a specific pet, by id
})

router.put('/:id', (req, res) => {
  // update a specific pet
})

router.get('/', (req, res) => {
  // (search) retrieving pets that match the criteria given.
})

// router.post('/:id/adopt', PetsController.adopt)
router.post('/:id/adopt', authMiddleware, PetsController.adopt)

router.post('/:id/return', (req, res) => {
  //! protected to logged in users!!!
  // Unmark
})

router.post('/:id/save', (req, res) => {
  //! protected to logged in users!!!
  // Save pet to wishlist
})

router.delete('/:id/save', (req, res) => {
  //! protected to logged in users!!!
  // Remove pet from wishlist
})

router.delete('/:id', (req, res) => {
  //! protected to admin!!!
  // delete a specific pet
})

module.exports = router
