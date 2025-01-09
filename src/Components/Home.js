import React, { useEffect } from "react";
import styled from "styled-components";
import TypeWriter from "react-typewriter";

function Home() {
  useEffect(() => {
    const form = document.getElementById("form");
    form.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth / 3 - e.pageX) / 12;
      const y = (window.innerHeight / 3 - e.pageY) / 12;
      form.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    });
    form.addEventListener("mouseout", function () {
      form.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  }, []);

  return (
    <Container id="home">
      <ItemText id="form">
        <h1>
          <TypeWriter typing={0.5}>
            I'm <span>Jaspreet Singh</span>
          </TypeWriter>
        </h1>
        <p>
          {" "}
          <TypeWriter typing={1.7}>
            Based in Canada. Full Time Developer. I eat, sleep and breathe
            React.
          </TypeWriter>
        </p>
        <Li>
          <a href="https://www.facebook.com/profile.php?id=100066188760462">
            <img src="/Images/Facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/jaspreet-singh-chopra-b63bb518a/">
            <img src="/Images/linkedin-191-739516.png" alt="" />
          </a>
          <a href="https://www.instagram.com/official_pb_39/">
            <img
              src="/Images/instagram-logo-A807AD378B-seeklogo.com.png"
              alt=""
            />
          </a>
          <a href="https://github.com/Jaspreet39">
            <img src="/Images/github.png" alt="" />
          </a>
        </Li>
      </ItemText>
      <DownArrow>
        <a href="#about">
          <img src="/Images/down-arrow-5.png" alt="" />
        </a>
      </DownArrow>
    </Container>
  );
}

const Container = styled.div`
  background-image: url("/Images/nebula-stars-sea-night-starry-sky.jpg");
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemText = styled.div`
  perspective: 1000px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 500px;
  width: 900px;
  @media (max-width: 850px) {
    height: 100%;
    width: 100%;
  }
  background: rgba(255, 255, 255, 0.2.5);
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6.5px);
  transform-style: preserve-3d;
  cursor: pointer;
  color: rgb(249, 249, 249);

  h1 {
    font-size: 70px;
    font-weight: 400;
    color: #fff;
    letter-spacing: -2px;
    margin: 0 auto 18px auto;
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
    span {
      letter-spacing: 3px;
    }
  }
  p {
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
    letter-spacing: 2px;

    &:before {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 0px 0px 0px 4px;
      bottom: 200px;
      height: 1px;
      left: 10%;
      opacity: 1;
      position: absolute;
      right: 10%;
      width: auto;
      content: "";
      @media (max-width: 400px) {
        bottom: 180px;
        left: 2%;
        right: 2%;
      }
    }
  }
  @media (max-width: 850px) {
    height: 50%;
    width: 90%;
    h1 {
      font-size: 35px;
    }
  }
`;

const DownArrow = styled.div`
  height: 40px;
  width: 40px;
  background-color: rgba(249, 249, 249, 0.4);
  position: absolute;
  bottom: 20px;
  border-radius: 50%;
  animation: animateDown infinite 1.5s;
  cursor: pointer;

  display: flex;
  align-items: center;

  justify-content: center;
  img {
    height: 25px;
  }

  &:hover {
    background-color: #00bcd4;
    transition-delay: 0.1s;
  }
`;

const Li = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    img {
      height: 30px;
      margin-right: 20px;
      margin-top: 55px;
      margin-bottom: 20px;
    }
  }
`;

export default Home;
