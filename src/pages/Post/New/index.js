import { makeStyles } from '@material-ui/core/styles'
import Box from "@material-ui/core/Box"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import PostEditor from './Editor'
import PostPreview from './Preview'
import { PostProvider } from '../../../context/PostContext'

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center',
    },
    image: {
        height: 100,
    },
    imagePreview: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(2),
    },
    textarea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15,
    },
    avatar: {
        marginRight: theme.spacing(1)
    }
}))

const NewPost = () => {
    const classes = useStyles()

    return (
        <PostProvider>
            <Box
                display='flex'
                height='calc(100% - 70px)'
                overflow='scroll'
            >
                <Box
                    width='50%'
                    height='100%'
                    padding={ 2 }
                    borderRight='1px solid #ddd'
                >
                    <PostEditor />
                </Box>
                <Box
                    width='50%'
                    height='100%'
                    padding={ 2 }
                >
                    <PostPreview />
                </Box>
            </Box>
            <AppBar position='fixed' color='inherit' className={ classes.appBar }>
                <Toolbar>
                    <Button className={ classes.button }>
                        Salvar rascunho
                    </Button>
                    <Button color='secondary' variant='outlined'>
                        Publicar
                    </Button>
                </Toolbar>
            </AppBar>
        </PostProvider>
    )
}

export default NewPost