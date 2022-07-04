import * as React from 'react';
import { useState } from 'react';
import RegisterService from "../services/RegisterService"

export default function RegisterComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");

  const persistData = (e) => {
    e.preventDefault();
    const user={userName, password, emailId};
    console.log(user);
    RegisterService.submitNewUser(user).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  };
const isUserNameAvailable= (e) =>{
  e.preventDefault();
  console.log(userName);
};

  return (
    <div>
      <form className="col ps-2 pt-2 pe-2" onSubmit={(e)=>{persistData(e)}}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" className="form-control" id="userName" aria-describedby="inputGroupPrepend2" required
              onChange={(e) => { setUserName(e.target.value) }} minLength={5} maxLength={20} value={userName}/>
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
         <span><button className="btn btn-primary"><span></span>Join</button></span>
        </div>
      </form>

    </div>
  );
}
