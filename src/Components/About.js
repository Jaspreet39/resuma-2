import React from "react";
import myImage from "../images/myimage.jpg";

function About() {
  return (
    <div
      id="about"
      className="min-h-[55vh] w-full bg-gradient-to-b from-[#05173f] to-black flex items-center justify-center py-16"
    >
      <div className="w-full max-w-6xl px-4 md:px-6 flex flex-col md:flex-row items-start gap-8">
        <img
          src={myImage}
          alt="Jaspreet Singh"
          className="hidden md:block h-44 w-44 rounded-full object-cover flex-shrink-0 mr-8"
        />

        <div className="flex-1 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-medium mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Hi there! I am Jaspreet! vibrant and imaginative with three years
              of experience developing websites with React and Firebase, I'm a
              Full-Stack Web Developer looking for a Co-op chance to grow my
              talents further and work on creative projects. committed to using
              experience in turning client concepts into aesthetically pleasing
              and useful design solutions while obtaining practical experience
              in a cooperative team setting.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-medium mb-4">Contact Detail</h2>
            <div className="space-y-3 text-gray-300">
              <p>Jaspreet Singh</p>
              <p>43 Sedgewick Circle, Brampton, ON, Canada, L7P 2P6</p>
              <p className="hover:text-white transition-colors">
                <a href="tel:+14378484005">+1 437-848-4005</a>
              </p>
              <p className="hover:text-white transition-colors">
                <a href="mailto:jassingh0244@gmail.com">
                  jassingh0244@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
