import React from 'react'
import styled from 'styled-components'

function Resume() {
    return (
        <Container id="resume">
            <Content>
                <Wrap>
                    <Title>Education</Title>
                    <Detail>
                        <h1>Guru Nanak Dev Engineering College,Ludhiana</h1>
                        <Info>
                            <h3>Bachelor's Degree, Computer Science </h3>
                            <h4>•July 2022</h4>
                        </Info>
                        <p>Graduate with First Class Honours</p>
                    </Detail>       
                </Wrap>
                <Wrap>
                    <Title>Work</Title>
                    <Detail >
                        <h1>Self</h1>
                        <Info>
                            <h3>Bachelor's Degree, Computer Science </h3>
                            <h4>•July 2022</h4>
                        </Info>
                        <p>Graduate with First Class Honours</p>
                    </Detail>
                </Wrap>
            </Content>
        </Container>
    )
}

const Container = styled.div `
min-height: 60vh;
width: 100vw;
display: flex;
justify-content: center;

`

const Content = styled.div `
margin-top: 80px;
display: flex;
flex-direction: column;
align-items: flex-start;
`

const Wrap = styled.div `
display: flex;
align-items: flex-start;
margin-bottom: 120px;
position: relative;

@media(max-width:850px){
   display: flex;
   flex-direction: column;
   
align-items: center;
   justify-content: center;
}

&:before{
    background-color: rgba(0,0,0,0.1);
    border-radius: 10px;
    content: '';
    height: 1px;
    left: 0px;
    right: 0px;
    bottom: -60px;
    width: auto;
    position: absolute;
    transform-origin: left center;
    visibility: visible;
    opacity: 1;
}
`

const Title = styled.div `
font-size: 23px;
font-weight: 500;

position: relative;
margin-right: 100px;
margin-left: 20px;
@media(max-width:850px){
    margin:20px 0;
}
&:before{
    content: '';
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
`


const Detail = styled.div `
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
    @media(max-width:850px){

    justify-content: center;
    align-items: center;
    text-align: center;
    }

h1{
    font-weight: 700;
    font-size: 25px;
    text-align:center;
    @media(max-width:850px){
        font-size: 20px;
    }
}



p{
    margin-top: 20px;
    color: rgba(0,0,0,0.5);
}
`

const Info = styled.div `
display: flex;
align-items: center;
h3{
    margin-top: 10px;
    color: rgba(0,0,0,0.5);
    font-size: 20px;
    font-weight: 400;
}
h4{
     margin-top: 10px;
    color: rgba(0,0,0,0.5);
    font-size: 17px;
    font-weight: 400;
    margin-left: 10px;
}
`

export default Resume
