import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ApplyForm = ({ onApply }) => {
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(resume);
  };

  return (
    <Form onSubmit={handleSubmit} className="border p-4 rounded shadow">
      <h3 className="text-center">Apply for Job</h3>
      <Form.Group className="mb-3">
        <Form.Label>Upload Resume</Form.Label>
        <Form.Control type="file" onChange={(e) => setResume(e.target.files[0])} required />
      </Form.Group>
      <Button variant="success" type="submit" className="w-100">Submit Application</Button>
    </Form>
  );
};

export default ApplyForm;
