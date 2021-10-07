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
            history.push("/dashboards"); 
        }
        if(message) {
            setError(message)
            setTimeout( () => {
                setError(null)
            }, 4000 )
        }
    }

    return (
        <form className='login_Container' onSubmit={handleSubmit} >
            {error && 
                <span className='Register_Error'> Warning! &nbsp; {error}</span>
            }
            <div className='login_Container_Auth'>
                <div className='login_Inputs'>
                    <h1 className='login_Title'>Login</h1>
                    <input 
                        className='login_Input' 
                        type='email' 
                        placeholder='Email' 
                        name='email'
                        onChange={handleInputChange} 
                    />

                    <input 
                        className='login_Input' 
                        type='password' 
                        placeholder='password' 
                        name='password'
                        onChange={handleInputChange} 
                    />
                    
                    <Link className='Login_link' to='/Register'>Register</Link>
                    <button className='login_Btn' type='submit'><span>Login</span></button>
                </div>

                <div className="login_Img" >
                    <img className="login_Img_Tag" src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="imagen de login"/>
                </div>

            </div>


        </form>
    )

}

export default Login;