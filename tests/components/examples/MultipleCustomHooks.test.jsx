import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../src/components/examples/MultipleCustomHooks"
import { useFecth } from "../../../src/hooks/useFecth"
import { useCounter } from "../../../src/hooks/useCounter"

jest.mock('../../../src/hooks/useFecth')
jest.mock('../../../src/hooks/useCounter')

describe('MultipleCustomHooks', () => {

    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })
    
    test('should render', () => {

        useFecth.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false
        })

        render(<MultipleCustomHooks />)

        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Pokémon information'))

        screen.debug()
    })

    test('should render Pokémon information', () => {

        useFecth.mockReturnValue({
            data: {
                name: 'Bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/back/1.png'
                },
            },
            isLoading: false,
            hasError: false
        })

        render(<MultipleCustomHooks />)
        screen.debug()
    })

    test('should call the increment function', () => {

        useFecth.mockReturnValue({
            data: {
                name: 'Bulbasaur',
                sprites: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
                    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/back/1.png'
                },
            },
            isLoading: false,
            hasError: false
        })

        render(<MultipleCustomHooks />)
        const button = screen.getByText('Next Pokémon')
        fireEvent.click(button)

        expect(mockIncrement).toHaveBeenCalled()
    })
})