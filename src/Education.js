import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Footer from "./Footer";


function Education()
{   return(<>
    
<div id="d1">
            <br></br>
            <h2>THE EDUCATION</h2>
            <hr/>
<p id="p1">Below are diverse resources for classroom or individual use. If you have ideas for new resources please send them to info@lespaulfoundation.org. 

The study units were developed through a collaboration of the Les Paul Foundation, the Wisconsin School Music Association, and the Wisconsin Department of Public Instruction. Watch for additional resources to be added. Click on an area below to begin.</p>
<br/>

<ReactPlayer url="https://player.vimeo.com/video/724667988?h=f7223c76f5"
        width="100%" height="500px"    playing={true}  controls={true}
        loop={true} muted autoplay/>
<br/><br/>

<div className="row">
    <div className="col-4">
     <Link className="Link2" to="/Edu_Elementary"><img src="https://www.les-paul.com/wp-content/uploads/2023/01/Bots.jpg" width="100%" height="200px"/></Link>
    <h2 style={{textAlign:"center", color:"gray"}}>Elementary</h2>  
    </div>
    <div className="col-4">
    <Link className="Link2" to="/Edu_Secondary"><img src="https://www.les-paul.com/wp-content/uploads/2022/05/secondary.jpg" width="100%" height="200px"/></Link> 
    <h2 style={{textAlign:"center", color:"gray"}}>Secondary</h2>  
    </div>
    <div className="col-4">
    <Link className="Link2" to="/Edu_Collegiate"> <img src="https://www.les-paul.com/wp-content/uploads/2022/05/collegiate.jpg" width="100%" height="200px"/></Link>
     <h2 style={{textAlign:"center", color:"gray"}}>Collegiate</h2>  
    </div>
</div>
<br/>


</div>
<Footer/>
</>
)
}

export default Education;