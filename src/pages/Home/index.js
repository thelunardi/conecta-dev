import { Routes, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Header from './Header'
import NewPost from '../Post/New/index'
import Feed from '../Feed'
import Post from '../Post'
import Profile from '../Profile'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: 'calc(100vh - 64px)',
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
            <Header />
            <div className={ classes.toolbar } />
            <main className={ classes.main }>
                <Routes>
                    <Route path='/' element={ <Feed /> } />
                    <Route path='/:username' element={ <Profile /> } />
                    <Route path='/feed' element={ <Feed /> } />
                    <Route path='/post/new' element={ <NewPost /> } />
                    <Route path='/post/:slug' element={ <Post /> } />
                    <Route path='*' element={ <h1>NOT FOUND</h1> } />
                </Routes>
            </main>
        </div>
    )
}

export default Home