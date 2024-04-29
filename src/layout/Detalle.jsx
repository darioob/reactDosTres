import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Detalle = () => {
  const { name } = useParams()
  const { pokemon, setPokemon, pokemonLoaded, setPokemonLoaded } = useContext(MyContext)

  const getPokemonData = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    setPokemon(data)
    setPokemonLoaded(true)
  }

  useEffect(() => {
    getPokemonData()
  }, [])

  const showData = () => {
    return (
      <>
        <h3 className='text-center'>{pokemon.name.toUpperCase()}</h3>
        <div className='d-flex flex-row'>
          <div className=''>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt='...' />
          </div>
          <div className='ps-5'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <h5>Stats</h5>
                <ul>
                  {pokemon.stats.map((element, index) => {
                    return (
                      <li key={'stats-' + index}>{element.stat.name.toUpperCase()}: {element.base_stat}</li>)
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }

  const showLoading = () => {
    return (
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )
  }

  return (
    <div className='container col-6 d-flex flex-column pt-5 align-items-center'>
      {pokemonLoaded ? showData() : showLoading()}
    </div>
  )
}

export default Detalle
