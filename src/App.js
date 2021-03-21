import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import GuestRoute from './routes/GuestRoute'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import theme from '../src/theme'
import store from './store'

import './mock'

const App = () => {

    return (
        <Provider store={ store }>
            <ThemeProvider theme={ theme }>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <GuestRoute path='/sign_in' element={ <SignIn /> } />
                        <Route path='*' element={ <h1>NOT FOUND</h1> } />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}

export default App
