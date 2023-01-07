import React from 'react';
import { Input } from 'antd';
import { setSearch, setSearchedPokemons } from '../Slices/uiSlice';
import { useDispatch, useSelector } from 'react-redux';

const Searcher = () => {
   const search = useSelector((state) => state.ui.search);
   const pokemons = useSelector((state) => state.data.pokemons);
   const dispatch = useDispatch();

   const arrSearchedPokemons = (search) => {
      let searched = [];

      if (!search.length >= 1) {
         searched = pokemons;
      }
      else {
         searched = pokemons.filter(pokemon => {
            const text = pokemon.name.toLowerCase();
            const searchText = search.toLowerCase();
            return text.includes(searchText);
         });
      }
      return searched;
   };
   const onSearch = (event) => {
      console.log(event.target.value);
      dispatch(setSearch(event.target.value));
      //dispatch(setSearchedPokemons(arrSearchedPokemons(search)));
   };

   
   return (
      <Input.Search placeholder='Buscar...' style={{ marginBottom: 10 }} onChange={onSearch} onSearch={()=> dispatch(setSearchedPokemons(arrSearchedPokemons(search)))}/>
   );
}

export default Searcher;