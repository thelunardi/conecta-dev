import mock from '../utils/mock'

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'thelunardi',
//     'email': 'lele@lele.com',
// })

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)

    if (email !== 'lele@lele.com' || password !== '1234') {
        return [400, { message: 'Seu email ou senha estão incorretos' }]
    }
    const user = {
        id: 1,
        username: 'thelunardi',
        email: 'lele@lele.com'
    }
    return [200, { user }]
})