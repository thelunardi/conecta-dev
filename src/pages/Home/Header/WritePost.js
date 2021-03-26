import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const WritePost = () => {
    const navigate = useNavigate()
    const account = useSelector(state => state.account)
    const isAuthenticated = !!account.user
    const handleClick = () => {
        if (isAuthenticated) {
            navigate('/post/new')
            return
        }
        navigate('/sign-in')
    }
    return (
        <Button color='primary' variant='contained' onClick={handleClick}>Novo Post</Button>
    )
}

export default WritePost