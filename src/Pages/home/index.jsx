import { useEffect, useState } from "react"
import Pokemon from "../../Components/Pokemon";
import './index.css';

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const[offset, setOffset] = useState(0);
    const[limit, setLimit] = useState(20);

    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}"`)
        .then(response => response.json())
        .then(data => setPokemons(data.results));
    }, [offset, limit]);


    return <>
        <div className="Pokemons">
            <ul>
                {pokemons.map((poke, index) => (
                    <Pokemon name={poke.name} index={index}/>
                ))}
            </ul>
            <button onClick={()=>setOffset(atual => atual+limit)}>Próxima</button>
            <button onClick={()=>setOffset(atual => atual-limit)}>Anterior</button>
        </div>
    </>
}