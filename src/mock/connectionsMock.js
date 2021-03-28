import mock from '../utils/mock'

mock.onGet('/api/connections/followers/thelunardi').reply(200, {
    followers: [
        {
            id: 1,
            user: {
                id: 1,
                name: 'Fernanda Souza',
                username: 'fersouza10',
                avatar: '/images/avatars/avatar.png',
            },
            following: false,
        },
        {
            id: 2,
            user: {
                id: 2,
                name: 'Lucas Fernando',
                username: 'lucfernando',
                avatar: '/images/avatars/avatar.png',
            },
            following: true,
        },
    ],
})

mock.onGet('/api/connections/following/thelunardi').reply(200, {
    following: [
        {
            id: 1,
            user: {
                id: 1,
                name: 'Fernanda Souza',
                username: 'fersouza10',
                avatar: '/images/avatars/avatar.png',
            },
        },
        {
            id: 2,
            user: {
                id: 2,
                name: 'Lucas Fernando',
                username: 'lucfernando',
                avatar: '/images/avatars/avatar.png',
            },
        },
    ],
})