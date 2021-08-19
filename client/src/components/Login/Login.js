import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import Auth from '../../services/Auth'
import './index.css'

const Login = () => {
    let history = useHistory();

    const [error, setError] = useState(null)

    const [datos, setDatos] = useState({
        email: '',
        password: ''
    })
    const {email, password} = datos

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {status, message} = await Auth.login({email, password});

        if(status === 'success') {
            history.push("/dashboards"); //en caso de logiar
        }
        if(message) {
            setError(message)
        }
    }

    return (
        <form className='container' onSubmit={handleSubmit} >
            {error && <p>{error}</p>}
            <div className='container_auth'>
                <h1>Login</h1>
                <input 
                    className='input' 
                    type='text' 
                    placeholder='Email' 
                    name='email'
                    onChange={handleInputChange} 
                />

                <input 
                    className='input' 
                    type='password' 
                    placeholder='password' 
                    name='password'
                    onChange={handleInputChange} 
                />
                
                <Link className='link' to='/Register'>Register</Link>
                <button className='btn' type='submit'><span>Login</span></button>
            </div>

        </form>
    )

}

export default Login;