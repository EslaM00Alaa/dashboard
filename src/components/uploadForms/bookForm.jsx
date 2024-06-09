import React, { useState } from 'react';
import "./styleForms.css";
import { X } from 'react-bootstrap-icons';
import uploadInstance from '../../Api/uploads';

const BookForm = ({ setShow }) => {
  const [name, setName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [publishingYear, setPublishingYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [ISBN, setISBN] = useState("");
  const [status, setStatus] = useState("");
  const [faculty, setFaculty] = useState("");
  const [pagesNumber, setPagesNumber] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await uploadInstance.uploadBook(
        name,
        authorName,
        description,
        category,
        publishingYear,
        publisher,
        edition,
        ISBN,
        status,
        faculty,
        pagesNumber,
        image
      );

      // Handle success (e.g., close form, show a message, etc.)
      setShow(false);
      alert("Book created successfully!");

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
              placeholder="Author Name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
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
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
              placeholder="Publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              placeholder="Edition"
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="ISBN"
              value={ISBN}
              onChange={(e) => setISBN(e.target.value)}
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
            <input
              type="number"
              placeholder="Pages Number"
              value={pagesNumber}
              onChange={(e) => setPagesNumber(e.target.value)}
              required
            />
            <input
              type="file"
              placeholder="Image"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="row">
            <button type="submit">Create Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
