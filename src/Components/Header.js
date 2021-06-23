import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <Content>
                <Wrap>
                    <span>Home</span>
                </Wrap>
                 <Wrap>
                    <span>About</span>
                </Wrap>
                 <Wrap>
                    <span>Resume</span>
                </Wrap>
                 <Wrap>
                    <span>Work</span>
                </Wrap>
                 <Wrap>
                    <span>Contact</span>
                </Wrap>
                 
            </Content>
        </Container>
    )
}

const Container = styled.div `
position: fixed;
top: 0;
z-index: 100;
left: 0;
right: 0;
margin-right: auto;
height: 50px;
`
const Content = styled.div `
display: flex;
align-items: center;
justify-content: center;
`
const Wrap = styled.div `
margin-right: 30px;


 span{
     cursor: pointer;
     color: rgb(249,249,249);
     padding: 2px;
     letter-spacing: 1.42px;
     font-size: 18px;
     line-height: 1.08;
     font-weight: 400;
     margin-top: 10px;
     white-space: nowrap;
     position: relative;

    &:before{
        background-color: rgb(249,249,249);
        border-radius: 0px 0px 0px 4px;
        color: black;
        bottom: -6px;
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
        content: '';
    }

 }

 &:hover{
     span:before{
         transform: scaleX(1);
         visibility: visible;
         opacity: 1 !important;
     }
     span{
         letter-spacing: 2.5px;
     }
 }
`
export default Header
