import { render, screen } from '@testing-library/react';
import { LogInPageComponent } from '../../../src/components/useContext/LogInPageComponent';
import { UserContext } from '../../../src/components/useContext/context/UserContext';

const setUser = jest.fn()

beforeEach(() => {
    jest.clearAllMocks()
})

describe('LogInPageComponent', () => {

    test('should render the component without user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LogInPageComponent />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('should call the setUser function', () => {


        render(
            <UserContext.Provider value={{ user: null, setUser }}>
                <LogInPageComponent />
            </UserContext.Provider>
        )

        const button = screen.getByText('Establecer usuario')
        button.click()

        expect(setUser).toHaveBeenCalled()
        expect(setUser).toHaveBeenCalledWith({id: '123', name: 'Juan', email: 'juan@gmail.com'})
    })
})