const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false, default: null },
  lastName: { type: String, required: false, default: null },
  avatar: { type: String, required: false, default: null },
  phone: { type: String, required: false, default: null },
  createdAt: { type: Date, required: true, default: Date.now },
  permission: { type: String, default: 'user' },
  petsWishList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }],
  settings: {
    darkMode: { type: Boolean, required: true, default: false }
  }
})

const User = mongoose.model('User', userSchema)

module.exports = class UsersDAO {
  //
  static async createUser (newUserObject) {
    const user = new User(newUserObject)
    await user.save()
    // TODO: add user to DB... password...
    //
    return user._id
  }

  static async getAll () {
    return await User.find()
  }

  static async getUserByEmail (email) {
    return await User.findOne({ email })
  }

  static async getUserByID (id) {
    try {
      const user = await User.findById(id)
      return user
    } catch (err) {
      return
    }
  }

  static async deleteUser (id) {
    const result = await User.deleteOne({ _id: id })
    return result
  }

  static async updateUser (id, updateFields) {

    const result = await User.updateOne({ _id: id }, { $set: updateFields })
    return result
  }
  
  static async addPetToWishList (userID, petID) {

    const result = await User.updateOne({ _id: userID }, { $addToSet: { petsWishList: petID } })
    return result
  }
  
  static async removePetFromWishList (userID, petID) {

    const result = await User.updateOne({ _id: userID }, { $pull: { petsWishList: petID } })
    console.log(User)
    console.log(result)
    return result
  }
}
