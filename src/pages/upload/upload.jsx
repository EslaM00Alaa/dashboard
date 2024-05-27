import React, { useEffect } from 'react';
import './upload.css';
import books from './book.png'
import exam from './audit.png'
import search from './document.png'
import cap from './graduate.png'
import { Link, useNavigate } from "react-router-dom";
const Upload = () => {
  
  const userData = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]); // Added dependencies
  return (
    <div className='upload'>
      <div className='line'>
        <h1>Upload Files</h1>
      </div>
      <div className="line">
      <div className="flex">
        <div>
        <div className="cart mb-10">
            <div className="image">
                <img src={books} alt="" />
            </div>
            <button> Upload a book </button>
        </div>
        <div className="cart ">
        <div className="image">
                <img src={cap} alt="" />
            </div>
            <button> Upload a Project </button>
        </div>
        </div>
       <div>
        <div className="cart mb-10">
               <div className="image">
                <img src={search} alt="" />
            </div>
            <button> Upload a research </button>
        </div>
        <div className="cart">
        <div className="image">
                <img src={exam} alt="" />
            </div>
            <button> Upload a exam </button>
        </div>
       </div>  
      </div>
      </div>
   
    </div>
  );
};

export default Upload;
