import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import firebase from 'firebase'



function Contact() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()
    const [buttonActive, setButtonActive] = useState(false)

    const submit = (e) =>{
        e.preventDefault()
        db.collection('form').add({
            Name: name,
            Email: email,
            Subject: subject,
            Message: message,
            timeStamp : firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>nextStep())        
    }

    const nextStep = () => {
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    useEffect(()=>{
        (name && email && subject && message)? setButtonActive(true): setButtonActive(false)
    },[name,email,subject,message])

    return (
        <Container id="contact">
          <Heading>
            <h2>Get in touch with me a part of my family !</h2>
          </Heading>
            <Content>  
              <Form>     
                <Wrap>
                    <h3>Name</h3>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder=""/>
                </Wrap>
                  <Wrap>
                    <h3>Email</h3>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder=""/>
                </Wrap>
                  <Wrap>
                    <h3>Subject</h3>
                    <input value={subject} onChange={e=>setSubject(e.target.value)} type="text" placeholder=""/>
                </Wrap>
                <Wrap1>
                     <h3>Message</h3>
                    <input value={message} onChange={e=>setMessage(e.target.value)} type="text" placeholder=""/>
                </Wrap1>
                 <Button disabled={!buttonActive} style={{display:buttonActive ? "inline": "none" }} >
                  <button   onClick={submit} type="submit">Submit</button>
               </Button>
               </Form> 
                 <About>
                    <h3>Address and Phone</h3>
                    <AboutText>
                       <AboutText1>
                           <p>Jaspreet Singh</p>
                           <p>jassingh0244@gmail.com</p>
                       </AboutText1>
                       <AboutText2>
                           <p>New Dashmesh Nagar Rajpura, Punjab 140401</p>
                           <p>+91 9463586110</p>
                       </AboutText2>
                    </AboutText>
                </About>  
            </Content>
          
        </Container>
    )
}

const Container = styled.div `
min-height: 110vh;
width: 100vw;
background-color: rgba(0,0,0,0.88);
display: flex;
flex-direction: column;
align-items: center;
    
h2{
    color: rgba(249,249,249,0.4);
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 1.5px;
    margin-top: 80px;
}

`

const Heading = styled.div `
display: flex;
align-items: center;
justify-content: center;
`

const Content = styled.div `
display: flex;
align-items: unset;
justify-content:flex-start;
@media (max-width:768px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`
const About = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 100px;
width: 190px;
margin-top: 50px;

h3{
    color: rgb(249,249,249);
    font-size: 17px;
    letter-spacing: 1px;
}

`

const AboutText = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
@media (max-width:768px){
    margin-bottom: 50px;
}

`

const AboutText1 = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;

P{
    margin-top: 10px;
     color: rgba(249,249,249,0.4);
     font-size: 15px;
     font-weight: 300;
     letter-spacing: 1px;
}
`

const AboutText2 = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
margin-top: 30px;

P{
    margin-top: 10px;
    color: rgba(249,249,249,0.4);
    font-size: 15px;
     font-weight: 300;
    letter-spacing: 1px;
}
`

const Form = styled.div `
display: flex;
align-items: center;
flex-direction: column;

`

const Wrap = styled.div `
display: flex;
align-items: center;
margin-top: 40px;
@media(max-width:768px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3{
        margin-bottom: 10px;
    }
}

h3{
    margin-right: 50px;
    text-align: start;
    color: rgb(249,249,249);
    font-size: 15px;

    &:after{
        content: "*";
        color:  #00bcd4;
        right: 0px;
    }
}

input{
    padding: 20px 70px;
    background-color: rgba(249,249,249,0.1);
    outline: none;
    border: none;
    text-align: start;
    font-size: 18px;
    color: rgb(249,249,249);
}
`
const Wrap1 = styled.div `
display: flex;
align-items: center;
margin-top: 40px;
@media(max-width:768px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;

     h3{
        margin-bottom: 10px;
    }
}

h3{
    margin-right: 50px;
    text-align: start;
    color: rgb(249,249,249);
    font-size: 15px;


      &:after{
        content: "*";
        color:  #00bcd4;
        right: 0px;
    }
}

input{
    padding: 120px 70px;
    background-color: rgba(249,249,249,0.1);
    outline: none;
    border: none;
    text-align: start;
    font-size: 18px;
    color: rgb(249,249,249);
}
`
const Button = styled.div `
background-color: rgba(0,0,0,0.7);
color: white;
width: 120px;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
margin-top: 30px;
cursor: pointer;
position: relative;

button{
    border: none;
    position: absolute;
    outline: none;
    background: none;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: white;
    font-size: 18px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    
}

&:hover{
    background-color: rgb(249,249,249);
    color: black;
    transition: 0.8s ease-in;

    button{
        color: black;
    }
}
`



export default Contact
