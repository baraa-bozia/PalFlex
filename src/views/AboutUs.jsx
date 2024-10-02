
import React from "react";
import "../css/about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../images/about.png";
import CountUp from "react-countup";
import ab from '../images/ab.webp';
const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
          <div className="flex flex-row bg-amber-200">
            <div className="about__content text-left ">
              <p className="mt-10 text-lg font-semibold italic mb-6">
                Our company is supported by its  tutors, 
                who collectively provide us with a combination of <span className="text-orange-700">leadership</span> , <br/>
                people, technical, and operational skills.<br/>
                Our Teachers come to work smiling and ready to <span className="text-orange-700">build your dream.</span>  <br/>
                They have a passion for remodeling and are <span className="text-orange-700"> qualified to work</span>  on your Expectation.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Courses</p>
                  </div>

       
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="h-96" src={ab}></img>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;