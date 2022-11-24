import { useState } from 'react';
import './index.css';
import { XCircle } from 'phosphor-react';

export default function Modal({showModal, setShowModal}) {

    return <>
        <div className={showModal? 'modal visivel' : 'modal'}>
            <XCircle onClick={() => setShowModal(false)} className='botao-fechar'/>
            <p>Modal Visivel</p>
        </div>
    </>;
}