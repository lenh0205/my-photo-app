import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss'

Header.propTypes = {

};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col xs="auto">
            <a 
              className="header__link header__title"
              href="https://youtube.com/easyfrontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Easy Frontend
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              // className="header__link"
              /* activeClassName="header__link--active" */
              className={({isActive}) => isActive ? 'header__link header__link--active' : 'header__link'}
              to="/photos"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;