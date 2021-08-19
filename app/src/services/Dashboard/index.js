import axios from '../../plugins/index';


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
            return await axios().put(`dashboard/${id}`, {name});
        } catch (error) {
            return {
                status : 'error',
                message : 'fallo del servidor',
            }
        }
    },
    add: async (name) => {
        try {
            const {data} = await axios().post('dashboard/create', {name});
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
