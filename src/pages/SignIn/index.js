import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import LockOutlined from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { useNavigate } from 'react-router-dom'
import { FormHelperText } from "@material-ui/core"
import { useDispatch } from 'react-redux'

import { signIn } from '../../actions/accountAction'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    avatar: {
        background: theme.palette.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(1),
    },
    form: {
        margin: theme.spacing(2, 4)
    }
}))

const Copyright = () => {
    return (
        <Typography variant='body2' align='center'>
            { 'Copyright © ' }
            <a color='inherit' href='https://www.youtube.com/watch?v=LGf2KJg20lg'>Lucas Nhimi</a>
            { ' ' }
            { new Date().getFullYear() }
        </Typography>
    )

}

const SignIn = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState()
    const dispatch = useDispatch()

    // function handleSignIn () {
    //     axios
    //         .post('/api/home/login')
    //         .then(response => {
    //             console.log(response)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    //     navigate('/sign_in')
    // }

    async function handleSignIn() {
        try {
            await dispatch(signIn(email, password))

            navigate('/')
        } catch (error) {
            setErrorMessage(error.response.data.message)
        }
    }

    return (
        <Grid
            container
            className={ classes.root }>
            <Grid
                item
                container
                direction='column'
                justify='center'
                alignItems='center'
                md={ 7 }
                className={ classes.image }
            >
                <Typography style={ { color: '#fff', fontSize: 30, lineHeight: '45px' } }>
                    <strong>
                        Simplificando a forma de conectar desenvolvedores de software!
                    </strong>
                </Typography>
                <Typography
                    variant="body2"
                    style={ {
                        color: 'rgb(255,255,255, 0.7)',
                        marginTop: 30,
                        fontSize: 15,
                        lineHeight: '30px',
                    } }
                >
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de
                    software.
                </Typography>
            </Grid>
            <Grid item md={ 5 }>
                <Box
                    mt={ 8 }
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    m={ 8 }
                >
                    <Avatar className={ classes.avatar }>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant='h5'>Acesso</Typography>
                    <form className={ classes.form }>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='E-mail'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            value={ email }
                            onChange={ (event) => setEmail(event.target.value) }
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='password'
                            label='Senha'
                            name='password'
                            type='password'
                            autoComplete='current-password'
                            value={ password }
                            onChange={ (event) => setPassword(event.target.value) }
                        />
                        <Button
                            className={ classes.button }
                            fullWidth
                            variant='contained'
                            color='primary'
                            onClick={ handleSignIn }
                        >
                            Entrar
                        </Button>
                        {
                            errorMessage && <FormHelperText error>
                                { errorMessage }
                            </FormHelperText>
                        }
                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem conta? Registre-se</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn