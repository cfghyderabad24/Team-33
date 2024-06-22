import React from 'react';
import { Carousel, Card, Col, Row, Button, Container } from 'react-bootstrap';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { FaSeedling } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import carousel1 from './carousel1.jpg';
import Chatbot from './Chatbot';

function FarmerDashboard() {
  let navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
        <Chatbot/>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img
            className="d-block mx-auto w-100"
            src={carousel1}
            alt="First slide"
            style={{ height: '400px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img
            className="d-block mx-auto w-100"
            src={carousel1}
            alt="Second slide"
            style={{ height: '400px' }}

          />
        </Carousel.Item>
        <Carousel.Item>
        <Carousel.Caption style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          <img
            className="d-block mx-auto w-100"
            src={carousel1}
            alt="Third slide"
            style={{ height: '400px' }}
          />
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row className='mt-5'>
          <Col md={4}>
            <Card onClick={() => navigateTo('/climate')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><TiWeatherPartlySunny /> Weather</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card onClick={() => navigateTo('/notifications')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><IoMdNotifications /> My Notifications</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card onClick={() => navigateTo('/seed-availability')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><FaSeedling /> Seed Availability</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col md={4}>
            <Card onClick={() => navigateTo('/crop-prediction')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><HiOutlineQuestionMarkCircle /> Crop Prediction</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card onClick={() => navigateTo('/my-report')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><TbReportAnalytics /> My Report</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card onClick={() => navigateTo('/another-component')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FarmerDashboard;
