const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['dog', 'cat'] },
  breed: { type: String, required: false, default: null },
  status: {
    type: String,
    required: true,
    enum: ['adoption', 'foster', 'available'],
    default: 'available'
  },
  size: { type: String, required: true, enum: ['xs', 's', 'm', 'l', 'xl'] },
  color: { type: String, required: false, default: null },
  bio: { type: String, required: false, default: 'No bio available' },
  hypoallergenic: { type: Boolean, required: false, default: false },
  dietaryRestrictions: { type: String, required: false, default: null },
  image: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
  deleted: { type: Boolean, default: false }
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = class PetsDAO {
  //
  static async createPet (newPetObject) {
    const pet = new Pet(newPetObject)
    await pet.save()
    return pet._id
  }

  static async getPetsByCriteria (criterions) {
    return await Pet.find(criterions)
  }

  static async getAll () {
    return await Pet.find()
  }

  static async getPetByID (id) {
    try {
      const pet = await Pet.findById(id)
      return pet
    } catch (err) {
      return
    }
  }
  
  static async getPetsByIDs (petIds) {
    try {
      const pets = await Pet.find({ _id: { $in: petIds } })
      return pets
    } catch (err) {
      return
    }
  }

  static async updatePet (id, updateFields) {
    const result = await Pet.updateOne({ _id: id }, { $set: updateFields })
    return result
  }

  static async deletePet (id) {
    const result = await Pet.deleteOne({ _id: id })
    return result
  }
}
