import React, { useState } from 'react'
import {Link,  useHistory } from 'react-router-dom'
import Auth from '../../services/Auth'
import './index.css'

const Register = () => {

    const [datos, setDatos] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState(null)

    let history = useHistory();

    const {name, email, password} = datos

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {status, message} = await Auth.register({name, email, password})
        if (status === 'success') {
            history.push("/login");
        } 

        if(message) {
            setError(message)
        }
    }


    return (
        <form className='container' onSubmit={handleSubmit}>
            {error && <p>{error}</p>}

            <div className='container_auth'>
                <h1>Register</h1>
                <input 
                    className='input' 
                    type='text' 
                    placeholder='Name' 
                    name='name'
                    onChange={handleInputChange}

                />
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

                <Link className='link' to='/Login'>Back</Link>
                <button className='btn'><span>Register</span></button>
            </div>

        </form>
    )

}

export default Register;