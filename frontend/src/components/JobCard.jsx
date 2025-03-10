import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Card className="shadow-sm p-3 mb-4">
      <Card.Body>
        <h4>{job.title}</h4>
        <h6 className="text-muted">{job.company}</h6>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>

        <div className="d-flex justify-content-between">
          <Button variant="primary" as={Link} to={`/job-detail/${job.id}`}>
            View Details
          </Button>
          <Button variant="success" as={Link} to={`/apply-job/${job.id}`}>
            Apply Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
