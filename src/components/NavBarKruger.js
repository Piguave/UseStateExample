import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png"
function NavbarKruger() {
    return (
        <Navbar bg="light" expand="lg" >
            <Container className=''>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand className='img-container'>
                    <img className='img-fluid' alt="" src={logo} />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarKruger;