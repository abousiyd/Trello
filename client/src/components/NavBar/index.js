import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const NavBar = () => {

    let history = useHistory();

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
            <ul class="main_NavBar">
                <li className='main_Nav_Home'><a href="">Home</a></li>
                <li className='main_Nav_Title'><a href="">Trello</a></li>
                <li className='main_Nav_Logout'><span onClick={() => logout()}>Salir</span></li>
                <li className="main_Nav_User"><a href="">{currentUser.name?.charAt(0)}</a></li>
            </ul>
        </nav>
    )

}

export default NavBar
