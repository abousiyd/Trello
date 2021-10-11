import React, {useState} from 'react'
import Modal from '../../Modale'
import './index.css'


const Card = ({task}) => {
    const [active, setActive] = useState(false)

    const toggle = () => {
        setActive(!active)
    }

    return (
        <div className='card-body'>
            <h3 className='card-title' onClick={toggle}>{task.title}</h3>

            <Modal active={active} toggle={toggle}>
                <div className='mm'>
                    <h3 className='card-modal-title'>{task.title}</h3>
                    <h5 className='card-modal-description'>{task.description}</h5>
                </div>
            </Modal>
        </div>
    )
}

export default Card;
