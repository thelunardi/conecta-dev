import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../components/PostCard'

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
            avatar: '/images/avatars/avatar_1.jpeg'
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
        <div className={ classes.root }>
            {
                posts.map(post => (
                    <PostCard key={ post.id } post={ post } />
                ))
            }
        </div>
    )
}

export default Feed
