import { getSettings } from './settings'

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
}

window.localStorage = localStorageMock

describe('Settings Utils', () => {
    it('get an empty localStorage', () => {
        expect(getSettings()).toBe(null)
    })

    it('get a value from localStorage', () => {
        const data = {
            teste: 'teste'
        }
        window.localStorage.setItem('settings', JSON.stringify(data))

        const dataOnLocalStorage = window.localStorage.getItem('settings')
        const settings = JSON.parse(dataOnLocalStorage)

        expect(getSettings()).toStrictEqual(settings)
    })
})