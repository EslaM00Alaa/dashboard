import React, { useState } from 'react';
import "./styleForms.css";
import { X } from 'react-bootstrap-icons';
import uploadInstance from '../../Api/uploads';

const ProjectForm = ({ setShow }) => {
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [studentId, setStudentId] = useState("");
  const [technologies, setTechnologies] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadInstance.uploadProject(
        name,
        output,
        field,
        description,
        studentId,
        technologies
      );

      setShow(false);
      alert("Project uploaded successfully!");
    } catch (error) {
      alert("Error uploading project: " + error.message);
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
              placeholder="Output"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Field"
              value={field}
              onChange={(e) => setField(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              required
            />
          </div>

          <div className="row">
            <button type="submit">Create Project</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
