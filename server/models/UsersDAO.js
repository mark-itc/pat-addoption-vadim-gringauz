const { users } = require('../utils/mockDB')

module.exports = class UsersDAO {
    static async signIn () {
        
    }
    
    static async signOut () {

    }

    static async createUser (newUserObject) {
        // TODO: add user to DB... password...
        // 
        return '1234567xyz'
    }

    static getUserByEmail (email) {
        //TODO get the user from DB
        return users[0]
    }
}