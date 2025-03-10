import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom"; // ✅ Using Link instead of useNavigate
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const ApplyJob = () => {
  const { jobId } = useParams(); // Get job ID from URL
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [applicationSuccess, setApplicationSuccess] = useState(false); // ✅ State for success message

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleApply = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resume", resume);
    formData.append("coverLetter", coverLetter);
    formData.append("jobId", jobId);

    try {
      await axios.post("http://localhost:5000/api/jobs/apply", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setApplicationSuccess(true); // ✅ Show success message
    } catch (error) {
      alert("Failed to submit application.");
    }
  };

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="p-4 shadow" style={{ width: "500px" }}>
          <h2 className="text-center mb-4">Apply for Job</h2>

          {/* Show success message if application was submitted */}
          {applicationSuccess ? (
            <div className="text-center">
              <p className="text-success">Application Submitted Successfully!</p>
              <Link to="/jobs" className="btn btn-primary">View More Jobs</Link> {/* ✅ Using Link for navigation */}
            </div>
          ) : (
            // Apply Job Form
            <Form onSubmit={handleApply}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Upload Resume (PDF)</Form.Label>
                <Form.Control type="file" accept=".pdf" onChange={handleFileChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cover Letter</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your cover letter..." value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Submit Application
              </Button>
            </Form>
          )}
        </Card>
      </Container>
     
    </>
  );
};

export default ApplyJob;
