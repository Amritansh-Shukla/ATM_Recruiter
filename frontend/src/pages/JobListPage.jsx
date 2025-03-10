import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    console.log("he")
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs/joblist");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <h2 className="mb-4 text-center">Available Jobs</h2>
        <Row>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <Col md={6} lg={4} key={job.id}>
                <JobCard job={job} />
              </Col>
            ))
          ) : (
            <h4 className="text-center">No jobs available at the moment.</h4>
          )}
        </Row>
      </Container>
    
    </>
  );
};

export default JobList;
