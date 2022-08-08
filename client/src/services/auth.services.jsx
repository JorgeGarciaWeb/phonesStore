import axios from 'axios'

class AuthServices {

    constructor () {

        this.api = axios.create({
            baseURL :  `${process.env.REACT_APP_API_URL}/auth`
        })
    }
        signup(userData) {
            return this.api.post('/signup', userData)
        }
    
}

const authServices =  new AuthServices()

export default AuthServices