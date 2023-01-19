import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

function App()
{ let merchArray = [{name:"LPF Black-Tshirt", price:30.00, src:"https://www.les-paul.com/wp-content/uploads/2021/06/v600_image-64950-5660d00a38f23.jpg"},
{name:"Signature Sandstone Crewneck Sweatshirt", price: 45.00, src:"https://www.les-paul.com/wp-content/uploads/2021/06/v600_image-157193-60a261ca60a9d.jpg"},
{name:"In His Own Words Hardcover Book", price:29.99, src:"https://www.les-paul.com/wp-content/uploads/2021/05/IN-HIS-OWN-WORDS.jpg"},
{name:"Foundation White T-Shirt", price:30.00, src:"https://www.les-paul.com/wp-content/uploads/2021/06/v600_image-157185-60a258698db16.jpg"},
{name:"Signature Unstructured Black Cap", price:25.00, src:"https://www.les-paul.com/wp-content/uploads/2021/06/v600_image-157197-60a264217d6c9.jpg"},
{name:"LPF White T-Shirt", price:30.00, src:"https://www.les-paul.com/wp-content/uploads/2021/06/v600_image-157187-60a25d1a6700b.jpg"} 
];
  
let merch=merchArray.map(x=>
<div style={{"text-align":"center","width":"80%", "margin":"auto"}}>
<div style={{"float":"left", "width":"30%",height:"375px","text-align":"center"}} className="mx-2" >
<p><img src={x.src} style={{"marginBottom":"20px"}} width="100%" height="250px"/></p>  
<p style={{"color":"blue", "textAlign":"center", "width":"100%"}} >{x.name}</p>
<p>${x.price}</p>
</div>  
</div>
)

return (<>

<p style={{"margin":"7px", "textAlign":"center", "fontSize":"40px"}} >Les Paul: Inventor, Musician, Educator, Legend</p>
<p style={{"textAlign":"center", "width":"80%","margin":"auto", "color":"gray", "fontSize":"19px"}}>Les Paul was an inventor, an award-winning musician, an innovator and a creative genius. Like Thomas Edison or Steve Jobs changed their worlds, Les Paul changed the world of music. He was the creator of the solid-body electric guitar, multi-track recording, echo, over-dubbing and other musical technologies. Les never stopped exploring and his curiosity led to innovations that musicians still use today. He is known as the “Father of Modern Music” and the “Wizard of Waukesha.” Famous musicians, producers and engineers alike owe their careers to Les Paul and to this day, pay homage to him. Every time we hear an electric guitar shred or download our favorite music, we owe it to Les Paul. </p>

<div style={{"backgroundImage":"url(home1.jpeg)", "marginTop":"25px"}}>
<div style={{"margin":"auto", "width":"80%"}}>
<div class="row" style={{"margin":"auto", "color":"white"}}>
  <div class="col-6"><img style={{ "marginTop":"50px", "marginBottom":"10px"}} src="https://th.bing.com/th/id/OIP.kZLyOKPyYJPzhy3pSVz9ZgHaEN?pid=ImgDet&rs=1" width="330px" height="330px"/>
  <h2>THE INVENTOR</h2>
  <p>Acclaimed as the “Father of Modern Music”, Les Paul is known for numerous inventions that changed both the individual lives of musicians and the mechanics of the music industry in the twentieth century. His influence is still profound, having been a pioneer in the development of the solid-body electric guitar as well as numerous techniques including multi-track recording, digital delay, reverb, and more.</p>
  <img src="https://www.les-paul.com/wp-content/uploads/2021/05/45-blk4.gif" width="85px" height="85px"  style={{"marginTop":"15px", "marginBottom":"60px"}} />
  </div>

  <div class="col-6"><img style={{ "marginTop":"50px", "marginBottom":"10px"}} src="https://i.pinimg.com/originals/ae/a5/4f/aea54f04ce274a6fab7a778eedeb2aad.jpg" width="330px" height="330px" />
  <h2>THE MUSICIAN</h2>
  <p>Les Paul's technological wizardry and inventions transformed the music industry. His legacy as a consummate musician has had a global impact on countless artists from Paul McCartney, Eddie Van Halen, and Slash to Bing Crosby, Tony Bennett, and Chet Atkins. Les’ musical technique and virtuosic playing extended across all genres including jazz, country, R&B, and Rock. His multi-generational influence and contributions speak to his status as a legendary artist.</p>
  <img src="https://www.les-paul.com/wp-content/uploads/2021/05/45-blk4.gif" width="85px" height="85px"  style={{"marginTop":"15px", "marginBottom":"60px"}} />
  </div>
</div>
</div>
</div>
<h2 style={{"marginTop":"20px", "marginLeft":"145px",  marginBottom:"30px", }}>LES PAUL MERCH</h2>
{merch}

<div style={{"marginTop":"15px", "textAlign":"center", "clear":"left"}}>
  <h4>Subscribe to Our Newsletter</h4>
  <input id="i1" type="text" placeholder="First Name"  />
  <input id="i1" type="text" placeholder= "Last Name"  />
  <br></br>
  <input id="i1" type="text" placeholder="Email" style={{"width":"30%"}} />
  <br></br>
<button className="btn btn-secondary" style={{"fontSize":"25px", "width":"50%", "marginTop":"15px"}}>Subscribe</button>
</div>
<br/>
<Footer/>
</>);
}

export default App;
