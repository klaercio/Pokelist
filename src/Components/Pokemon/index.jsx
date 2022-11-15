import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import './index.css';


export default function Pokemon({name, index}) {

    const [pathImage, setPathImage] = useState('');

    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setPathImage(data.sprites.front_default))

    }, [name]);

    return <>
            <li key={index}>
                <div className="img">
                    <img src={pathImage} alt={name}/>
                </div>
                <span>{name}</span>
                <div className="botoes">
                    <Link to={`/details/${name}`} className="botao">Details</Link>
                    <Link to={`/evolution/${name}`} className="botao">Evolution</Link>
                </div>
            </li>
    </>
}