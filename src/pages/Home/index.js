import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'

import { makeStyles } from '@material-ui/styles'
import { Box, Container } from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: '100vh',
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div className={ classes.root }>
            <Header/>
            <div className={ classes.toolbar } />
            <main className={ classes.main }>
                <Container maxWidth='lg'>
                    <Box display='flex'>
                        <Navbar/>
                        <Feed/>
                    </Box>
                </Container>
            </main>
        </div>
    )
}

export default Home