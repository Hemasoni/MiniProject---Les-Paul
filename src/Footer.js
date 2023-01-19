import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

function Footer()
{
return(
<>
<div style={{"backgroundColor":"black"}}>
<div id="d1">
<br/><br/>
 <div className="row">
   <div className="col">
    <p style={{"fontFamily":"Brush Script MT", "fontStyle":"italic", color:"white", "fontSize":"65px"}}>Les Paul</p>
   </div>.
   <div className="col">
    <h6 style={{"color":"white"}}>About</h6>
    <p style={{"color":"white"}}>Les Paul created his foundation to perpetuate support of areas that were important to him. Through the foundation, the spirit of Les Paul continues to encourage innovative and creative thinking through support of music education, recording, innovation and medical research, especially as it applies to hearing loss related to tinnitus.</p>
   </div>
   <div className="col">
   <h6 style={{"color":"white"}}>Newsletter</h6>
   <span style={{"color":"white"}}>Email address:</span>
   <br/>
   <input type="text" placeholder="Enter your Email" />
   <br/><br/>
   <span style={{"color":"white"}}>First Name</span>
   <br/>
   <input type="text" placeholder= "First Name"  />
   <br/><br/>
   <span style={{"color":"white"}}>Last Name</span>
   <br/>
   <input type="text" placeholder="Last Name"/>
   <br/><br/>
   <button className="btn" style={{"fontSize":"20px", backgroundColor:"white", color:"black"}}>Sign Up</button>
   </div>
   <div className="col">
   <h6 style={{"color":"white"}}>Contact Us</h6>
   <span style={{"color":"white","fontWeight":"bold"}}>Email</span>
   <br/>
   <span style={{"color":"white"}}>info@lespaulfoundation.org</span>
   <br/><br/>
   <span style={{"color":"white","fontWeight":"bold"}}>Address</span>
   <br/>
   <span style={{"color":"white"}}>The Les Paul Foundation
485 Underhill Blvd., Suite 108
Syosset, NY 11791</span>
   </div>
 </div>
 <br/><br/>

 <span style={{"color":"white",}}>© 2021 Les Paul Foundation  |  Privacy Policy
</span>
<a style={{"float":"right"}}href="https://www.youtube.com/user/lespaulfound"><BsYoutube size="40" style={{"marginRight":"20px"}}/></a>
<a style={{"float":"right"}}href="https://twitter.com/LesPaulOfficial"><BsTwitter size="40" style={{"marginRight":"20px"}}/></a>
<a style={{"float":"right"}}href="https://www.instagram.com/lespaulofficial/"><BsInstagram size="40"style={{"marginRight":"20px"}}/></a>
<a style={{"float":"right"}}href="https://www.facebook.com/OfficialLesPaul/"><BsFacebook size="40"style={{"marginRight":"20px"}}/></a>
<br/><br/><br/>
</div>
</div>
</>
);
}

export default Footer;