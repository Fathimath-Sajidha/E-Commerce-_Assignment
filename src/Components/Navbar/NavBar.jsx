import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
      <img className='logo' src="" alt="logo" />
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Username</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href={'Jewelery'}>Jewelery</NavDropdown.Item>
              <NavDropdown.Item href={'MensClothing'}>Men's Clothing
              </NavDropdown.Item>
              <NavDropdown.Item href={'WomensClothing'}>Women's Clothing</NavDropdown.Item>
              <NavDropdown.Item href={'Electronics'}>Electronics
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className='navbar-right'>
        
        <Nav.Link as={Link} to="/cart">
            <FaShoppingCart size={20} />
            
          </Nav.Link>
       

</div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
