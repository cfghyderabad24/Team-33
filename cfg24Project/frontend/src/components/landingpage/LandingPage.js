import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Nav,Navbar ,NavDropdown} from 'react-bootstrap';
import { SiGoogletranslate } from "react-icons/si";

const LandingPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="LandingPage">

      <div className="image-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="https://t3.ftcdn.net/jpg/02/96/68/40/360_F_296684047_piMpS6ThemSFaX10mtfjBDDwzLnidvuJ.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="https://c1.wallpaperflare.com/preview/825/623/772/rice-nature-food-plant.jpg" alt="Slide 3" />
          </div>
        </Slider>
      </div>

      <div className="about-us" id="about">
        <h2 style={{ color: 'green' }}>About Us</h2>
        <h2 style={{ color: 'green' }}>Connect Science and Technology with Development</h2>
        <p>
          Indigenous and Frontier Technology Research Centre (IFTR) was established in 2002 as a not-for-profit organization to help women in rural areas to stand on their own legs by using an evolving technology – eco-friendly paper production using agricultural wastes.
        </p>
        <p>
          Over the years, with the changes in expectations of people, IFTR is engaging itself in different areas to serve the masses.
        </p>
        <p>
          IFTR aims to accelerate the use of modern science and technology for the development of interventions to improve the livelihoods of people and society at large. IFTR will act as a vehicle for taking new technologies/skills to the masses. For this, IFTR will acquire, adopt, adapt, retrofit appropriate science and technology products/processes to provide solutions to practical problems faced by people. Wherever possible, IFTR will also strive to develop suitable technologies/interventions.
        </p>
        <p>
          IFTR invites everyone to participate in its mission to serve the society. IFTR is open for collaboration with like-minded organizations / Institutions / Commercial organizations and prepared to take up research and implementation programmes / projects that suit to its expertise.
        </p>
        <p>
          Let us all make our world a better place for all to have a sustainable life.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
