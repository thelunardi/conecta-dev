import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from '../pages/Home'

const GuestRoute = ({ element: Component, ...rest }) => {
    const account = useSelector(state => state.account)
    const isAuthenticated = !!account.user
    console.log('auth', isAuthenticated)

    return (
        <Route { ...rest } element={
            isAuthenticated
            ? <Home />
            : Component
        } />
    )
}

GuestRoute.propTypes = {
    element: PropTypes.any
}

export default GuestRoute