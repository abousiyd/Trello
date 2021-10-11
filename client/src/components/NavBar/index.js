import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const NavBar = () => {

    const history = useHistory();

    const [currentUser, setCurrentUser] = useState({})

    useEffect( () =>{
        const trelloStorage = localStorage.getItem('trello') || '{}';
        const {user} = JSON.parse(trelloStorage)
        if(!user) return history.push("/login");
        setCurrentUser(user)
    }, [])

    const logout = () => {
        localStorage.removeItem("trello");
        history.push("/login");
    }


    return (
        <nav className='main_Nav'>
            <ul className="main_NavBar">
                <li className='main_Nav_Home nav-header'><a href="">Home</a></li>
                <li className='main_Nav_Title nav-header'><a href="">WILLDO</a></li>
                <li className='main_Nav_Logout nav-header'><span onClick={() => logout()}>Salir</span></li>
                <li className="main_Nav_User">
                    <img className='main_nav_img' 
                            src={`http://joeschmoe.io/api/v1/${currentUser.name}`}
                            title={currentUser.name}
                    />
                </li>
                
            </ul>
        </nav>
    )

}

export default NavBar
