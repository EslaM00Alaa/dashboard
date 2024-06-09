import React, { useEffect, useState } from 'react';
import './upload.css';
import books from './book.png'
import exam from './audit.png'
import search from './document.png'
import cap from './graduate.png'
import { Link, useNavigate } from "react-router-dom";
import BookForm from '../../components/uploadForms/bookForm';
import ResearchForm from '../../components/uploadForms/research';
import ExamForm from '../../components/uploadForms/examForm';
import ProjectForm from '../../components/uploadForms/projectForm';
const Upload = () => {

  const [showbook, setShowbook] = useState(false);
  const [showresearch, setResearch] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const [showProject, setShowProject] = useState(false);
  

  const userData = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]); // Added dependencies
  return (
    <div className='upload'>

      {showbook&&<BookForm setShow={setShowbook} />}
      {showresearch&&<ResearchForm setShow={setResearch} />}
      {showExam&&<ExamForm setShow={setShowExam} />}
      {showProject&&<ProjectForm setShow={setShowProject} />}


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
            <button onClick={()=>setShowbook(true)}> Upload a book </button>
        </div>
        <div className="cart ">
        <div className="image">
                <img src={cap} alt="" />
            </div>
            <button onClick={()=>setShowProject(true)}> Upload a Project </button>
        </div>
        </div>
       <div>
        <div className="cart mb-10">
               <div className="image">
                <img src={search} alt="" />
            </div>
            <button onClick={()=>setResearch(true)}> Upload a research </button>
        </div>
        <div className="cart">
        <div className="image">
                <img src={exam} alt="" />
            </div>
            <button onClick={()=>setShowExam(true)}> Upload a exam </button>
        </div>
       </div>  
      </div>
      </div>
   
    </div>
  );
};

export default Upload;
