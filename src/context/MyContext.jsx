import { createContext, useEffect, useState } from 'react'
export const MyContext = createContext()
const MyContextProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [pokemonsLoaded, setPokemonsLoaded] = useState(false)
  const [pokemonLoaded, setPokemonLoaded] = useState(false)

  const getPokemonNames = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/generation/1')
    const { pokemon_species } = await response.json()
    const nombres = pokemon_species.map((element) => element.name)
    setPokemones(nombres)
    setPokemonsLoaded(true)
  }

  useEffect(() => {
    getPokemonNames()
  }, [])

  return (
    <MyContext.Provider value={{ pokemones, setPokemones, pokemon, setPokemon, pokemonsLoaded, setPokemonsLoaded, pokemonLoaded, setPokemonLoaded }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
