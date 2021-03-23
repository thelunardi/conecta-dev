import { useRef, useState, useEffect } from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import IconButton from '@material-ui/core/IconButton'
import { useSelector, useDispatch } from 'react-redux'
import Popover from '@material-ui/core/Popover'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon
} from 'react-feather'
import { makeStyles } from '@material-ui/core/styles'
import { getNotifications } from '../../../actions/notificationsAction'

const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon,
}

const useStyles = makeStyles((theme) => ({
    icon: {
        background: theme.palette.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    }
}))

const Notifications = () => {
    const account = useSelector(state => state.account)
    const notifications = useSelector(state => state.notifications.notifications)
    const isAuthenticated = !!account.user
    const ref = useRef(null)
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch()
    const classes = useStyles()

    console.log(classes.icon)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(getNotifications())
    }, [dispatch])

    return (
        isAuthenticated && (
            <div>
                <IconButton ref={ ref } onClick={ handleOpen }>
                    <SvgIcon>
                        <BellIcon />
                    </SvgIcon>
                </IconButton>
                <Popover
                    onClose={ handleClose }
                    open={ isOpen }
                    anchorEl={ ref.current }
                    anchorOrigin={ {
                        vertical: 'bottom',
                        horizontal: 'center',
                    } }
                    transformOrigin={ {
                        vertical: 'top',
                        horizontal: 'right',
                    } }
                >
                    <Box p={ 2 }>
                        <Typography variant='h6' color='textPrimary'>
                            Notificações
                        </Typography>
                    </Box>
                    <List>
                        {
                            notifications.map(notification => {
                                const Icon = iconsMap[notification.type]

                                return (
                                    <ListItem key={ notification.id }>
                                        <ListItemAvatar>
                                            <Avatar className={ classes.icon }>
                                                <SvgIcon>
                                                    <Icon />
                                                </SvgIcon>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={ notification.title }
                                            primaryTypographyProps={ {
                                                variant: 'subtitle2',
                                                color: 'textPrimary',
                                            } }
                                            secondary={ notification.description } />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Popover>
            </div>
        )
    )
}

export default Notifications