import React, { useEffect, useState } from 'react';
import './checkp.css';
import { useParams, useNavigate } from 'react-router-dom';
import acerej from '../../Api/acceptRejectP';
import checkPalgarism from '../../Api/checkPalgarism';

const Checkplagiarism = () => {
  const { name, id, description } = useParams();
  const navigate = useNavigate();
  const [matching, setMatching] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProjects = async () => {
      const userData = localStorage.getItem('userToken');
      if (!userData) {
        navigate('/login');
        return;
      }
    
      try {
        const data = await checkPalgarism(description);
        setMatching(data);
      } catch (error) {
        console.error("Error fetching plagiarism data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProjects();
  }, [navigate]);

  const handleAcceptedRejected = async (flag, projectId) => {
    try {
      await acerej(flag, projectId);
      navigate('/newprojects');
    } catch (error) {
      console.error("Error updating project status:", error);
    }
  };

  return (
    <div className='new'>
      <div className='line'>
        <h1 className='cRed'>{name} Matching With:</h1>
        {
          loading ? 
        <div className="btnsMange"></div>:
        <div className='btnsMange'>
        <button className='reject' onClick={() => handleAcceptedRejected(false, id)}>
          Reject
        </button>
        <button className='accept' onClick={() => handleAcceptedRejected(true, id)}>
          Accept
        </button>
      </div>
        }
      

      </div>
      
{
  loading ? <div className="span"></div> :  <div className='matchingdes'>{matching}</div>
}
   


    </div>
  );
};

export default Checkplagiarism;
