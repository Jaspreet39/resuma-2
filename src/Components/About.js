import React from 'react'
import styled from 'styled-components'
// import { useLocation } from 'react-router'

function About() {
    // const location = useLocation()
    // const pathName = location.pathname
    // console.log(pathName)
    return (
        <Container id="about">
            <Content>
                <img src="/Images/IMG_20191017_134338.jpg" alt=""/>
                <AboutContainer>
                    <AboutText>
                        <h2>About Me</h2>
                        <p>Hi there! I am Jaspreet! I've been coding for over 2 years now. As a recat. I m studying in GNDEC,Ludhiana in INDIA. i love to write a code in react</p>
                    </AboutText>
                    <Contact>
                        <h2>Contact Detail</h2>
                        <ContactDetail>
                          <p>Jaspreet Singh</p>
                          <p>New Dashmesh Nagar Rajpura Punjab, 140401</p>
                          <p>+91 9463586110</p>
                          <p>jassingh0244@gmail.com</p>
                        </ContactDetail>
                    </Contact>
                </AboutContainer>
            </Content>
        </Container>
    )
}

const Container = styled.div `
height: 55vh;
width: 100vw;
background: linear-gradient(90deg,#4a148c,#3949ab,#37474f);
display: flex;
align-items: center;
justify-content: center;
`

const Content = styled.div `
display: flex;

@media(max-width:850px){
    img{
        opacity: 0;
    }
}

img{
    height: 120px;
    width: 120px;
    border-radius: 50%;
    margin-right: 90px;
    margin-bottom: 100px;
}
`

const AboutContainer = styled.div `
margin-right: 20px;
flex-direction: column;
text-align: start;
color: white;
`

const AboutText = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;


h2{
   font-size: 24px;
   font-weight: 500;
}

p{
    width: 550px;
    font-weight: 300;
    margin-top: 10px;
    color: rgba(249,249,249,0.6);
}
`

const Contact = styled.div `
display: flex;
flex-direction: column;
align-items:flex-start ;
margin-top: 30px;
h2{
    font-weight: 500;
}
`

const ContactDetail = styled.div `
margin-top: 10px;
color: rgba(249,249,249,0.6);

P{
    margin-top: 10px;
}
`


export default About
