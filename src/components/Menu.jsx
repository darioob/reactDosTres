import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const handleMenu = ({ isActive }) => isActive ? 'menu active' : 'menu'
  return (
    <Navbar className='navbar'>
      <Container>
        <Navbar.Brand href='#home'><img className='navimg' src="https://i.pinimg.com/originals/13/a6/6d/13a66d0143f8c6d02c130941f0a78392.jpg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink className={handleMenu} to='/'>Home</NavLink>
            <NavLink className={handleMenu} to='pokemones'>Pokemones</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
