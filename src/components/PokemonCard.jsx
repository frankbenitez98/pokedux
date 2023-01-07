import React from 'react'
import {Card} from 'antd';
import Meta from 'antd/es/card/Meta';
import StarButtom from './StarButtom';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../Slices/dataSlice';




const PokemonCard = ({pokemon}) => {
   const dispatch = useDispatch(); 
   const getType = (types) => (
      types.map(type => type.type.name).join(", ")
   );
   const handleStarButtom = () => { 
      dispatch(setFavorite({pokemonId: pokemon.id}));
   }; 
   return (
      <Card
         title={pokemon.name}
         cover={<img src={pokemon.sprites.front_default} alt={pokemon.name}/>}
         extra={<StarButtom isFavorite= {pokemon.favorite} onClick={handleStarButtom}/>}
     >
         <Meta description={getType(pokemon.types)}/>
      </Card>
   );
}

export default PokemonCard;