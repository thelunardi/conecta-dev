import axios from '../utils/axios'

class AuthService {
    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            axios
                .post('api/home/login', { email, password })
                .then(response => {
                    if (response.data.user) {
                        this.setToken('accessToken')
                        resolve(response.data.user)
                        return
                    }
                    reject(response.data.error)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios
                .post('api/home/me')
                .then(response => {
                    if (response.data.user) {
                        resolve(response.data.user)
                        return
                    }
                    reject(response.data.error)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    signOut = () => {
        this.removeToken()
    }

    setToken = (token) => {
        localStorage.setItem('accessToken', JSON.stringify(token))
    }

    getToken = () => localStorage.getItem('accessToken')

    removeToken = () => { localStorage.removeItem('accessToken')}

    isAuthenticated = () => !!this.getToken()
}

const authService = new AuthService()

export default authService