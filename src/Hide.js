import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {AiFillMinusCircle} from 'react-icons/ai'

function Hide(props)
{ 
return (
 <div style={{float:"left"}}>
<ExpandOnclick y={props.content}/>
 </div>
);
}
      
function ExpandOnclick(props)
{
const[x, toggleX] = useState(false);
return(
<>
<button style={{"border":"0", "padding":"0", "borderRadius":"100%", clear:"both","marginLeft":"10px"}} onClick={()=>{toggleX(!x)}}>
{!x && <BsFillPlusCircleFill id="i3"/>} {x && <AiFillMinusCircle id="i3"/>}  </button>
 {x && <div>{props.y}</div>}
</>          
);
}

export default Hide;