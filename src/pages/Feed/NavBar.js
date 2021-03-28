import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 330,
        marginRight: theme.spacing(2),
        height: '100%',
    },
    button: {
        width: '100%',
    },
}))

const tags = [
    { id: 1, name: 'php' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'react' },
    { id: 4, name: 'vuejs' },
    { id: 5, name: 'java' },
]

const Navbar = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const account = useSelector(state => state.account)
    const isAuthenticated = !!account.user

    const handleSignUp = () => {
        navigate('/sign-up')
    }

    return (
        <Paper className={ classes.root }>
            {
                !isAuthenticated &&
                <Button onClick={ handleSignUp } variant='outlined' color='secondary' className={ classes.button }>Registrar Grátis</Button>
            }

            <ListSubheader>{ `Tags em alta` }</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={ `item-${ item.id }-${ item.name }` }>
                        <ListItemText primary={ `#${ item.name }` } />
                    </ListItem>
                ))
            }
            <ListItem button>Exibir mais Tags</ListItem>
        </Paper>
    )
}

export default Navbar
