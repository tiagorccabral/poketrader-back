import httpStatus from 'http-status'
import axios from 'axios'
import ApiError from '@/main/utils/apiError'

type PokemonData = {
  id: number
  base_experience: number
}

const requestPokemonData = async (pokemonIds: number[]): Promise<PokemonData[]> => {
  const responseData: PokemonData[] = []
  await Promise.all(pokemonIds.map(async id => {
    try {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      responseData.push({ id: id, base_experience: data.data.base_experience })
    } catch (error) {
      throw new ApiError(httpStatus[500], error)
    }
  }))
  return responseData
}

const checkTrade = async (data): Promise<Boolean> => {
  try {
    const { pokemon_ids: pokemons1 } = data.trader1
    const { pokemon_ids: pokemons2 } = data.trader2
    let trader1Pokemons: PokemonData[] = []
    let trader2Pokemons: PokemonData[] = []

    trader1Pokemons = await requestPokemonData(pokemons1)
    trader2Pokemons = await requestPokemonData(pokemons2)

    const scoreCalculator = (acc: number, currentValue: PokemonData): number => {
      return acc + currentValue.base_experience
    }

    const pokemons1Score = trader1Pokemons.reduce(scoreCalculator, 0)
    const pokemons2Score = trader2Pokemons.reduce(scoreCalculator, 0)

    if (Math.max(pokemons1Score, pokemons2Score) * 0.8 >= Math.min(pokemons1Score, pokemons2Score)) {
      return
    }
  } catch (error) {
    throw new ApiError(error, 500)
  }
  return true
}

export { checkTrade }
