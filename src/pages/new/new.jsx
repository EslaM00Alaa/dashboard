import React, { useEffect, useState } from 'react';
import './new.css';
import { Search } from 'react-bootstrap-icons';
import { Link, useNavigate } from "react-router-dom";

const New = () => {
  const [projects, setProjects] = useState([
    { name: "ReadX", field: "Education", date: "4/12/2023", namePerson: "Eslam Alaa", state: "Matching" },
    { name: "sata", field: "Education", date: "4/12/2024", namePerson: "Eslam Alaa", state: "Matching" },
    { name: "lolo", field: "Education", date: "4/12/2023", namePerson: "Eslam Alaa", state: "Matching" },
    { name: "yaya", field: "Education", date: "4/12/2024", namePerson: "Eslam Alaa", state: "Matching" },
    { name: "karkyry", field: "Education", date: "4/12/2023", namePerson: "Eslam Alaa", state: "Matching" }
  ]);

  const userData = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]); // Added dependencies
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const regex = new RegExp(`^${searchTerm}`, 'i');
    return regex.test(project.name);
  });

  return (
    <div className='new'>
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
          <div key={index} className={`project ${p.date.slice(-4) === '2024' ? 'activeproject' : ''}`}>
            <h5 className='project-name'>{p.name}</h5>
            <h5 className='project-field'>{p.field}</h5>
            <h5 className='project-date'>{p.date}</h5>
            <h5 className='project-person'>{p.namePerson}</h5>
            <h5 className='project-state'>{p.state}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
