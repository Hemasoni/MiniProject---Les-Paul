import {  useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

function Login()
{
    const [result, setResult] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({  
            uname  :  "",            
            password  :  "",            

    });
   
    function onSubmitClick(event)
    {
        event.preventDefault();

        let tempErrorObj = Object.assign({}, errors);

        tempErrorObj.uname =  (uname.length == 0)? "User Name is required..!" : "";
        tempErrorObj.password =  (password.length < 8)? "Password required 8 chars..! " : "";
        
        setErrors(tempErrorObj);

        let valuesArray = Object.values(tempErrorObj);
        let flag = valuesArray.every(item => item.length == 0);

        if(flag == true)
        { 
        alert("Hello " + uname + ", Weclome to Les Paul");              
        }
        else
        {          
         
           setResult("Login Failed. Please enter valid username and passwords");
        }
    }

    return (
        <>
        <div id="d1">
 
            <hr/>

            <fieldset style={{"border":"2px solid black","padding":"20px"}}>
                <h2>User Login</h2>

                <form  onSubmit={onSubmitClick}  noValidate>

                 User Name  :  <input type="text" name="uname" onChange={(e) => setUname(e.target.value)}  />
                 <span  style={{"color":"red"}}>{errors.uname}</span>
                 <br/><br/>

                 Password  :  <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}  />
                 <span  style={{"color":"red"}}>{errors.password}</span>
                 <br/><br/> 
<Link to="/ForgotPassword">Forgot Password?</Link>
<br/><br/>
                 
            
                <input type="submit" style={{"backgroundColor":"green", "padding":"8px", paddingLeft:"25px", paddingRight:"25px", color:"white", fontSize:"20px"}}   value="Login"  />
                <br/>
                <h3>{result}</h3>

                </form>        
              <br/>
        
              <h2>New User?</h2>
              <br/>
              <Link style={{"backgroundColor":"red", "padding":"15px", color:"white", textDecoration:"none", fontSize:"20px"}} to="/Register">Click here to Register for free</Link>
         </fieldset>
         <br/><br/>

        </div>
<Footer/>
        </>
    );   
}

export default Login;