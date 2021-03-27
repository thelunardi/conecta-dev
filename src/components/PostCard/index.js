import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CardActionArea,
    Avatar,
    Typography,
    IconButton,
} from '@material-ui/core'
import {
    Favorite as FavoriteIcon,
    Message as MessageIcon,
    Bookmark as BookmarkIcon,
} from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    caption: {
        marginRight: theme.spacing(1),
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px',
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%',
    },
    content: {
        padding: 0,
    },
    favorite: {
        marginLeft: 'auto',
    }
}))

const PostCard = ({ post }) => {
    const classes = useStyles()
    const navigate = useNavigate()

    const handlePostClick = () => {
        navigate(`/post/${ post.slug }`)
    }

    return (
        <Card className={ classes.root }>
            <CardHeader
                avatar={ <Avatar src={ post.author?.avatar } /> }
                title={ <Typography variant='h6'>{ post.title }</Typography> }
                subheader={
                    <div className={ classes.subheader }>
                        <Typography variant='caption' className={ classes.caption }>Criado por </Typography>
                        <Typography variant='subtitle2' className={ classes.caption }>{ post.author?.name }</Typography>
                        <Typography variant='caption'
                                    className={ classes.caption }>{ moment(post.date).fromNow() }</Typography>
                    </div>

                }
            />
            <CardContent onClick={ handlePostClick } className={ classes.content }>
                <Typography variant='body1' className={ classes.message }>{ post.hashtags }</Typography>
                <CardActionArea>
                    <img className={ classes.image } src={ post.image } alt='img' />
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='comment'>
                    <FavoriteIcon />
                    <Typography color='textSecondary' variant='body2'>
                        { post.likes }
                    </Typography>
                </IconButton>
                <IconButton aria-label='comment'>
                    <MessageIcon />
                    <Typography className={ classes.reactions } color='textSecondary' variant='body2'>
                        { post.comments }
                    </Typography>
                </IconButton>
                <IconButton aria-label='favorite' className={ classes.favorite }>
                    <BookmarkIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

PostCard.defaultProps = {
    post: {}
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostCard