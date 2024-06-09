import React, { useState } from 'react';
import "./styleForms.css";
import { X } from 'react-bootstrap-icons';
import uploadInstance from '../../Api/uploads';

const ExamForm = ({ setShow }) => {
  const [subject_name, setSubjectName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [grade, setGrade] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadInstance.uploadExam(
        subject_name,
        description,
        type,
        grade,
        image
      );

      setShow(false);
      alert("Exam uploaded successfully!");

    } catch (error) {
      alert("Error uploading exam:", error);
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
              placeholder="Subject Name"
              value={subject_name}
              onChange={(e) => setSubjectName(e.target.value)}
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
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              style={{width:"100%"}}
              type="file"
              placeholder="Image"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="row">
            <button type="submit">Upload Exam</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExamForm;
