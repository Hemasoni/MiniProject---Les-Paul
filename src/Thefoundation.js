import React from "react";
import ReactPlayer from "react-player";
import {BsChevronDoubleRight} from 'react-icons/bs';
import { Link } from "react-router-dom";
import Hide from "./Hide";
import Footer from "./Footer";


function Thefoundation()
{    return(
<>
<div id="d1">
    <br/>
<h2>THE FOUNDATION</h2>
<hr/>
<p id="p1">The Les Paul Foundation inspires innovative and creative thinking by sharing the legacy of Les Paul through support of music education, recording, innovation and medical research related to hearing. It's also a great resource for anyone wanting to learn more about the Wizard of Waukesha.</p>

<ReactPlayer url="https://player.vimeo.com/video/560652118?h=108a5b625e"
        width="95%" height="500px"    playing={true}  controls={true}
        loop={true} muted autoplay/>
        <br/>
 </div>       

<div id="d2">
<div id="d1">
<h2 style={{"textAlign":"center"}}>ABOUT</h2>
<hr/>
<div className="row">
 <div className="col-4">
    <h4>Mission Statement</h4>
    <p>The Les Paul Foundation inspires innovative and creative thinking by sharing the legacy of Les Paul through support of music education, recording, innovation, exhibits about Les Paul  and medical research related to hearing.</p>
    <h6>Donate Online</h6>
    <p>Your online donation will be securely processed through Paypal. You can pay with any major credit card or with your Paypal account. You can also support the Les Paul Foundation by shopping at our Les Paul Online Store.</p> 
    <a href="https://www.paypal.com/donate" ><img  width="120px" height="50px" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"/> </a>
 </div>
 <div className="col-1"></div>

 <div className="col-7">
    <h4>The Les Paul Foundation</h4>
    <p><BsChevronDoubleRight id="i2" size="13px"/> Awards grants to programs and projects that encourage innovation in music production and/or performance and to innovative STEM and STEAM programs for students and others in challenging situations
    <br/><br/><BsChevronDoubleRight id="i2" size="13px"/>Provides grants for medical research related to curing tinnitus and hearing impairment issues.
    <br/><br/><BsChevronDoubleRight id="i2" size="13px"/>Inspires the public through support of public exhibits presenting Les Paul's life and achievements
    <br/><br/>Determined to perpetuate support to the areas on which he focused his life, Les Paul created his foundation.
    </p>
 </div>
</div>
<br/>
</div>
</div>

<div style={{"backgroundColor":"black"}}>
    <div id="d1">
        <br/><br/>
    <div className="row">
        <div className="col-7">
        <h5 style={{color:"white"}}>Education Resources</h5>
        <p style={{color:"white"}}>Learn more about the Foundation's Education resources including standard-based study units, videos, activities, posters and more for elementary, seondary and collegiate.</p>
        </div>
        <div className="col-3"></div>
        <div className="col-2">
            <br/><br/>
        <Link className="linkedu" to="/Education">Learn More</Link>
        </div> 
    </div>
    </div>
    <br/><br/>
</div>
<br/>

<div id="d1">
<h2 style={{"textAlign":"center"}}>GRANTS</h2>
<hr/>
<div className="row">
 <div className="col-4">
 <img src="https://www.les-paul.com/wp-content/uploads/2021/03/leswithkid-1200x600-1-1024x512.jpg" width="100%" height="200px"/>   
 <br/><br/>
 <img src="https://www.les-paul.com/wp-content/uploads/2021/03/LPBSEMEMPHIS-980x735.jpg" width="100%" height="200px"/>
 <br/><br/>
 <img src="https://i.pinimg.com/originals/58/ed/7a/58ed7a49aca2424f2eac52025944a692.jpg" width="100%" height = "200px"/>
 <br/><br/>
 <img src="https://townsquare.media/site/104/files/2014/01/83893856.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89" width="100%" height="200px"/>
 </div>
 <div className="col-1"></div>

 <div className="col-7">
    <h4>Grant Guidelines</h4>
     <p>Organizations must be located and operating programs in the United States and classified by the Internal Revenue Service as public charities and tax- exempt under section 501(c)(3) of the Internal Revenue Code. The foundation does not support religious, political, labor or business organizations. No grants are awarded to individuals.
       <br/><br/>Funding consideration is given to programs and projects that encourage innovation in music production and/or performance and to innovative STEM or STEAM programs for students and others in challenging situations. Proposals for medical research related to curing tinnitus and other hearing impairment issues are considered. Other types of funding is by invitation only. All organizations must describe how Les Paul’s story will be shared.
       <br/><br/>Successful organizations will receive checks after the decision date. Please do not contact.</p>
     <p style={{"fontWeight":"bold"}}>Application and Decision Schedule: </p> 
     <table cellPadding="7" id="t1">
        <tr style={{"fontWeight":"bold"}}><td>Grant Cycle</td><td>Grant Deadline</td><td>Decision Date</td></tr>
        <tr><td>1</td><td>January 15</td><td>April 1</td></tr>
        <tr><td>2</td><td>September 15</td><td>December 1</td></tr>
     </table><br/>
     <ol type="1">
        <li>Organizations may only file one grant request per calendar year.</li>
        <li>Please make sure that you have the most recent version of Acrobat Reader. </li>
        <li>Complete application form.</li>
        <li>Review to confirm you've addressed all fields, including your Organization Budget. </li>
        <li>Don't forget to save once you've completed it, then attach to an email and send to: info@lespaulfoundation.org </li>
        <li>Print it if you want a hard copy. </li>
        <li>Successful organizations will receive checks after the decision date. Please do not contact.</li>
     </ol>
    </div>
</div>
<br/>
</div>

<div id="d3">
<div id="d1">
    <br/>
<h3 style={{"textAlign":"center"}}>FAQS ABOUT GRANTS FROM THE LES PAUL FOUNDATION</h3>
<hr/>
<fieldset id="f1">    
<h4 style={{float:"left"}}>What types of organizations receive funding?</h4>
<Hide content={[<ul type="disc"><li>Music education organizations and schools including public schools</li> <li>Music Recording and Music Industry education programs</li><li>STEM/STEAM programs that emphasize innovation and align with Les Paul's work</li><li>STEM/STEAM programs that emphasize innovation and align with Les Paul's work</li><li>Museum exhibits about Les Paul with collaboration with Foundation</li></ul>]}></Hide>
</fieldset>

<fieldset id="f1">
<h4 style={{float:"left"}}>What are the priorities for grants from the LES PAUL FOUNDATION?</h4>
<Hide content={[<ul type="disc"><li>Inspire students/audience by sharing Les Paul's story in an innovative and effective way. The foundation's name in a program or on a plaque is not sufficient. Relay how you will share Les' story.</li><li>Demonstrate funding from sources beyond the Les Paul Foundation.</li><li>Begin relationship with the Foundation with realistic a funding request.</li><li>Personnel, timeline and budget should be consistent with project/program.</li></ul>]}></Hide>
</fieldset>

<fieldset id="f1">
<h4 style={{float:"left"}}>Are there geographic restrictions?</h4>
<Hide content={[<p>Yes, Grants are awarded to all the 501(c)3 organizations and schools within the United States.</p>]}></Hide>
</fieldset>

<fieldset id="f1">
<h4 style={{float:"left"}}>Are funding requests accepted for existing projects?</h4>
<Hide content={[<p>If they align with above priorities, then the funding requests are accepted.</p>]}></Hide>
</fieldset>

<fieldset id="f1">
<h4 style={{float:"left"}}>What is the typical amount given for a first time grant?</h4>
<Hide content={[<p>First time grants typically are $1,500 to $2,000, but there are no fixed amounts.</p>]}></Hide>
</fieldset>

<fieldset id="f1">
<h4 style={{float:"left"}}>Do I need to answer all questions on the form?</h4>
<Hide content={[<p>Definitely. Missing information will preclude consideration of your request.</p>]}></Hide>
</fieldset>
<br/>
</div>
</div>
<Footer/>
</>    
)
}

export default Thefoundation;