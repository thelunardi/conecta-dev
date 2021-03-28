import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Auth from './components/Auth'
import GuestRoute from './routes/GuestRoute'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import createTheme from './theme'
import { useSettings } from './context/SettingsContext'

import './mock'

const App = () => {
    const { settings } = useSettings()

    return (
        <ThemeProvider theme={ createTheme(settings) }>
            <BrowserRouter>
                <Auth>
                    <Routes>
                        <GuestRoute path='/sign-in' element={ <SignIn /> } />
                        <GuestRoute path='/sign-up' element={ <SignUp /> } />
                        <Route path='//*' element={ <Home /> } />
                    </Routes>
                </Auth>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
