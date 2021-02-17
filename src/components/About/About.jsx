import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import ResumePdf from './Sean_Tarzy_Resume.pdf'

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Sean Tarzy" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Sean Tarzy is a software engineer with a knack for problem solving and creativity.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Languages: Javascript, Ruby, SQL'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Education: Binghamton University, Flatiron School'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || 'Hobbies: Baseball, Movies, Bass Guitar, Science-Fiction'}
                </p>
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href= {ResumePdf}
                    >
                      Resume
                    </a>
                  </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
