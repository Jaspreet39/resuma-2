import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ExternalLink } from "lucide-react";

interface Project {
  image: string;
  link: string;
  title: string;
  description: string;
}

const projects = [
  {
    image:
      "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=format%2Ccompress&fm=webp&fit=crop&crop=faces%2Cedges&w=1200&h=675&q=60&cs=tinysrgb",
    link: "https://doc-analysis-tool.vercel.app/",
    title: "Document Analysis Tool",
    description: "A powerful tool for analyzing documents using AI",
  },
  {
    image: "https://v.w-x.co/Canada_weather_may_10th_1280x720_59386949872.jpg",
    link: "https://weather.com/en-CA/weather/today/l/584018bec07ce9573837c14fa59da031fa6fcdeb1c3c9e3b2b27cb79ce254b5a",
    title: "Weather App",
    description: "Real-time weather forecasting application",
  },
  {
    image:
      "https://mms.businesswire.com/media/20240429744210/en/2113615/23/Amazon_logo.jpg",
    link: "https://amazon-clone-neon-nu.vercel.app",
    title: "Amazon Clone",
    description: "E-commerce platform with full shopping functionality",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0q7W29FtGlffXmf-1D95yC2BHG4DivZUVsg&s",
    link: "https://cosmos-45t6.vercel.app",
    title: "Cosmos",
    description: "Space exploration and astronomy information portal",
  },
  {
    image:
      "https://hariharmarbles.com/wp-content/uploads/2022/12/beautiful-shot-modern-house-kitchen-1-scaled.jpg",
    link: "https://harihar-marbles.vercel.app/",
    title: "Harihar Marbles",
    description: "Luxury marble and stone showcase platform",
  },
];

function Work() {
  return (
    <section id="work" className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            CHECK OUT SOME OF MY WORK
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-14"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-300 transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Work;
