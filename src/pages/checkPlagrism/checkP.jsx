import React, { useEffect, useState } from 'react';
import './checkp.css';
import { Search } from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom";
import getPendingProjects from '../../Api/getnew'; // Ensure you have the correct import path
import NewProject from '../../components/newproject/newproject';
import Pagination from '../../components/pagniation/pagniaton';

const Checkplagiarism = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [specificProject, setSpecificProject] = useState({});
  const [showPro, setShowPro] = useState(false);
  const [edited, setEdited] = useState(true);
  const [index, setIndex] = useState(1);
  const [name, setName] = useState("ReadX");
  const projectsPerPage = 5;
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
  }, [userData, navigate, showPro, edited]);

  const filteredProjects = projects.filter((project) => {
    const regex = new RegExp(`^${searchTerm}`, 'i');
    return regex.test(project.name);
  });

  const paginatedProjects = filteredProjects.slice((index - 1) * projectsPerPage, index * projectsPerPage);

  const clickOnProject = (p) => {
    setSpecificProject(p);
    setShowPro(true);
  };

  return (
    <div className='new'>
      {showPro && <NewProject p={specificProject} setShow={setShowPro} setEdited={setEdited} edited={edited} isNew={true} />}
      
      <div className='line'>
        <h1 className='cRed'>{name} Matching With:</h1>
       
       <div className='btnsMange'>

        <button className='reject'>
        Reject
        </button>
        <button className='accept'>
        Accept
        </button>

       </div>

      </div>
      <div className='projects-list'>
        {paginatedProjects.map((p, idx) => (
          <div onClick={() => clickOnProject(p)} key={idx} className={`project ${p.status === 'pending' ? 'activeproject' : ''}`}>
            <h5 className='project-name'>{p.name}</h5>
            <h5 className='project-field'>{p.field}</h5>
            <h5 className='project-date'>{p.year}</h5>
            <h5 className='project-person'>{p.user_name}</h5>
            <h5 className='project-state'>{p.status}</h5>
          </div>
        ))}
      </div>
      {Math.ceil(filteredProjects.length / projectsPerPage) > 1 && (
        <div className="paginat">
          <Pagination npage={Math.ceil(filteredProjects.length / projectsPerPage)} index={index} setIndex={setIndex} />
        </div>
      )}
    </div>
  );
};

export default Checkplagiarism;
