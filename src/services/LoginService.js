import axios from 'axios';
import MY_NETWORK_CONSTANTS from '../utils/MyNetworkConstants';

const beBaseUrl = process.env.REACT_APP_BE_BASE_URL;
class LoginService {
    login(payload) {
        return axios.post(beBaseUrl + MY_NETWORK_CONSTANTS.LOGIN_CONSTANTS.LOGIN_API, payload)
    }
    verifyUser(postFix){
        return axios.post(beBaseUrl+MY_NETWORK_CONSTANTS.LOGIN_CONSTANTS.VERIFY_API+postFix)
    }
}

export default new LoginService();