import React, {useState, useEffect} from 'react';
import Image from 'next/image'
import Logo from './logo.svg'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

const Header = () => {
  const [open, isOpen]= useState(false);
  const [isSticky, setIsSticy]= useState(false);
  const handleClick =()=> {
      isOpen(!open);
    }
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleClick);
    window.addEventListener('scroll', handleSticky);
      return () => {
          window.removeEventListener('scroll', handleSticky);
      };
  });
  const handleSticky = (e) => {
    const scrollTop = window.scrollY;
    if(scrollTop >= 50){
      setIsSticy(true);
    } else{
      setIsSticy(false);      
    }
  };
  
  return (
    <header className={`header-area ${open ? "active" : ""} ${isSticky ? "is-sticky" : ""}`}>
      <Navbar expand='xl'>
        <Container>
          <Link href='/'>
            <a>
              <Image src={Logo.src} width='100px' height='50px' alt=''/>
            </a>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={() => handleClick()} />

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
            <ul className='header-btn'>
              <li>
                <a href="#" className='primary-btn'>
                  Connect Wallet
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
