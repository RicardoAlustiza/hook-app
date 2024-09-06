import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainAppComponent } from '../../../src/components/useContext/MainAppComponent'

describe('MainAppComponent', () => {

    test('should show the HomePage', () => {

        render(
            <MemoryRouter>
                <MainAppComponent />
            </MemoryRouter>
        )

        expect(screen.getByText('Home Page')).toBeTruthy()
    })

    test('should show the AboutPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainAppComponent />
            </MemoryRouter>
        )

        expect(screen.getByText('About Page')).toBeTruthy()
    })

    test('should show the LogInPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainAppComponent />
            </MemoryRouter>
        )

        expect(screen.getByText('Log In')).toBeTruthy()
    })
})