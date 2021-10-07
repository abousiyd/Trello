import React, {useState} from 'react'
import './index.css'

import Auth from '../../../services/Auth'
import Dashboard from '../../../services/Dashboard'

const Search = ({activeDashId,  participantes, getDashboards}) => {
    
    const [userName, setUserName] = useState(null)
    const [sectedUsers, setSelectedUsers] = useState([])
    
    
    const handleInputChange = (e) => {
        setUserName(e.target.value)
        
    }
    const searchUser = async () => {
        const {data} = await Auth.list(userName)
        setSelectedUsers(data || [])
    }
    console.log(sectedUsers, 443311)
    console.log(participantes, 443322)
    
    const toggleInvitation = async (selectedUserId) => {
        await Dashboard.toggleInvitation(activeDashId, selectedUserId)
        getDashboards()
    }

    return (

        <div className='search-container'>
            <form className='search'>

                <input onChange={handleInputChange} className='search-input' type="search" placeholder="Search" name="Search"></input>

                <button onClick={searchUser} className="search-btn" type="button">Invitar</button>
            </form>

            <div className='dropdown'>
                {
                    !!sectedUsers.length && userName && (sectedUsers || []).map(selectedUser => {

                        const {name, _id: selectedUserId} = selectedUser

                        const isParticipant = (participantes || []).find(participant => participant._id === selectedUserId )

                        return <div className='dropdown-select'>
                                
                                <img className='dropdown-img' 
                                    src={`http://joeschmoe.io/api/v1/${name}`}
                                    title={name}
                                    />
                                <h3 className='dropdown-name'>{name}</h3>
                                {
                                    !!isParticipant ? 

                                    <button className='dropdown-btn-remove' type="button">
                                        <i onClick={() => toggleInvitation(selectedUserId)} className="far fa-trash-alt removed-icon"></i>
                                    </button> :
                                    <button className='dropdown-btn' type="button">
                                        <i onClick={() => toggleInvitation(selectedUserId)} className="fas fa-user-plus add-icon"></i>
                                    </button>
                                }
                            </div>
                    })
                
                }
            </div>

        </div>

    )

}

export default Search
