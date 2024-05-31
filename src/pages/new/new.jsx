import React, { useEffect, useState } from 'react';
import './new.css';
import { Search } from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom";
import getPendingProjects from '../../Api/getnew'; // Ensure you have the correct import path
import NewProject from '../../components/newproject/newproject';

const New = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sapcificProject, setSapcificProject] = useState({});
  const [showPro,setShowPro] = useState(false)
  

  const userData = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      if (!userData) {
        navigate('/login');
        return;
      }
     
      try {
        const fetchedProjects = await getPendingProjects();
         console.log(fetchedProjects[0]);
        setProjects(fetchedProjects);
      } catch (error) {
        console.error("Failed to fetch pending projects:", error);
      }
    };

    fetchProjects();
  }, [userData, navigate,showPro]);

  const filteredProjects = projects.filter((project) => {
    const regex = new RegExp(`^${searchTerm}`, 'i');
    return regex.test(project.name);
  });


  function clickOnproject (p)
  {
    setSapcificProject(p);
    setShowPro(true)
  }




  return (
    <div className='new'>
      {showPro && <NewProject p={sapcificProject} setShow={setShowPro}/>}
      <div className='line'>
        <h1>New Graduation Projects</h1>
        <div className="search">
          <Search className='searchicon' />
          <input
            type='text'
            placeholder='Search By Name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className='projects-list'>
        {filteredProjects.map((p, index) => (
          <div onClick={()=>clickOnproject(p)} key={index} className={`project ${p.year.slice(-4) === '2024' ? 'activeproject' : ''}`}>
            <h5 className='project-name'>{p.name}</h5>
            <h5 className='project-field'>{p.field}</h5>
            <h5 className='project-date'>{p.year}</h5>
            <h5 className='project-person'>{p.user_name}</h5>
            <h5 className='project-state'>{p.status}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
