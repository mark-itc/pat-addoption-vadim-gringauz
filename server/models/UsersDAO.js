const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: false, default: null },
  lastName: { type: String, required: false, default: null },
  phone: { type: String, required: false, default: null },
  createdAt: { type: String, required: true, default: Date.now },
  permission: { type: String, default: 'user' },
  petsWishList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
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
    //
    return
  }

  static async updateUser (id, updateFields) {

    const result = await User.updateOne({ _id: id }, { $set: updateFields })
    return result
  }
}
