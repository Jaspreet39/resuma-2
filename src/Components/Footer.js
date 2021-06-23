import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <Content>
            {/* <DownArrow>
              <img src="/Images/dropup.png" alt=""/>
            </DownArrow> */}
                <Li>           
                <a href="https://www.facebook.com/profile.php?id=100066188760462">
                  <img src="/Images/Facebook.png" alt=""/>
                </a>
                <a href="https://www.linkedin.com/in/jaspreet-singh-chopra-b63bb518a/">
                  <img src="/Images/linkedin-191-739516.png" alt=""/>
                </a>
                <a href="https://www.instagram.com/official_pb_39/">
                  <img src="/Images/instagram-logo-A807AD378B-seeklogo.com.png" alt=""/>
                </a>
                <a href="https://github.com/Jaspreet39">
                  <img src="/Images/github.png" alt=""/>
                </a>
               
              </Li>
            </Content>
        </Container>
    )
}

const Container = styled.div `
height: 18vh;
background-color: #ebeeee;
display: flex;
align-items: center;
justify-content: center;
`

const Content = styled.div `
display: flex;
align-items: center;
justify-content: center;
`

const DownArrow = styled.div `
height: 40px;
left: 120px;
width: 40px;
background-color:rgba(0,0,0,0.5);
position: relative;
bottom: 90px;
border-radius: 50%;
cursor: pointer;

img{
    height: 40px;
    position: absolute;
    bottom: 1.5px;
   
}

&:hover{
    background-color: #00bcd4;
    transition-delay: 0.1s;
}
`

const Li = styled.div `
display: flex;
align-items: center;
justify-content: center;

a{
    img{
        height: 30px;
        margin-right: 40px;
        margin-top: 55px;
        margin-bottom: 20px;
    }
}
`

export default Footer
