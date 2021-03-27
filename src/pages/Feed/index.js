import { Box, Container } from '@material-ui/core'
import { useCallback, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import axios from '../../utils/axios'
import PostCard from '../../components/PostCard'
import Navbar from './NavBar'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))

const Feed = () => {
    const classes = useStyles()
    const [posts, setPosts] = useState([])

    const getPosts = useCallback(async () => {
        const feed = await axios.get('api/feed')
        setPosts(feed.data.posts)
    }, [setPosts])

    useEffect(() => {
        getPosts()
    }, [getPosts])

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
