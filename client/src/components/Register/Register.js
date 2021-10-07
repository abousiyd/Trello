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

        if( message) {
            setError(message)
                setTimeout( () => {
                    setError(null)
                }, 4000 )
        }
    }


    return (
        <form className='Register_Container' onSubmit={handleSubmit}>
            {error && 
                <span className='Register_Error'> Warning! &nbsp; {error}</span>
            } 
            <div className='Register_Container_Auth'>
                <div className='Register_Inputs'>
                    <h1 className='Register_Title'>Register</h1>
                    <input 
                        className='Register_Input' 
                        type='text' 
                        placeholder='Name' 
                        name='name'
                        onChange={handleInputChange}

                    />
                    <input 
                        className='Register_Input' 
                        type='email' 
                        placeholder='Email' 
                        name='email'
                        onChange={handleInputChange}
                    />
                    <input 
                        className='Register_Input' 
                        type='password' 
                        placeholder='password' 
                        name='password'
                        onChange={handleInputChange}
                    />

                    <Link className='Register_link' to='/Login'>Login</Link>
                    <button className='Register_Btn'><span>Register</span></button>
                </div>

                <div className="Register_Img" >
                    <img className="Register_Img_Tag" src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="imagen de login"/>
                </div>
            </div>


        </form>
    )

}

export default Register;