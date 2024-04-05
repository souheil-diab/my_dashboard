import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

function AppNavbar() {

  const { t } = useTranslation();
   
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Project </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">{t('home')}</Nav.Link>
            <Nav.Link href="/users">{t('users')}</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          <LanguageSelector/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
