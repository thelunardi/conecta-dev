import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import SvgIcon from '@material-ui/core/SvgIcon'
import Avatar from '@material-ui/core/Avatar'
import { Bell } from 'react-feather'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    }
})

const Header = () => {
    const classes = useStyles()
    const user = useSelector(state => state.user)

    return (
        <AppBar position='fixed' color='inherit' className={ classes.appBar }>
            <Toolbar>
                <img className={ classes.img } src='/images/logo.png' alt='logo'/>
                <div className={ classes.grow }/>
                <div className={ classes.userSection }>
                    <Button className={ classes.button } color='primary' variant='contained'>Novo Post</Button>
                    <SvgIcon className={ classes.bell }>
                        <Bell/>
                    </SvgIcon>
                    <Avatar alt={ user?.username } src={ user?.avatar } />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
