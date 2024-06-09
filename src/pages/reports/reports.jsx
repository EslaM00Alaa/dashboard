import React, { useEffect, useState } from 'react';
import './reports.css';
import Switch from '../../components/switch/switch';
import { Link, useNavigate } from "react-router-dom";
import getReports from '../../Api/reports';

const Reports = () => {
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const [submittedStudentsPercentage, setSubmittedStudentsPercentage] = useState(0);
  const [acceptedProjectsPercentage, setAcceptedProjectsPercentage] = useState(0);
  const [projectsByField, setProjectsByField] = useState([]);
  const [maxNumber, setMaxNumber] = useState(0);
  const userData = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    } else {
      (async () => {
        const { registration_status, submitted_students_percentage, accepted_projects_percentage, projectsByField } = await getReports();
        setRegistrationStatus(registration_status === 'opened');
        setSubmittedStudentsPercentage(submitted_students_percentage);
        setAcceptedProjectsPercentage(accepted_projects_percentage);
        setProjectsByField(projectsByField);

        // Calculate maxNumber after projectsByField is updated
        const maxNumber = Math.max(...projectsByField.map(p => p.percentage));
        setMaxNumber(maxNumber);
      })();
    }
  }, [userData, navigate]);

  return (
    <div className='reports'>
      <div className='line'>
        <h1>Reports</h1>
        <div className='registertion'>
          Registration availability
          <Switch checkedState={registrationStatus} />
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
              <h4>No Matching</h4>
              <h4>Matching</h4>
            </div>
          </div>
        </div>

        <div className="line mb20 bggray">
          <h3>Submitted Students</h3>
          <div className="prograssParContainer">
            <div style={{ width: `${submittedStudentsPercentage}%` }} className="prograssPar"></div>
          </div>
        </div>

        <div className="line mb20 bggray">
          <h3>All Projects</h3>
          <div className="prograssParContainer">
            <div style={{ width: `${acceptedProjectsPercentage}%` }} className="prograssPar"></div>
          </div>
        </div>
      </div>

      <div className='bgwhite pfildes'>
        <h3>Project Fields</h3>
        <div className="fildesContainer">
          {projectsByField.map((f, index) => (
            <div key={index} className="field">
              <div className="par">
                <span>{f.percentage}%</span>
                <div style={{ height: `${f.percentage / maxNumber * 100}%` }} className="progressparr"></div>
              </div>
              <h5>{f.field}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
