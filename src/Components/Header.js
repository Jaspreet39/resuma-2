import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
        
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
            <Menu onClick ={()=>setBurgerStatus(true)}/>
            <MenuItems style={{transform:burgerStatus ?"translateX(0)" : "translateX(100%)"}}>
            <ClosedIcon onClick={()=>setBurgerStatus(false)}/>
                <WrapItems>
                    <span>Home</span>
                </WrapItems>
                 <WrapItems>
                    <span>About</span>
                </WrapItems>
                 <WrapItems>
                    <span>Resume</span>
                </WrapItems>
                 <WrapItems>
                    <span>Work</span>
                </WrapItems>
                 <WrapItems>
                    <span>Contact</span>
                </WrapItems>
            </MenuItems>
        </Container>
    )
}

const Container = styled.div `
position: fixed;
z-index: 100;
left: 0;
right: 0;
margin-right: auto;
justify-content: center;
display: flex;
align-items: center;
height: 50px;
;
`
const Content = styled.div `
display: flex;
align-items: center;
justify-content: center;
@media(max-width:768px){
    opacity: 0;
}
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
const Menu = styled(MenuIcon) `
position:absolute;
right: 30px;
color: white;
cursor: pointer;
opacity: 0;
:hover{
    color:#00bcd4 ;
}

@media(max-width:768px){
    opacity: 1;
}
`

const MenuItems = styled.div `
display: flex;
flex-direction: column;
transition: 0.5s ease-in-out;
position: fixed;
top: 0;
bottom: 0;
right: 0;
list-style: none;
backdrop-filter: blur(8.5px);
width: 300px;
height: 50vh;


`
const WrapItems = styled.div `
margin-top: 40px;
cursor: pointer;

span{
    color: black;
    position: relative;
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.4s ease-in-out;

  &:before{
    content: '';
    background-color: black;
    border-radius: 10px;
    bottom: -6px;
    left: 2px;
    height: 2px;
    opacity: 1;
    right: 0px;
    width: auto;
    visibility: visible;
    position: absolute;
    transform-origin: left center;
}
}
&:hover{
    background-color: black;
    span{
         color: white;
    }
}
`
const ClosedIcon = styled(CloseIcon) `
color: white;
cursor: pointer;
margin-top: 10px;
position: absolute;
right: 30px;
top: 5px;
&:hover{
    color: #00bcd4;
}
`
export default Header
