import { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details (Replace with actual API call)
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/profile");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) {
    return <h2 className="text-center mt-5">Loading Profile...</h2>;
  }

  return (
    <>
      <Navbar />
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Card className="p-4 shadow-lg" style={{ width: "400px" }}>
          <Card.Img
            variant="top"
            src={user.profilePicture || "https://via.placeholder.com/150"}
            className="rounded-circle mx-auto d-block"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            <h3>{user.name}</h3>
            <p className="text-muted">{user.email}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Job Role:</strong> {user.role}</p>

            <Button variant="primary" className="w-100">Edit Profile</Button>
          </Card.Body>
        </Card>
      </Container>
     
    </>
  );
};

export default Profile;
