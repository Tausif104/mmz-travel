import Image from 'next/image'
import Logo from './logo.svg'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header-area'>
      <Navbar expand='xl'>
        <Container>
          <Link href='/'>
            <a>
              <Image src={Logo.src} width='100px' height='50px' />
            </a>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#about'>About us</Nav.Link>
              <Nav.Link href='#roadmap'>Road Map</Nav.Link>
              <Nav.Link href='#team'>Team</Nav.Link>
              <Nav.Link href='#faq'>FAQ</Nav.Link>
            </Nav>

            <ul className='social-media'>
              <li>
                <a href=''>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href=''>
                  <i className='fab fa-discord'></i>
                </a>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
