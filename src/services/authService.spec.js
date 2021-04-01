import authService  from './authService'
import axios from '../utils/axios'

jest.mock('../utils/axios')

describe('Auth Service', () => {
    it('sign in with a user with success', async () => {
        const response = {
            data: {
                user: {
                    'id': 1,
                    'username': 'thelunardi',
                    'name': 'Alexandre Lunardi',
                    'email': 'lele@lele.com',
                    'avatar': '/images/avatars/avatar.jpeg',
                }
            },
        }
        axios.post.mockResolvedValue(response)
        const data = await authService.signIn('lele@lele.com', '1234')

        expect(data.username).toString('thelunardi')
        expect(data.email).toString('lele@lele.com')
    })

    it('try to sign in with an correctly user getting an error', async () => {
        const response = {
            data: {
                user: false
            },
        }
        axios.post.mockRejectedValue(response)

        await expect(authService.signIn('lele@lele.com', '1234')).rejects.toEqual({
            data: {
                user: false
            }
        })
    })

    it('try to sign in with an incorrectly user getting an error', async () => {
        const response = {
            data: {
                error: 'Não foi possível efetuar o login'
            },
        }
        axios.post.mockRejectedValue(response)

        await expect(authService.signIn('lel@lele.com', '123')).rejects.toEqual({
            data: {
                error: 'Não foi possível efetuar o login'
            }
        })
    })

    // it('get a value from localStorage', () => {
    //     const data = {
    //         teste: 'teste'
    //     }
    //     window.localStorage.setItem('settings', JSON.stringify(data))
    //
    //     const dataOnLocalStorage = window.localStorage.getItem('settings')
    //     const settings = JSON.parse(dataOnLocalStorage)
    //
    //     expect(getSettings()).toStrictEqual(settings)
    // })
})