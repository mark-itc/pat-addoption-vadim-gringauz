
class Authenticator {
    constructor() {

    }

    signIn ({ email, password }) {
        console.log('action: sign in,', {email}, {password})
    }

    signOut () {
        console.log('action: sign out')
    }
}
const authenticator = new Authenticator
export default authenticator