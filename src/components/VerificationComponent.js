import { Alert, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useState, useEffect } from 'react';
import LoginService from '../services/LoginService';
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const [userName, setUserName] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [clickedVerify, setClickedVerify] = useState(false);
    const [errorMessage, setErrorMessage]=useState("");
    let navigate = useNavigate();

    const verifyUser=(e)=>{
        e.preventDefault();
        setClickedVerify(true);
        let val="/"+userName+"/"+verificationCode;
        LoginService.verifyUser(val).then((response)=>{
            if(response.data.code===200){
                alert("Success");
                navigate("/home");
            }
            else{
                alert("Failed");
                setClickedVerify(false);
                setErrorMessage(response.data.response);
            }
        }).catch((error)=>{
            alert("Error");
            setClickedVerify(false);
            setErrorMessage(error.message);
        })
    };
    useEffect(() => {
        console.log('UseEffect');
        if (localStorage.getItem("userName") !== null) {
            setUserName(localStorage.getItem("userName"));
        };
    },[]);
    return (
        <Box sx={{ flexGrow: 1 }} className="mt-4 center" >
            <Grid direction="row"
                justifyContent="center"
                container spacing={1}>
                <Grid item xs={4}>
                    <Paper className='text-primary mt-2 ps-2 pt-2 pb-2 pe-2 align-middle'>
                        {errorMessage? <Alert className="mt-3" severity='error' onClose={() => { setErrorMessage(null) }} >{errorMessage}</Alert>:null}
                        <div><form onSubmit={(e)=>{verifyUser(e)}}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                    <input type="text" className="form-control" id="loginUserName" aria-describedby="inputGroupPrepend2" required
                                        value={userName} disabled />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Verification Code</label>
                                <input type="text" id="verificationCode" name="verificationCode" required className="form-control"
                                    value={verificationCode} onChange={(e) => { setVerificationCode(e.target.value) }}></input>
                            </div>
                            <div className="mb-3">
                                <span><button disabled={!(verificationCode)} className="btn btn-primary">
                                    {clickedVerify ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : null}
                                    {" "}  Verify</button></span>
                            </div>
                        </form></div></Paper></Grid>
            </Grid>
        </Box>
    );
}