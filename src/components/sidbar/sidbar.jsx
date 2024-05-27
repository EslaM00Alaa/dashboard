import React, { useState } from 'react';
import './sidbar.css'
import vector from '../../image/vector.png'
import { ClipboardDataFill} from "react-bootstrap-icons"
import {FileTextFill} from "react-bootstrap-icons"
import {FilterSquareFill} from "react-bootstrap-icons"
import {FileEarmarkArrowUpFill} from "react-bootstrap-icons"
import {GearFill} from "react-bootstrap-icons"
import {ArrowRightSquareFill} from "react-bootstrap-icons"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const SideBar = () => {
    const [active, setactive] = useState(1);
    const navigate = useNavigate();
  return (
    <div className='sidebar'>

      <div className='userinfo'>

       <div className='imagee'>
        <img src={vector} alt='no ' />
       </div>
       
        <div className='textinfo'>
            <h3>AbdulRahman M</h3>
            <p>@abdulrahman-mm</p>
        </div>

      </div>

      <div className='links-top'>
      
     <Link  to={'/'} onClick={() => setactive(1)} className={`link ${active === 1 ? 'active' : ''}`}>
        <ClipboardDataFill />
        <span>Reports</span> 
    </Link>
    <Link to={'/newprojects'} onClick={() => setactive(2)} className={`link ${active === 2 ? 'active' : ''}`}>
        <FileTextFill />
        <span>New Projects</span> 
    </Link>
    <Link to={'/previousprojects'} onClick={() => setactive(3)} className={`link ${active === 3 ? 'active' : ''}`}>
        <FilterSquareFill />
        <span>Previous Projects</span> 
    </Link>
    <Link to={'/uploadfiles'} onClick={() => setactive(4)} className={`link ${active === 4 ? 'active' : ''}`}>
        <FileEarmarkArrowUpFill />
        <span>Upload Files</span> 
    </Link>
</div>

    <div className='links-down'>
    <div className='link'>
            <GearFill/>
            <span>
            Setting  
            </span>
        </div>
    <div className='link' onClick={()=>{localStorage.removeItem('userToken');navigate('/login')}}>
            <ArrowRightSquareFill/>
            <span>
            log out  
            </span>  
        </div>
   </div>

    </div>
  );
};

export default SideBar;