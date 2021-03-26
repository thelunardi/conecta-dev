import { TextField } from '@material-ui/core'

import { usePost } from '../../../../context/PostContext'

const Title = () => {
    const ctx = usePost()
    const { title, setTitle } = ctx

    return (
        <TextField id='title' placeholder='Título' fullWidth value={ title } onChange={ setTitle } />
    )
}

export default Title