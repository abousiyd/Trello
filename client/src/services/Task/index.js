import axios from '../../plugins/index';

const getToken = () => {
    const trelloStorage = localStorage.getItem('trello') || '{}';

        const {token} = JSON.parse(trelloStorage)
        return {headers: {'Authorization': token}}
}

const task = {


    add: async (title, description, id) => {

        try {
            const {data} = await axios().post('task/create', {title, description, id}, getToken());
            return data;
        
       } catch (error) {
           return {
               status : 'error',
               message : 'fallo del servidor',
           };
       }; 
    },

    deleteTask: async (id) => {
        try {
            return await axios().delete(`task/${id}`, getToken());
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },
    save: async (id, title, taskDescripcion) => {

        try {
            return await axios().put(`task/${id}`, {title, taskDescripcion}, getToken());
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },
    list: async () => {
        try {
            const {data} = await axios().get('task/list', getToken());
            return data;
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },


}

export default task;
