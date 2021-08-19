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
            return data
       } catch (error) {
           return {
               status : 'error',
               message : 'fallo del servidor',
           };
       } 
    }
}

export default Auth;