import mock from '../utils/mock'

mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'username': 'thelunardi',
        'email': 'lele@lele.com',
        'avatar': '/images/avatars/avatar.jpeg',
    }
})

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)

    if (email !== 'lele@lele.com' || password !== '1234') {
        return [400, { message: 'Seu email ou senha estão incorretos' }]
    }
    const user = {
        id: 1,
        username: 'thelunardi',
        email: 'lele@lele.com',
        avatar: '/images/avatars/avatar.jpeg'
    }
    return [200, { user }]
})