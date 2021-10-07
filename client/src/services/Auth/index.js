import axios from '../../plugins/index';



const Auth = {
    register: async (credentials) => {
        try {
            const {data} = await axios().post('auth/register', credentials);
            return data
       } catch (error) {
           return {
               status : 'error',
               message : 'fallo del servidor',
           };
       } 
    },

    login: async (credentials) => {
        try {
            const {data} = await axios().post('auth/login', credentials);
            localStorage.setItem('trello', JSON.stringify(data.data));
            return data 
       } catch (error) {
           return {
               status : 'error',
               message : 'fallo del servidor',
           };
       } 
    }, 

    list: async (name) => {
        try {
            const {data} = await axios().get(`auth/list/${name}`);
            return data
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },
}

export default Auth;