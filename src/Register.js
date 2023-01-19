import {  useState } from 'react';
import React from 'react';
 import ReactPlayer from 'react-player';
 import Footer from "./Footer";

function Register()
{
    const [result, setResult] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState({  
            uname  :  "",            
            password  :  "",            
            email :  ""
    });
   
    function onSubmitClick(event)
    {
        event.preventDefault();

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        let tempErrorObj = Object.assign({}, errors);

        tempErrorObj.uname =  (uname.length == 0)? "User Name is required..!" : "";
        tempErrorObj.password =  (password.length < 8)? "Password required 8 chars..! " : "";
        tempErrorObj.email =  validEmailRegex.test(email)? '': 'Email is not valid!';
        
        setErrors(tempErrorObj);

        let valuesArray = Object.values(tempErrorObj);
        let flag = valuesArray.every(item => item.length == 0);

        if(flag == true)
        {
                        
              setResult("Registered Successfully. Please check your email for confirmation.");              
        }
        else
        {          
         
           setResult("Registration Failed. Please check all the input fields.");
        }
    }

    return (
<>
        <div id="d1">
 
            <hr/>

            <fieldset style={{"border":"2px solid black","padding":"20px"}} >
                <legend>User Registration</legend>

                <form  onSubmit={onSubmitClick}  noValidate>

                 User Name  :  <input type="text" name="uname" onChange={(e) => setUname(e.target.value)}  />
                 <span  style={{"color":"red"}}>{errors.uname}</span>
                 <br/><br/>

                 Password  :  <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}  />
                 <span  style={{"color":"red"}}>{errors.password}</span>
                 <br/><br/> 

                 E-mail  :  <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}  />
                 <span style={{"color":"red"}}>{errors.email}</span>
                 <br/><br/> 
            
                <input type="submit" style={{"backgroundColor":"green", "padding":"8px", paddingLeft:"25px", paddingRight:"25px", color:"white", fontSize:"20px"}}  value="Register"  />
                <br/>
                <h3>{result}</h3>

                </form>    

            </fieldset>
            <br/><br/>

        </div>
        <Footer/>
        </>
    );   
}

export default Register;