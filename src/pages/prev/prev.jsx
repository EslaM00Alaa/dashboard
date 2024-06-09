import React, { useEffect, useState } from 'react';
import './prev.css';
import { Search } from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom";
import NewProject from '../../components/newproject/newproject';
import Pagination from '../../components/pagniation/pagniaton';
import getAcceptProjects from '../../Api/getprev';

const Prev = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [specificProject, setSpecificProject] = useState({});
  const [showPro, setShowPro] = useState(false);
  const [edited, setEdited] = useState(true);
  const [index, setIndex] = useState(1);
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
        const fetchedProjects = await getAcceptProjects();
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
    <div className='prev'>
      {showPro && <NewProject p={specificProject} setShow={setShowPro} setEdited={setEdited} edited={edited} />}
      <div className='line'>
      <h1>Previous Graduation Projects</h1>
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
        {paginatedProjects.map((p, idx) => (
          <div onClick={() => clickOnProject(p)} key={idx} className={`project ${p.year.slice(-4) === '2024' ? 'activeproject' : ''}`}>
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

export default Prev;
