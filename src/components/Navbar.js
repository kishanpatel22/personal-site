import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
     <Navbar bg="dark" data-bs-theme="dark">
       <Container>
         <Navbar.Brand href="#home">Home</Navbar.Brand>
         <Nav className="me-auto">
           <Nav.Link href="#about">About</Nav.Link>
           <Nav.Link href="#home">Blogs</Nav.Link>
           <Nav.Link href="#features">Projects</Nav.Link>
           <Nav.Link href="#pricing">Resume</Nav.Link>
         </Nav>
       </Container>
     </Navbar>
  );
}

export default CustomNavbar;
