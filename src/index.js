import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';

import Collection from './Collection';
import Login from './Login';
import Register from './Register';
import Education from './Education';
import Thefoundation from './Thefoundation';
import Theinventor from './Theinventor';
import Themusician from './Themusician';
import Awards from './Awards';
import Edu_Elementary from './Edu_Elementary';
import Edu_Secondary from './Edu_Secondary';
import Edu_Collegiate from './Edu_Collegiate';
import ForgotPassword from './ForgotPassword';

const Routing=(
<Router>
  
<div style={{"backgroundColor":"black","float":"right"}}>
<Link className="Link1" to="/Login">Login</Link>
<Link className="Link1" to="/Register">Register</Link>

</div>

<div style={{"textAlign":"center", "backgroundColor":"#fcfcab","paddingBottom":"7px"}}  >
<span className="logo">1937</span>
<Link to="/" style={{"textDecoration":"none", "fontSize":"55px", "fontFamily":"Brush Script MT", "fontStyle":"italic","color":"black", "margin-left":"130px"}}  >Les Paul</Link>
<br></br>
<Link className="Link" to="/Thefoundation">THE FOUNDATION</Link>
<Link className="Link" to="/Themusician">THE MUSICIAN</Link>
<Link className="Link" to="/Education">EDUCATION</Link>
<Link className="Link" to="/Collection">COLLECTION</Link>
<Link className="Link" to="/Theinventor">THE INVENTOR</Link>
<Link className="Link" to="/Awards">AWARDS</Link>
</div>

  <Routes>
  <Route path="/" element={<App/>}  />
  <Route path="/Login" element={<Login/>}  />
  <Route path="/Register" element={<Register/>}  />
  <Route path="/Education" element={<Education/>}  />
  <Route path="/Collection" element={<Collection/>}  />
  <Route path="/Thefoundation" element={<Thefoundation/>}  />
  <Route path="/Theinventor" element={<Theinventor/>}  />
  <Route path="/Themusician" element={<Themusician/>}  />
  <Route path="/Awards" element={<Awards/>} />
  <Route path="/Edu_Elementary" element={<Edu_Elementary/>}/>  
  <Route path="/Edu_Secondary" element={<Edu_Secondary/>}/>
  <Route path="/Edu_Collegiate" element={<Edu_Collegiate/>}/>
  <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
  </Routes>
</Router>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {Routing}
  </React.StrictMode>
);


reportWebVitals();
