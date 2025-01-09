import React from "react";
import styled from "styled-components";

function Resume() {
  return (
    <Container id="resume">
      <Content>
        <Wrap>
          <Title>Education</Title>
          <Education>
            <Detail>
              <h1>Loyalist College Toronto</h1>
              <Info>
                <h3>
                  Post Graduate in Computer Software and Database Development
                </h3>
                <h4>May 2023 - Dec 2024</h4>
              </Info>
              <p>Post Graduate with First Class Honours</p>
            </Detail>
            <div style={{ margin: "50px 0" }} />
            <Detail>
              <h1>Guru Nanak Dev Engineering College, Ludhiana</h1>
              <Info>
                <h3>Bachelor's Degree, Computer Science </h3>
                <h4>July 2018 - July 2022</h4>
              </Info>
              <p>Graduate with First Class Honours</p>
            </Detail>
          </Education>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const Content = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
`;

const Education = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 120px;
  position: relative;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: 500;

  position: relative;
  margin-right: 100px;
  margin-left: 20px;
  @media (max-width: 850px) {
    margin: 20px 0;
  }
  &:before {
    content: "";
    background-color: #00bcd4;
    border-radius: 10px;
    bottom: -6px;
    left: 0px;
    height: 2px;
    opacity: 1;
    right: 0px;
    width: auto;
    visibility: visible;
    position: absolute;
    transform-origin: left center;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  @media (max-width: 850px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    @media (max-width: 850px) {
      font-size: 20px;
    }
  }

  p {
    margin-top: 20px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h3 {
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
    font-weight: 400;
  }
  h4 {
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.9);
    font-size: 17px;
    font-weight: 600;
    margin-left: 10px;
  }
`;

export default Resume;
