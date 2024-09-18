import {Data} from '../Data'
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-dark py-4">
      <Container>
        <Row className="mb-3">
          <Col>
            <h3>Sai Tarra</h3>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-dark text-decoration-none">About</a>
              </li>
              <li className="list-inline-item">
                <a href="#project" className="text-dark text-decoration-none">Projects</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mb-3 gap-3">
          <Col>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FaInstagram size={30} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FaTwitter size={30} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={Data.Github} target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FaGithub size={30} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={Data.Linkedin} target="_blank" rel="noopener noreferrer" className="text-dark">
                  <FaLinkedin size={30} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-muted">All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
