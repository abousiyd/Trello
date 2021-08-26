import axios from '../../plugins/index';

const trelloStorage = localStorage.getItem('trello') || '{}';

const {token} = JSON.parse(trelloStorage)
console.log(token)

const headers = {'Authorization': token}

const dashboard = {
    list: async () => {
        try {
            const {data} = await axios().get('dashboard/list');
            return data;
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },

    deleteDash: async (id) => {
        try {
            return await axios().delete(`dashboard/${id}`);
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },

    save: async (id, name) => {
        try {
            return await axios().put(`dashboard/${id}`, {name}, {headers});
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },
    add: async (name) => {
        try {
            const {data} = await axios().post('dashboard/create', {name}, {headers});
            return data;
        
       } catch (error) {
           return {
               status : 'error',
               message : 'fallo del servidor',
           };
       }; 
    },

}

export default dashboard;
