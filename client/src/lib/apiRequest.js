import axios from "axios";

const apiRequest=axios.create({
    baseURL:"https://estateapp-backend.onrender.com/api",
    withCredentials:true,
});
export default apiRequest;