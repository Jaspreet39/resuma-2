import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Work = (props) => {
  let settings = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
    }
    return (
        <Container {...settings}>
          <Content>
            <h3> CHECK OUT SOME OF MY WORK</h3>
            <Items>
            <Wrap>  
            <a href="https://netflix-clone-cf491.web.app/">            
                 <img src="/Images/netflix.jpeg" alt=""/> 
                 <h3>Netflix Clone (React.js)</h3>   
             </a>             
            </Wrap>
             <Wrap>  
            <a href="https://linkedin-clone-d0547.web.app/">            
                 <img src="/Images/linkedin.png" alt=""/> 
                 <h3>Linked In Clone (React.js)</h3>   
             </a>             
            </Wrap>
               <Wrap>  
            <a href="https://clone-138a4.web.app">            
                 <img src="/Images/youtube2.jpg" alt=""/> 
                 <h3>Youtube Clone (React.js)</h3>   
             </a>             
            </Wrap> 
             <Wrap>  
            <a href="https://covid-19-tracker-bd724.web.app">            
                 <img src="/Images/covidtracker.jpg" alt=""/> 
                 <h3>Covid Tracker Clone (React.js)</h3>   
             </a>             
            </Wrap>  
           </Items>
          </Content>
        </Container>
    )
}

const Container = styled.div `
height: 35vh;
width: 100vw;
background-color: rgba(0,0,0,0.1);
display: flex;
align-items: center;
justify-content: center;
position:relative;
`

const Content = styled.div `
align-items: center;
justify-content: center;
flex-direction: column;



h3{
  font-size: 17px;

  margin-bottom: 20px;
  text-align: center;
  color: rgba(0,0,0,0.4);
  font-weight: 500;
  align-items: center;
  letter-spacing: 1.5px;
}
`

const Items = styled.div `
/* display: flex; */
/* width: 100%; */
height: 250px;
width: 400px;
overflow-x: hidden;
overflow-y: scroll;
`

const Wrap = styled.div `
/* width: 200px; */
padding-top: 45.25%;
border-radius: 10px;
margin-top: 20px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
border: 3px solid  rgba(249, 249, 249, 0.1);


img{
  inset: 0px;
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  object-fit: cover;
  z-index: -1;
  opacity: 1;
}

h3{
  position: absolute;
  opacity: 0;
  color: white;
  text-align: center;
  top: 20px;
  right: 0;
  left: 0;
  transition: 0.5s ease-in;
  z-index: 1;
}


&:hover{
  transform: scale(1.05);
 background: rgba(0,0,0,1);

  h3{
    opacity: 1;
  }
}
`



export default Work
