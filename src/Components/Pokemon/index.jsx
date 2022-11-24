import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import './index.css';


export default function Pokemon({name, index, mode, setShowModal, setName}) {

    const [pathImage, setPathImage] = useState('');
    const imgNumber = Math.floor(Math.random() * 3 + 1);

    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => setPathImage(data.sprites.other.dream_world.front_default? data.sprites.other.dream_world.front_default: data.sprites.front_default));
    }, []);

    return <>
            <li key={index} className={mode? `li-img${imgNumber}` : `dark li-img${imgNumber}`} onClick={() => {setShowModal(true); setName(name)}}>
                <span className={mode? "": "dark-span"}>{name}</span>
                <div className="img">
                    <img src={pathImage} alt={name}/>
                </div>
                <div className="botoes">
                    <Link to={`/details/${name}`} className="botao">Details</Link>
                    <Link to={`/evolution/${name}`} className="botao">Evolution</Link>
                </div>
            </li>
    </>
}