import { Alert } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import RegisterService from "../services/RegisterService"


export default function RegisterComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userAdded, setUserAdded] = useState(false);
  const [userAddFailed, setUserAddFailed] = useState("");
  const [clickedJoin, setClickedJoin] = useState(false);

  const persistData = (e) => {
    e.preventDefault();
    //const bcrypt = require("bcrypt");
    //const salt = bcrypt.genSalt(10);
    //password =  bcrypt.hash(password, salt);
    setClickedJoin(true);
    const user = { userName, password, emailId };
    console.log(user);
    RegisterService.submitNewUser(user).then((response) => {
      let respData = response.data;
      setClickedJoin(false);
      if (respData.code === 200) {
        setUserAdded(true);
        setUserAddFailed(false);
        setSuccessMessage(respData.response);
        setEmailId("");
        setUserName("");
        setPassword("");
      }
      else {
        setClickedJoin(false);
        console.log("API Responded with Invalid Code");
        setUserAddFailed(true);
        setUserAdded(false);
        setErrorMessage(respData.response);
      }
      console.log(respData);
    }).catch((error) => {
      setClickedJoin(false);
      console.log("ERROR");
      setUserAddFailed(true);
      setUserAdded(false);
      setErrorMessage(error.message);
    })
  };
  const isUserNameAvailable = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  return (
    <div>
      {userAdded ? <Alert className="mt-2" severity='success' onClose={() => { setUserAdded(false) }} >{successMessage}</Alert> : null}
      {userAddFailed ? <Alert className="mt-3" severity='error' onClose={() => { setUserAddFailed(false) }} >{errorMessage}</Alert> : null}


      <form className="col ps-2 pt-2 pe-2" onSubmit={(e) => { persistData(e) }}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" className="form-control" id="userName" aria-describedby="inputGroupPrepend2" required
              onChange={(e) => { setUserName(e.target.value) }} minLength={5} maxLength={20} value={userName} />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>

          <input type="password" className="form-control" id="password" value={password} required
            onChange={(e => { setPassword(e.target.value) })} minLength={8} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email ID</label>
          <input type="email" className="form-control" id="emailId" value={emailId} required
            onChange={(e) => { setEmailId(e.target.value) }} />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
            <label className="form-check-label">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="mb-3">
        <span><button disabled={!(userName && password && emailId)} className="btn btn-primary">
                        {clickedJoin ? <span className="spinner-border spinner-border-sm"  aria-hidden="true"></span> : null}
                        {" "}  Join</button></span>
        </div>
      </form>

    </div>
  );
}
