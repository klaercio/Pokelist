import { useEffect, useRef, useState } from "react"
import Pokemon from "../../Components/Pokemon";
import { Sun, MoonStars } from "phosphor-react";
import './index.css';
import Modal from "../../Components/Modal";
import Overlay from "../../Components/overlay";


export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const[offset, setOffset] = useState(0);
    const[limit, setLimit] = useState(30);
    const loaderRef = useRef(null);
    const[mode, setMode] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [Name, setName] = useState(0);

    useEffect(()=> {
          console.log('Open mudou rapaziada');
    }, [open]);

    useEffect(()=> {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => data.results.length? setPokemons(atual => [...atual, ...data.results]): console.log("nada mais a carregar")) 
    }, [offset, limit]);

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: "20px",
          threshold: 1.0
        };
    
        const observer = new IntersectionObserver((entities) => {
          const target = entities[0];
    
          if (target.isIntersecting){
            setOffset(atual => atual + limit);
          }
        }, options);
    
        if (loaderRef.current){
          observer.observe(loaderRef.current);
        }
      }, [limit]);

    return <>
        <div className="Pokemons">
           {mode? <Sun size={30} className="mode sun" onClick={()=> setMode(atual => !atual)}/> : <MoonStars size={30} className="mode moon" onClick={()=> setMode(atual => !atual)}/>}
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Overlay showModal={showModal} setShowModal={setShowModal}/>
            <ul>
                {pokemons.map((poke, index) => (
                    <Pokemon key={index} name={poke.name} index={index} mode={mode} setShowModal={setShowModal} setName={setName}/>
                ))}
            </ul>
            <p ref={loaderRef}/>
        </div>
    </>
}