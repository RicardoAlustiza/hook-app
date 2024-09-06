import { render, screen } from "@testing-library/react"
import { HomePageComponent } from "../../../src/components/useContext/HomePageComponent"
import { UserContext } from "../../../src/components/useContext/context/UserContext"

describe('HomePageComponent', () => {

    const user = {
        id: 1,
        name: 'John Doe',
        email: 'email@email.com'
    }

    test('should render the component witout user', () => {

        
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePageComponent />
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('should render the component with user', () => {
        
        render(
            <UserContext.Provider value={{ user }}>
                <HomePageComponent />
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(`${user.id}`)
    })
})