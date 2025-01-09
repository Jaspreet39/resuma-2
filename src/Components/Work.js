import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  const project = [
    {
      image:
        "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=format%2Ccompress&fm=webp&fit=crop&crop=faces%2Cedges&w=1200&h=675&q=60&cs=tinysrgb",
      link: "https://doc-analysis-tool.vercel.app/",
    },
    {
      image:
        "https://v.w-x.co/Canada_weather_may_10th_1280x720_59386949872.jpg",
      link: "https://weather.com/en-CA/weather/today/l/584018bec07ce9573837c14fa59da031fa6fcdeb1c3c9e3b2b27cb79ce254b5a",
    },
    {
      image:
        "https://mms.businesswire.com/media/20240429744210/en/2113615/23/Amazon_logo.jpg",
      link: "https://amazon-clone-neon-nu.vercel.app",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0q7W29FtGlffXmf-1D95yC2BHG4DivZUVsg&s",
      link: "https://cosmos-45t6.vercel.app",
    },
    {
      image:
        "https://hariharmarbles.com/wp-content/uploads/2022/12/beautiful-shot-modern-house-kitchen-1-scaled.jpg",
      link: "https://harihar-marbles.vercel.app/",
    },
  ];

  return (
    <div
      id="work"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        margin: "20px 0",
      }}
    >
      <h3> CHECK OUT SOME OF MY WORK</h3>
      <div style={{ maxWidth: "80%", padding: "20px 0" }}>
        <Slider {...settings}>
          {project.map((item) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "10px 0",
                padding: "10px 0",
              }}
              key={item.image}
            >
              <a href={item.link} style={{ maxHeight: 200, maxWidth: 500 }}>
                <img
                  height="100%"
                  width="100%"
                  style={{
                    objectFit: "cover",
                  }}
                  src={item.image}
                  alt=""
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Work;
