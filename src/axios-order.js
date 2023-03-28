import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dev.mathfactlab.com/api/v1/student-login/'

})

export default instance