const express = require('express')
const router = express.Router()

const PetsController = require('../controllers/PetsController')
const UsersController = require('../controllers/UsersController')

const authMiddleware = require('../middlewares/authMiddleware')

//! PUBLIC ROUTES:
router.post('/new', PetsController.createPet)
router.get('/:id', PetsController.getPetByID, PetsController.getOnePet)
router.get('/', PetsController.getPets)
router.get(
  '/user/:id',
  UsersController.getUserByID,
  UsersController.getPetsByUser,
  PetsController.getPets
)

//! PROTECTED TO SIGNED IN USERS:
router.post(
  '/:id/adopt',
  authMiddleware,
  PetsController.getPetByID,
  PetsController.adopt
)
router.post(
  '/:id/foster',
  authMiddleware,
  PetsController.getPetByID,
  PetsController.adopt
)
router.delete(
  '/:id/status',
  authMiddleware,
  PetsController.getPetByID,
  PetsController.clearStatus
)
router.post(
  '/:id/save',
  authMiddleware,
  PetsController.getPetByID,
  UsersController.addPetToWishList
)

router.delete(
  '/:id/save',
  authMiddleware,
  PetsController.getPetByID,
  UsersController.removePetFromWishList
)

//! PROTECTED TO ADMIN:
router.patch(
  '/:id',
  authMiddleware,
  UsersController.isAdmin,
  PetsController.getPetByID,
  PetsController.updatePet
)
router.delete(
  '/:id',
  authMiddleware,
  UsersController.isAdmin,
  PetsController.getPetByID,
  PetsController.markAsDeleted
)

module.exports = router
