import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { setUserData } from '../../actions/accountAction'
import authService from '../../services/authService'

const Auth = ({ children }) => {
    const dispatch = useDispatch()
    const initAuth = useCallback(async() => {
        if (authService.isAuthenticated()) {
            await dispatch(setUserData())
        }
    }, [dispatch])

    useEffect(() => {
        initAuth()
    }, [initAuth])
    return children
}

export default Auth