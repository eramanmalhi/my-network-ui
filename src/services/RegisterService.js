import axios from 'axios';
import MY_NETWORK_CONSTANTS from '../utils/MyNetworkConstants';

const beBaseUrl=process.env.REACT_APP_BE_BASE_URL;
class RegisterService{
    submitNewUser(payload){
        return axios.post(beBaseUrl+MY_NETWORK_CONSTANTS.REGISTER_CONSTANTS.REGISTER_API, payload)
    }
}

export default new RegisterService();