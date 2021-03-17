import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import theme from '../src/theme'

const App = () => {

    return (
            <ThemeProvider theme={ theme }>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/sign_in' element={<SignIn />} />
                        <Route path='*' element={<h1>NOT FOUND</h1>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>

    )
}

export default App
