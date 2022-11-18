import { useEffect, useRef, useState } from "react"
import Pokemon from "../../Components/Pokemon";
import './index.css';

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const[offset, setOffset] = useState(0);
    const[limit, setLimit] = useState(60);
    const loaderRef = useRef(null);

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
            setOffset(atual => atual+limit);
          }
        }, options);
    
        if (loaderRef.current){
          observer.observe(loaderRef.current);
        }
      }, []);

    return <>
        <div className="Pokemons">
            <ul>
                {pokemons.map((poke, index) => (
                    <Pokemon key={index} name={poke.name} index={index}/>
                ))}
            </ul>
            <p ref={loaderRef}/>
        </div>
    </>
}