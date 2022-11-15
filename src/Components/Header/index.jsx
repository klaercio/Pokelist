import './index.css';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Header({children}) {
    return <>
        <header className='cabecalho'>
            <div className='container'>
                Teste
            </div>
         </header>
         <div>
             <Outlet/>
             {children}
         </div>
    </>
}
