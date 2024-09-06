import { useFecth } from "../../hooks/useFecth"
import { useCounter } from "../../hooks/useCounter"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement } = useCounter(1)
    const { data, isLoading, hasError } = useFecth(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <>
            <h1>Pokémon information</h1>
            <hr />

            { isLoading ? <LoadingMessage /> : 
                <PokemonCard id={counter} name={data.name} 
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny 
                    ]}
                /> 
            }

            <button className="btn btn-primary mt-2" onClick={ () => counter > 1 ? decrement() : null}>
                Previous Pokémon
            </button>
            
            <button className="btn btn-primary mt-2" onClick={ () => increment() }>
                Next Pokémon
            </button>
        </>
    ) 
}
