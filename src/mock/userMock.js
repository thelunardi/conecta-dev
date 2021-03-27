import mock from '../utils/mock'

mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'username': 'thelunardi',
        'name': 'Alexandre Lunardi',
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

mock.onGet('/api/home/user/thelunardi').reply(200, {
    id: 1,
    name: 'Alexandre Lunardi',
    username: 'thelunardi',
    email: 'lele@lele.com',
    accessToken: 'teste',
    avatar: '/images/avatars/avatar.jpeg',
    joinedIn: '06 de janeiro, 2020',
    work: 'Desenvolvedor',
    totalPost: '2',
});