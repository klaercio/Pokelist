import './index.css';

export default function Modal({showModal}) {
    return <>
        <div className={showModal? 'modal visivel' : 'modal'}>
            <p>Modal Visivel</p>
        </div>
    </>
};