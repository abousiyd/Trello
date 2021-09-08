import axios from '../../plugins/index';

const getToken = () => {
    const trelloStorage = localStorage.getItem('trello') || '{}';

        const {token} = JSON.parse(trelloStorage)
        return {headers: {'Authorization': token}}
}

const task = {


    add: async (title, description) => {


        try {
            const {data} = await axios().post('task/create', {title, description}, getToken());
            console.log(data, 44333)
            return data;
        
       } catch (error) {
           return {
               status : 'error',
               message : 'fallo del servidor',
           };
       }; 
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
