import { makeStyles } from '@material-ui/core/styles'
import Box from "@material-ui/core/Box"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useState } from 'react'

import PostEditor from './Editor'
import PostPreview from './Preview'

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
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [markdownText, setMarkdownText] = useState('')

    const handleTitle = (event) => {
        setTitle(event.currentTarget.value)
    }

    const handleTags = (event, values) => {
        setTags(values)
    }

    const handleMarkdown = (event) => {
        setMarkdownText(event.currentTarget.value)
    }

    return (
        <>
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
                    <PostEditor
                        image={ image }
                        setImage={ setImage }
                        title={ title }
                        setTitle={ handleTitle }
                        tags={ tags }
                        setTags={ handleTags }
                        markdownText={ markdownText }
                        setMarkdownText={ handleMarkdown }
                    />
                </Box>
                <Box
                    width='50%'
                    height='100%'
                    padding={ 2 }
                >
                    <PostPreview
                        image={ image }
                        title={ title }
                        tags={ tags }
                        markdownText={ markdownText }
                    />
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
        </>
    )
}

export default NewPost