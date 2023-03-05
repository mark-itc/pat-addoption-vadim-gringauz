const express = require('express')
const router = express.Router()

const PetsController = require('../controllers/PetsController')

const authMiddleware = require('../middlewares/authMiddleware')

router.post('/new', PetsController.createPet)
router.get('/:id', PetsController.getPetByID, PetsController.getOnePet)
router.get('/', PetsController.getPets)
router.post('/:id/adopt', authMiddleware, PetsController.getPetByID, PetsController.adopt)
router.delete('/:id/adopt', authMiddleware, PetsController.getPetByID, PetsController.clearStatus)



router.put('/:id', (req, res) => {
  // update a specific pet
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
