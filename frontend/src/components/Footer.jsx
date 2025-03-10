import { Container } from "react-bootstrap";
import "./Footer.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light text-center py-3">
      <Container>
        &copy; {new Date().getFullYear()} ATM Recruiter. All Rights Reserved.
      </Container>
    </footer>
  );
};

export default Footer;
