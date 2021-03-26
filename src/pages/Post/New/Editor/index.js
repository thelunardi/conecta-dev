import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'

const useStyles = makeStyles(theme => ({
    image: {
        height: 100,
    },
    textarea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15,
    },
}))

const tagsList = [
    { title: 'reactjs' },
    { title: 'nodejs' },
    { title: 'php' },
]

const PostEditor = ({ image, setImage, title, setTitle, tags, setTags, markdownText, setMarkdownText }) => {
    const classes = useStyles()

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            const base64data = reader.result
            setImage(base64data)
        }
    }, [setImage])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*'
    })

    return (
        <>
            <Box { ...getRootProps() } mb={ 8 }>
                <input { ...getInputProps() } />
                <Button>Carregar Imagem</Button>
            </Box>
            { image && (
                <Box mb={ 2 }>
                    <img className={ classes.image } src={ image } alt='background' />
                </Box>
            )
            }
            <Box mb={ 2 }>
                <TextField id='title' placeholder='Título' fullWidth value={ title } onChange={ setTitle } />
            </Box>
            <Box mb={ 2 }>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={ tagsList }
                    getOptionLabel={ (option) => option.title }
                    value={ tags }
                    onChange={ setTags }
                    renderInput={ (params) => (
                        <TextField
                            { ...params }
                            variant="standard"
                            placeholder='Tags'
                        />
                    ) }
                />
            </Box>
            <textarea value={ markdownText } onChange={ setMarkdownText } className={ classes.textarea } />
        </>
    )
}

export default PostEditor