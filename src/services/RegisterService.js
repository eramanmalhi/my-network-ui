import axios from 'axios';
import REGISTER_CONSTANTS from '../utils/MyNetworkConstants';

const beBaseUrl=process.env.REACT_APP_BE_BASE_URL;
console.log("BE"+beBaseUrl);
class RegisterService{
    submitNewUser(payload){
        return axios.post(beBaseUrl+REGISTER_CONSTANTS.REGISTER_API, payload)
    }
}

export default new RegisterService();