import React from "react";
import './index.css'

export default function Overlay({showModal, setShowModal}) {
    return <>
        <div className={showModal? 'overlay': 'invisivel'} onClick={() => setShowModal()}/>
    </>;
}