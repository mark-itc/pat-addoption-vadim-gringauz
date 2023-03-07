import axios from 'axios'
// const serverURL = process.env.SERVER_URL
const serverURL = 'http://localhost:3010'

class AuthAPI {
    static async signUp(newUserData) {
        try {

            return
        } catch (error) {

        }
    }

    static async signIn(email, password) {
        try {
            console.log({serverURL})
            const response = await axios.post(serverURL + '/user/signin', { email, password });
            console.log(response)
            return response.data.signedUser
        } catch (error) {
            console.log('error:', error.message)
            return error
        }
    }


    static async signOut(email, password) {
        try {

            return
        } catch (error) {

        }
    }

}

export default AuthAPI