import React, { useState } from 'react';
import axios from 'axios';

const AddJob = () => {
    const [job, setJob] = useState({
        title: '',
        description: '',
        company: '',
        location: '',
        salary: '',
    });

    const handleChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          console.log("hello");
        console.log("Submitting job:", job);
    
       
    
        const response  = await axios.post("http://localhost:5000/api/jobs", job) 

    
        // console.log("Response:", response.data);
        alert("Job posted successfully!");
        
        setJob({ title: "", description: "", company: "", location: "", salary: "" });
      } catch (error) {
        // console.error("Error posting job:", error.response?.data || error.message);
        alert("Failed to post job");
      }
    };
    

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add Job</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-control" name="title" value={job.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={job.description} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" name="company" value={job.company} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" name="location" value={job.location} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input type="number" className="form-control" name="salary" value={job.salary} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Post Job</button>
            </form>
        </div>
    );
};

export default AddJob;
