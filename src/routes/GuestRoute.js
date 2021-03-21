import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from '../pages/Home'

const GuestRoute = ({ element: Component, ...rest }) => {
    const account = useSelector(state => state.account)
    const isAuthenticated = Boolean(account?.user)
    return (
        <Route { ...rest } element={(
            isAuthenticated
            ? <Home />
            : Component
        )} />
    )
}

export default GuestRoute