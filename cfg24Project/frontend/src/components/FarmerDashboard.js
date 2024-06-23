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
            <h3>Every Seed Counts</h3>
            <p>Growing Green, Feeding the world</p>
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
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.B3Q9805ooOspoIKELMBatgHaEK?rs=1&pid=ImgDetMain" 
            style={{ height: '230px' }}/>
              <Card.Body>
                <Card.Title><TiWeatherPartlySunny /> Weather</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          

          <Col md={4}>
            <Card onClick={() => navigateTo('/weather')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/4219151/pexels-photo-4219151.jpeg?auto=compress&cs=tinysrgb&w=600" 
            style={{ height: '230px' }}/>
              <Card.Body>
                <Card.Title><TiWeatherPartlySunny /> Schemes</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card onClick={() => navigateTo('/schemes')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/6874481/pexels-photo-6874481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
              style={{ height: '230px' }}/>
              <Card.Body>
                <Card.Title>Availability</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col md={4}>
            <Card onClick={() => navigateTo('/query')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src="https://www.edwiseinternational.com/(X(1)S(zlzloxygkyw44d2jnnxiwdrw))/Images/OurServices/UL-query.jpg" 
              style={{ height: '230px' }} />
              <Card.Body>
                <Card.Title><HiOutlineQuestionMarkCircle /> Queries</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card onClick={() => navigateTo('/report')} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.k8FUKCiuicKLPRO-uLBRcgHaE8?rs=1&pid=ImgDetMain" style={{ height: '230px' }}/>
              <Card.Body>
                <Card.Title><TbReportAnalytics /> My Report</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>

          

          

          <Col md={4}>
            <Card onClick={() => window.location.href ="https://desagri.gov.in/statistics-type/latest-minimum-support-price-msp-statement/d"} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src="https://cdn5.newsnationtv.com/images/2020/12/14/msp-01-22.jpg "  style={{ height: '230px' }}/>
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
