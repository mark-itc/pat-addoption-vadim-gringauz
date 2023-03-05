const PetsDAO = require('../models/PetsDAO')
const logger = require('../utils/logger')
const { newPetValidation, updatePetValidation } = require('../validations/petsValidations')

module.exports = class PetsController {
  //
  static async createPet (req, res) {
    try {
      const validRequest = newPetValidation(req.body)
      if (!validRequest)
        return res.status(400).json({
          success: false,
          message: 'Please fill all fields'
        })

      const newPetObject = {
        name: req.body.name,
        type: req.body.type,
        breed: req.body.breed ?? null,
        status: req.body.status ?? 'available',
        size: req.body.size,
        color: req.body.color ?? null,
        bio: req.body.bio ?? null,
        hypoallergenic: req.body.hypoallergenic ?? null,
        dietaryRestrictions: req.body.dietaryRestrictions ?? null,
        deleted: false
      }
      console.log(newPetObject)
      const newPetID = await PetsDAO.createPet(newPetObject)
      return res.status(201).json({
        succes: true,
        message: '✅ New pet created successfully',
        newUserID: newPetID
      })
    } catch (err) {
      logger('PetsController.createPet', err.message)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
  }

  static async getPetByID (req, res, next) {

    let result
    try {
      result = await PetsDAO.getPetByID(req.params.id)
      if (!result) {
        logger('PetsController.getPetByID', 'pet not found')
        return res.status(404).json({
          success: false,
          message: '❌ Can not find pet'
        })
      }
    } catch (err) {
      logger('PetsController.getUserByID', err.message)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
    req.pet = result
    next()
  }

  static async getPetsByIDs (req, res) {
    const { petsIDs } = req
    
    let result
    try {
      result = await PetsDAO.getPetByID(req.params.id)
      if (!result) {
        logger('PetsController.getPetByID', 'pet not found')
        return res.status(404).json({
          success: false,
          message: '❌ Can not find pet'
        })
      }
    } catch (err) {
      logger('PetsController.getUserByID', err.message)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
    req.pet = result
    next()
  }

  static getOnePet (req, res) {
    return res.status(200).json({ pet: req.pet })
  }

  static async getPets (req, res) {
    try {
      const result = await PetsDAO.getPetsByCriteria(req.query)
      return res.status(200).json({ pets: result })
    } catch (err) {
      logger('PetsController.getPets', err.message)
      return res.status(500).json({
        success: false,
        message: '❌ Unknown error'
      })
    }
  }

  static async adopt (req, res) {
    //TODO This API also should change the pet’s adoption status

    const { currentUser, pet } = req

    try {
      const result = await PetsDAO.updatePet(pet._id, { status: 'adoption' })
      return res.status(200).json({
        succes: true,
        updatedPet: pet._id,
        updatedFields: {
          status: 'adoption'
        }
      })
    } catch (err) {
      logger('PetsController.adopt', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

  static async foster (req, res) {
    //TODO This API also should change the pet’s adoption status

    const { currentUser, pet } = req

    try {
      const result = await PetsDAO.updatePet(pet._id, { status: 'foster' })
      return res.status(200).json({
        succes: true,
        updatedPet: pet._id,
        updatedFields: {
          status: 'foster'
        }
      })
    } catch (err) {
      logger('PetsController.foster', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

  static async clearStatus (req, res) {
    //TODO This API also should change the pet’s adoption status

    const { currentUser, pet } = req

    try {
      const result = await PetsDAO.updatePet(pet._id, { status: 'available' })
      return res.status(200).json({
        succes: true,
        updatedPet: pet._id,
        updatedFields: {
          status: 'available'
        }
      })
    } catch (err) {
      logger('PetsController.adopt', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

  static async updatePet (req, res) {
    try {
      const validRequest = updatePetValidation(req.body)
      if (!validRequest)
        return res.status(400).json({
          success: false,
          message: '❌ Fields or values not valid'
        })

      const result = await PetsDAO.updatePet(req.pet._id, req.body)
      return res.status(200).json({
        succes: true,
        updatedFileds: req.body
      })
    } catch (err) {
      logger('PetsController.updatePet', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

  static async markAsDeleted (req, res) {
    const { currentUser, pet } = req
    try {
      const result = await PetsDAO.updatePet(pet._id, { deleted: true })
      return res.status(200).json({
        succes: true,
        updatedPet: pet._id,
        updatedFields: {
          deleted: true
        }
      })
    } catch (err) {
      logger('PetsController.markAsDelete', err.message)
      return res.status(500).json({
        success: false,
        message: `❌ ${err.message}`
      })
    }
  }

}
