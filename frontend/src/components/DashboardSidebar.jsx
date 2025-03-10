import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="bg-light vh-100 p-3 border-end" style={{ width: "250px" }}>
      <h5 className="text-center">Dashboard</h5>
      <ListGroup variant="flush">
        <ListGroup.Item action as={Link} to="/dashboard" className="text-primary">📊 Overview</ListGroup.Item>
        <ListGroup.Item action as={Link} to="/dashboard/applied-jobs">📄 Applied Jobs</ListGroup.Item>
        <ListGroup.Item action as={Link} to="/dashboard/saved-jobs">🔖 Saved Jobs</ListGroup.Item>
        <ListGroup.Item action as={Link} to="/dashboard/profile">👤 Profile</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default DashboardSidebar;
