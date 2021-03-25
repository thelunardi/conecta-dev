import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useState, useRef } from 'react'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

// para usar qualquer action, tem que import o dispatch
import { signOut } from '../../../actions/accountAction'

const Account = () => {
    const account = useSelector(state => state.account)
    const [isOpen, setOpen] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isAuthenticated = !!account.user

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSignOut = () => {
        handleClose()

        //logout no app atraves do redux
        dispatch(signOut())
        navigate('/')
    }

    return (
        <>
            <Avatar
                ref={ ref }
                onClick={ handleOpen }
                alt={ account?.user?.username }
                src={ account?.user?.avatar }
            />
            {
                isAuthenticated
                    ?
                    <Menu
                        anchorEl={ ref.current }
                        anchorOrigin={ {
                            vertical: 'bottom',
                            horizontal: 'center',
                        } }
                        open={ isOpen }
                        onClose={ handleClose }
                        getContentAnchorEl={ null }
                    >
                        <MenuItem>Perfil</MenuItem>
                        <MenuItem>Meus Favoritos</MenuItem>
                        <MenuItem>Meus Posts</MenuItem>
                        <MenuItem>Minhas Conexões</MenuItem>
                        <MenuItem onClick={ handleSignOut }>Sair</MenuItem>
                    </Menu>
                    :
                    <Menu
                        anchorEl={ ref.current }
                        anchorOrigin={ {
                            vertical: 'bottom',
                            horizontal: 'center',
                        } }
                        open={ isOpen }
                        onClose={ handleClose }
                        getContentAnchorEl={ null }
                    >
                        <MenuItem>Registrar Grátis</MenuItem>
                        <MenuItem>Entrar</MenuItem>
                    </Menu>
            }
        </>
    )
}

export default Account