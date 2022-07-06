import { Alert } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import LoginService from '../services/LoginService';
import { useNavigate } from "react-router-dom";
import MY_NETWORK_CONSTANTS from '../utils/MyNetworkConstants'
import { JSEncrypt } from 'jsencrypt'

export default function LoginComponent() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [clickedSignIn, setClickedSignIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    let navigate = useNavigate();

    const encryptString=(string)=>{
        const pubKey="HelloThere";
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(pubKey);
        const encryptedStr=encrypt.encrypt(string);
        alert(encrypt.getKey)
        return encryptedStr;
    }

// const encrypt = new JSEncrypt()
// encrypt.setPublicKey(pub_key)
// var json = JSON.stringify({ account: 'cb01435781', password: 'aaaaaa' })
// var encrypted = encrypt.encrypt(json);
// console.log('encrypted', encrypted)

// var decrypt = new JSEncrypt();
// decrypt.setPrivateKey(priv_key);
// var uncrypted = decrypt.decrypt(encrypted);
// console.log('uncrypted', JSON.parse(uncrypted))


    const validateUser = (e) => {
        e.preventDefault();
        setClickedSignIn(true);
        const userLogin = { userName, password };
        console.log(userLogin);
        LoginService.login(userLogin).then((response) => {
            console.log(response.data);
            setClickedSignIn(false);
            let respData = response.data;
            if (respData.code === 200) {
                setLoggedIn(true);
                alert(respData.response.statusCode);
                localStorage.setItem("userName", respData.response.userName);
                localStorage.setItem("emailId", respData.response);
                
                if(respData.response.statusCode===MY_NETWORK_CONSTANTS.LOGIN_CONSTANTS.USER_NOT_VERIFIED_CODE){
                    navigate("/verify")
                }
                else if(respData.response.statusCode===MY_NETWORK_CONSTANTS.LOGIN_CONSTANTS.USER_LOCKED_CODE){
                    navigate("/locked")   
                }
                else if(respData.response.statusCode===MY_NETWORK_CONSTANTS.LOGIN_CONSTANTS.USER_NOT_ACTIVE_CODE){
                    navigate("/inactive") 
                }
                else{
                    navigate("/home")
                }
                
            }
            else {
                
                
                setErrorMessage(respData.response.status);
            }

        }).catch((error) => {
            console.log(error.message);
            setClickedSignIn(false);
            setErrorMessage(error.message);
        })
    };
    return (
        <div>
            {errorMessage ? <Alert className="mt-3" severity='error' onClose={() => { setErrorMessage(null) }} >{errorMessage}</Alert> : null}


            <form onSubmit={(e) => { validateUser(e) }} className="col ps-2 pt-2 pe-2">
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="text" className="form-control" id="loginUserName" aria-describedby="inputGroupPrepend2" required
                            onChange={(e) => { setUserName(e.target.value) }} minLength={5} maxLength={20} value={userName} />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>

                    <input type="password" className="form-control" id="loginPassword" value={password} required
                        onChange={(e => { setPassword(e.target.value) })} minLength={8} />
                </div>
                <div className="mb-3">
                    <span><button disabled={!(userName && password && !clickedSignIn)} className="btn btn-primary">
                        {clickedSignIn ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
                        {" "}  Login</button></span>
                </div>
            </form></div>
    );
}