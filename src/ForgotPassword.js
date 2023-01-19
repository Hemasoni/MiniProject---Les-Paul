import React from "react";
import { useState } from "react";
import Footer from "./Footer";


function ForgotPassword(){
const[email, setEmail] = useState("");
return(<>
    <div style={{"padding":"30px"}}>
        <fieldset id="f3">
            <br/><br/>
            <h2 style={{"backdroundColor":"aqua"}}>Forgot Password?</h2>
            < p style={{"backgroundColor":"aqua"}}>Please enter your email. We will share a link to reset your password</p>
            <input style={{"backgroundColor":"aqua"}} type="email" onChange={e=>setEmail(e.target.value)}/>
            <br/><br/>
            <input className="btn btn-danger" type="button" value="Request Password Reset"/>
        </fieldset>
    </div>
<Footer/>
</>
);
}
export default ForgotPassword;