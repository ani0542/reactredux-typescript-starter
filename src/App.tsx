import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RootStore} from "./store";
import {GetPokemon} from './actions/PokemonActions';



function App() {


    const dispatch = useDispatch()

    const pokemonState = useSelector((state: RootStore) => state.pokemon);


    // console.log(pokemonState)

     const [pokemonName, setPokemonName] = useState("");


     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);

     const handleSubmit=()=>{
        dispatch(GetPokemon(pokemonName));

     }





    return (
        <div>
                <input type="text" onChange={handleChange}/>
                <button onClick={handleSubmit}>Search</button>


               


              

              
        </div>
    )
}

export default App
