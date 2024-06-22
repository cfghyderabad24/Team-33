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
import { SiBitcoinsv } from "react-icons/si";


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
          <h3>Farmers Empowerment</h3>
          <p>Farmers Strength , Nations Wealth</p>
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
        <h3>MSP</h3>
        <p>A promis of Fareness and stability</p>
            
          </Carousel.Caption>
          <img
            className="d-block mx-auto w-100"
            src="https://gumlet.assettype.com/swarajya/2021-09/11e1515e-4c50-4baa-b239-eade89a0c326/image.png?q=75&auto=format%2Ccompress "
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
            src="https://images.pexels.com/photos/2100002/pexels-photo-2100002.jpeg?auto=compress&cs=tinysrgb&w=600 "
            alt="Third slide"
            style={{ height: '400px' }}
          />
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row className='mt-5'>
          <Col md={4}>
            <Card onClick={() => navigateTo('/weather')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><TiWeatherPartlySunny /> Weather</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          

          <Col md={4}>
            <Card onClick={() => navigateTo('/availablef')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><FaSeedling /> Availability</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card onClick={() => navigateTo('/schemes')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title>Schemes</Card.Title>
                
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
            <Card onClick={() => navigateTo('/report')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><TbReportAnalytics /> My Report</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>

          

          

          <Col md={4}>
            <Card onClick={() => navigateTo('/notifications')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={carousel1} />
              <Card.Body>
                <Card.Title><SiBitcoinsv /> MSP</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FarmerDashboard;
