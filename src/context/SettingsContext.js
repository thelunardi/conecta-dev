import _ from 'lodash'
import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import { setSettings } from '../utils/settings'

export const SettingsContext = createContext()

const defaultSettings = {
    darkMode: false,
}

export function SettingsProvider({ settings, children }) {
    const [currentSettings, setCurrentSettings] = useState(settings || defaultSettings)

    const handleSave = (newSettings) => {
        const mergedSettings = _.merge({}, currentSettings, newSettings)
        setCurrentSettings(mergedSettings)
        setSettings(mergedSettings)
    }

    return (
        <SettingsContext.Provider
            value={ {
                settings: currentSettings,
                saveSettings: handleSave,
            } }
        >
            { children }
        </SettingsContext.Provider>
    )
}

SettingsProvider.propTypes = {
    children: PropTypes.any.isRequired,
    settings: PropTypes.object.isRequired,
}

export function useSettings () {
    return useContext(SettingsContext)
}