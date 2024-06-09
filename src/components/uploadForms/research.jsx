import React, { useState } from 'react';
import "./styleForms.css";
import { X } from 'react-bootstrap-icons';
import uploadInstance from '../../Api/uploads';

const ResearchForm = ({ setShow }) => {
  const [name, setName] = useState("");
  const [researcherName, setResearcherName] = useState("");
  const [description, setDescription] = useState("");
  const [field, setField] = useState("");
  const [publishingYear, setPublishingYear] = useState("");
  const [researcherEmail, setResearcherEmail] = useState("");
  const [status, setStatus] = useState("");
  const [faculty, setFaculty] = useState("");
  const [supervisoryAuthority, setSupervisoryAuthority] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadInstance.uploadResearch(
        name,
        researcherName,
        description,
        researcherEmail,
        status,
        faculty,
        supervisoryAuthority
      );

      setShow(false);
      alert("Research created successfully!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="allpage">
      <div className='form formbok'>
        <div className='x' onClick={() => setShow(false)}>
          <X />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Researcher Name"
              value={researcherName}
              onChange={(e) => setResearcherName(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="number"
              placeholder="Publishing Year"
              value={publishingYear}
              onChange={(e) => setPublishingYear(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Researcher Email"
              value={researcherEmail}
              onChange={(e) => setResearcherEmail(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Faculty"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input style={{width:"100%"}}
              type="text"
              placeholder="Supervisory Authority"
              value={supervisoryAuthority}
              onChange={(e) => setSupervisoryAuthority(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <button type="submit">Create Research</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResearchForm;
