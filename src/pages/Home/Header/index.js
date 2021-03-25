import { makeStyles } from '@material-ui/core/styles'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import Account from './Account'
import Notifications from './Notifications'
import WritePost from './WritePost'

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
})

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar position='fixed' color='inherit' className={ classes.appBar }>
            <Toolbar>
                <img className={ classes.img } src='/images/logo.png' alt='logo' />
                <div className={ classes.grow } />
                <div className={ classes.userSection }>
                    <WritePost />
                </div>
                <Box ml={2}>
                    <Notifications />
                </Box>
                <Box ml={2}>
                    <Account />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
