import { useEffect, useState } from "react"
import Pokemon from "../../Components/Pokemon";

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsImage, setPokemonsImage] = useState([]);

    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(response => response.json())
        .then(data => setPokemons(data.results));
    }, []);

    return <>
        <div>
            <ul>
                {pokemons.map((poke, index) => (
                    <Pokemon name={poke.name} index={index}/>
                ))}
            </ul>
        </div>
    </>
}