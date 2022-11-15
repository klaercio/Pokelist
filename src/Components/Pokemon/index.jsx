import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import './index.css';


export default function Pokemon({name, index}) {

    const [pathImage, setPathImage] = useState('');
    console.log("nome do bicho", name);

    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setPathImage(data.sprites.front_default))

    }, []);

    return <>
        <li key={index}>
            <div className="img">
                <Link to={`/details/${index}`}><img src={pathImage} alt={name}/></Link>
            </div>
            <span>{name}</span>
        </li>
    </>
}