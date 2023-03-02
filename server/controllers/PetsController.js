module.exports = class PetsController {
  static async adopt (req, res) {
    //! protected to logged in users!!!
    // Mark the pet as reserved for adoption/fostering to the current users pets
    // This API also should change the pet’s adoption status
    
    const { id } = req.params
    const { currentUser } = req
    return res.send(`adopt pet(id):${id} by ${currentUser.email}`)
  }

  static async addNew (req, res) {}

  static async editPet (req, res) {}

  static async getPets (req, res) {}
}
