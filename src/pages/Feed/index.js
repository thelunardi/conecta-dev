import { Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import PostCard from '../../components/PostCard'
import Navbar from './NavBar'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Lelezin',
            username: 'lelezin',
            avatar: '/images/avatars/avatar.jpeg'
        },
        title: 'Já é',
        date: 'April 1, 2021',
        description: 'Nós que reina!',
        hashtags: '#nois #que #reina',
        image: '/images/posts/post8.png',
    },
]

const Feed = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='lg'>
            <Box display='flex'>
                <Navbar />
                <div className={ classes.root }>
                    {
                        posts.map(post => (
                            <PostCard key={ post.id } post={ post } />
                        ))
                    }
                </div>
            </Box>
        </Container>
    )
}

export default Feed
