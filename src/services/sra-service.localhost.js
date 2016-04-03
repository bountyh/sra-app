import axios from 'axios';

export default {

    get: (type, id = null) => {
        return axios
            .get('http://localhost:8888/api/'+type+'/'+id)
            .then(response => response.data);
    },

    post: (type, data) => {
    	console.log(typeof data);
        return axios.post('http://localhost:8888/api/'+type, [data]);
    }
};
