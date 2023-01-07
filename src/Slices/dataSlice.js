import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
   pokemons: [],
};
export const fetchPokemonsWithDetails = createAsyncThunk(
   'data/fetchPokemonWithDetails',
   async (_, { dispatch }) => {
      //dispatch loader 
      // fetch 
      // dispatch loader
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map((pokemon) => getPokemonDetails(pokemon)));
      dispatch(setPokemons(pokemonsDetailed))
      dispatch(setLoading(false));

   }
);
export const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      setPokemons: (state, action) => {
         state.pokemons = action.payload;
      },
      setFavorite: (state, action) => {
         const currentPokemonIndex = state.pokemons.findIndex((pokemon) => (pokemon.id === action.payload.pokemonId))
         if (currentPokemonIndex >= 0)
            state.pokemons[currentPokemonIndex].favorite = !state.pokemons[currentPokemonIndex].favorite;
      }
   },
});

export const { setFavorite, setPokemons } = dataSlice.actions
export default dataSlice.reducer; 