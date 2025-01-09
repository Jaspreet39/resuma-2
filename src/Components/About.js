import React from "react";
import styled from "styled-components";
import myimage from "../images/myimage.jpg";

function About() {
  return (
    <Container id="about">
      <Content>
        <img src={myimage} alt="" />
        <AboutContainer>
          <AboutText>
            <h2>About Me</h2>
            <p>
              Hi there! I am Jaspreet! vibrant and imaginative with three years
              of experience developing websites with React and Firebase, I'm a
              Full-Stack Web Developer looking for a Co-op chance to grow my
              talents further and work on creative projects. committed to using
              experience in turning client concepts into aesthetically pleasing
              and useful design solutions while obtaining practical experience
              in a cooperative team setting.
            </p>
          </AboutText>
          <Contact>
            <h2>Contact Detail</h2>
            <ContactDetail>
              <p>Jaspreet Singh</p>
              <p>43 Sedgewick Circle, Brampton, ON, Canada, L7P 2P6</p>
              <p>+1 4378484005</p>
              <p>jassingh0244@gmail.com</p>
            </ContactDetail>
          </Contact>
        </AboutContainer>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 55vh;
  width: 100vw;
  background: linear-gradient(180deg, #05173f, #000000);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  max-width: 60vw;

  padding: 20px 0;

  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    margin-right: 90px;
    margin-bottom: 100px;
    object-fit: cover;
  }

  @media (max-width: 850px) {
    img {
      display: none;
    }
    max-width: 90vw;
  }
`;

const AboutContainer = styled.div`
  margin-right: 20px;
  flex-direction: column;
  text-align: start;
  color: white;
  @media (max-width: 850px) {
    margin-right: 0;
  }
`;

const AboutText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 200px;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  p {
    width: 550px;
    font-weight: 300;
    margin-top: 10px;
    color: rgba(249, 249, 249, 0.6);
    @media (max-width: 950px) {
      width: 100%;
      text-align: justify;
    }
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  h2 {
    font-weight: 500;
  }
`;

const ContactDetail = styled.div`
  margin-top: 10px;
  color: rgba(249, 249, 249, 0.6);

  P {
    margin-top: 10px;
  }
`;

export default About;
