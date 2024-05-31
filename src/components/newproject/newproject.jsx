import React, { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import './newproject.css';

const NewProject = ({ p, setShow }) => {
    const [Edit, setEdit] = useState(false);
    const [details, setDetails] = useState(p.description)
    return (
        <div className='allpage'>
            <div className="projectttt">
                <div className='x' onClick={() => setShow(false)}>
                    <X />
                </div>

                <div className='pName'>
                    <h1>{p.name}</h1>
                </div>

                <div className="lineinfo">
                    <h5>Submitted by</h5>
                    <h4>{p.user_name}</h4>
                </div>
                <div className="lineinfo">
                    <h5>Status</h5>
                    <h4>{p.status}</h4>
                </div>
                <div className="lineinfo">
                    <h5>Field</h5>
                    <h4>{p.field}</h4>
                </div>
                <div className="lineinfo">
                    <h5>Date</h5>
                    <h4>{p.year}</h4>
                </div>

                <div className="Projectdetails">
                    <h3>Project Details</h3>
                    <div className="btns">
                        <button onClick={() => setEdit(true)}>Edit</button>
                        <button onClick={() => setEdit(false)}>Save</button>
                    </div>
                </div>
                <div className="inputDetails">
                    <textarea 
                        disabled={!Edit} 
                        id="inptDetails" 
                        value={details} 
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </div>

            </div>
        </div>
    );
};

export default NewProject;
