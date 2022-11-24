import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './index.css';

export default function Details() {

    const [pokemon, setPokemon] = useState({});
    const [pathImage, setPathImage] = useState();

    const {name} = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
        .then(response => response.json())
        .then(data => setPokemon(data));

        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setPathImage(data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default: data.sprites.front_default));
    }, []);

    return <>
        <div className="view">
            <div className="container-details">
                <div className="img">
                    <img src={pathImage}/>
                </div>
                <h2>{pokemon.is_legendary?'Legendary: Yes': 'Legendary: No'}</h2>
                <h2>{`Capture rate: ${pokemon.capture_rate}`}</h2>
                <h2></h2>
            </div>
        </div>
    </>
}