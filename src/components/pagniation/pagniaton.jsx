import React from 'react';
import './pagniation.css';

const Pagination = ({ npage, setIndex, index }) => {
  const handleBackClick = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (index < npage) {
      setIndex(index + 1);
    }
  };

  return (
    <div className='Pagination'>
      <button className='Backbtn' disabled={index === 1} onClick={handleBackClick}>
        Back
      </button>

      {Array.from({ length: npage }, (_, i) => (
        <button
          key={i + 1}
          value={i + 1}
          className={`pgnbtn ${i + 1 === index ? 'acttive' : ''}`}
          onClick={() => setIndex(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button className='Nextbtn' disabled={index === npage} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
