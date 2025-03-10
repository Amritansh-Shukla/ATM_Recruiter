import { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const JobDetail = () => {
  const { jobId } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${jobId}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

//   if (!job) {
//     return <h2 className="text-center mt-5">Loading Job Details...</h2>;
//   }

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Card className="p-4 shadow">
          <h2 className="mb-3">{job.title}</h2>
          <h5 className="text-muted">{job.company}</h5>
          <p className="mt-2"><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Job Type:</strong> {job.jobType}</p>
          <p className="mt-3"><strong>Description:</strong></p>
          <p>{job.description}</p>

          <div className="mt-4">
            <Button variant="success" as={Link} to={`/apply-job/${jobId}`} className="w-100">
              Apply for this Job
            </Button>
          </div>
        </Card>
      </Container>
      
    </>
  );
};

export default JobDetail;
