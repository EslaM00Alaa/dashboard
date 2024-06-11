import React, { useState } from 'react';
import './sidbar.css';
import vector from './logo.png';
import { ClipboardDataFill, FileTextFill, FilterSquareFill, FileEarmarkArrowUpFill, GearFill, ArrowRightSquareFill } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import logout from '../../Api/logout';

const SideBar = () => {
  const name = JSON.parse(localStorage.getItem('readuxname'))?.username || 'User';
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <div className='sidebar'>
      <div className='userinfo'>
        <div className='imagee'>
          <img src={vector} alt='Profile' />
        </div>
        <div className='textinfo'>
          <h3>{name}</h3>
          <p>@{name}</p>
        </div>
      </div>

      <div className='links-top'>
        <Link to='/' onClick={() => setActive(1)} className={`link ${active === 1 ? 'active' : ''}`}>
          <ClipboardDataFill />
          <span>Reports</span>
        </Link>
        <Link to='/newprojects' onClick={() => setActive(2)} className={`link ${active === 2 ? 'active' : ''}`}>
          <FileTextFill />
          <span>New Projects</span>
        </Link>
        <Link to='/previousprojects' onClick={() => setActive(3)} className={`link ${active === 3 ? 'active' : ''}`}>
          <FilterSquareFill />
          <span>Previous Projects</span>
        </Link>
        <Link to='/uploadfiles' onClick={() => setActive(4)} className={`link ${active === 4 ? 'active' : ''}`}>
          <FileEarmarkArrowUpFill />
          <span>Upload Files</span>
        </Link>
      </div>

      <div className='links-down'>
        <div className='link'>
          <GearFill />
          <span>Settings</span>
        </div>
        <div className='link' onClick={handleLogout}>
          <ArrowRightSquareFill />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
