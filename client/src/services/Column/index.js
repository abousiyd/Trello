import axios from '../../plugins/index';

const getToken = () => {
    const trelloStorage = localStorage.getItem('trello') || '{}';

        const {token} = JSON.parse(trelloStorage)
        return {headers: {'Authorization': token}}
}

const column = {

    list: async () => {
        try {
            const {data} = await axios().get('column/list', getToken());
            return data;
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },


    deleteColumn: async (id) => {
        try {
            return await axios().delete(`column/${id}`, getToken());
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },

    add: async (name, id) => {
        try {
            const {data} = await axios().post('column/create', {name, id}, getToken());
            return data;
        
       } catch (error) {
           return {
               status : 'error',
               message : 'fallo del servidor',
           };
       }; 
    },

    save: async (id, name) => {
        try {
            return await axios().put(`column/${id}`, {name}, getToken());
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },



}

export default column;
