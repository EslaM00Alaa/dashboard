import React, { useEffect, useState } from 'react';
import './reports.css'
import Switch from '../../components/switch/switch';
import { Link, useNavigate } from "react-router-dom";
const Reports = () => {
  const [value, setvalue] = useState(50);

  const userData = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]); // Added dependencies

  return (
    <div className='reports'>
        
        <div className='line'>
        <h1>Reports</h1>
        <div className='registertion'>
        Registration availability
        <Switch/>
        </div>
        </div>


       <div className="bgwhite">



     <div className="box-color">
      

      <div className="box">

       <div className="col">
       <div className='nomatch'></div>
        <div className='match'></div>
       </div>
       <div className="col">
       <h4>
         No Matching
         </h4>
         <h4>
          Matching
         </h4>
       </div>
       
      </div>
      
      
       
     
      
      
      
     </div>


       <div className="line mb20 bggray ">
         <h3>Submitted Students</h3>
         <h5> {202}/{404} </h5>
         <div className="prograssParContainer">
          <div style={{width: `${value}%` }} className="prograssPar"></div>
         </div>
       </div>
     
       <div className="line mb20 bggray ">
         <h3>All Projects </h3>
         <div className="prograssParContainer">
          <div style={{width: `${30}%` }} className="prograssPar"></div>
         </div>
       </div>
       </div>
    


       <div className='bgwhite pfildes'>

        <h3> Project Fields </h3>

        <div className="fildesContainer">
 
        <div className="field">
          <div className="par">
          <span>90%</span>
          <div style={{height: `${90}%` }}  className="progressparr"></div> 
          </div>
          <h5>Teach</h5>
        </div>
          
        <div className="field">
          <div className="par">
          <span>50%</span>
            <div style={{height: `${50}%` }} className="progressparr"></div> 
          </div>
          <h5>Teach</h5>
        </div>

        <div className="field">
          <div className="par">
          <span>60%</span>
          <div  style={{height: `${60}%` }} className="progressparr"></div> 
          </div>
          <h5>Teach</h5>
        </div>

        <div className="field">
          <div className="par">
            <span>70%</span>
          <div style={{height: `${70}%` }} className="progressparr"></div> 
          </div>
          <h5>Teach</h5>
        </div>

        <div className="field">
          <div className="par">
          <span>80%</span>
          <div style={{height: `${80}%` }} className="progressparr"></div> 
          </div>
          <h5>Teach</h5>
        </div>

        <div className="field">
          <div className="par">
          <span>90%</span>
          <div style={{height: `${90}%` }} className="progressparr"></div> 
          </div>
          <h5>Teach</h5>
        </div>

        </div>

       </div>
         
    </div>
  );
};

export default Reports;