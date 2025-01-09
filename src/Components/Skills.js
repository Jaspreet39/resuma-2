import React from "react";
import "./skills.css";
import CameraFrontIcon from "@material-ui/icons/CameraFront";
import StoreIcon from "@material-ui/icons/Store";

function Skills() {
  return (
    <div className="skills" id="skill">
      <div className="skills_heading">
        <h1>Skills</h1>
        <p>My technical level</p>
      </div>
      <div className="skills_content">
        <div className="skills_frontend">
          <div className="frontend_heading">
            <div className="frontend_title">
              <CameraFrontIcon />
              <h1>Frontend Developer</h1>
            </div>
            <h3>More than 5 years</h3>
          </div>
          <div className="frontend_skillsData">
            <div className="skills-title">
              <h2>HTML</h2>
              <span className="skills_Number">70%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_HTML"></span>
            </div>
          </div>
          <div className="frontend_skillsData">
            <div className="skills-title">
              <h2>CSS</h2>
              <span className="skills_Number">80%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_CSS"></span>
            </div>
          </div>
          <div className="frontend_skillsData">
            <div className="skills-title">
              <h2>JavaScript</h2>
              <span className="skills_Number">50%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_JavScript"></span>
            </div>
          </div>
          <div className="frontend_skillsData">
            <div className="skills-title">
              <h2>React Js, React Native, Next Js</h2>
              <span className="skills_Number">80%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_React"></span>
            </div>
          </div>
          <div className="frontend_skillsData">
            <div className="skills-title">
              <h2>Angular</h2>
              <span className="skills_Number">40%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_Angular"></span>
            </div>
          </div>
        </div>

        <div className="skills_backend">
          <div className="backend_heading">
            <div className="backend_title">
              <StoreIcon />
              <h1>Backend Developer</h1>
            </div>
            <h3>More than 4 Years</h3>
          </div>
          <div className="backend_skillsData">
            <div className="skills-title">
              <h2>Firebase</h2>
              <span>65%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_Firebase"></span>
            </div>
          </div>
          <div className="backend_skillsData">
            <div className="skills-title">
              <h2>Node JS</h2>
              <span>75%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_NodeJs"></span>
            </div>
          </div>
          <div className="backend_skillsData">
            <div className="skills-title">
              <h2>Redux</h2>
              <span>80%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_NodeJs"></span>
            </div>
          </div>
          <div className="backend_skillsData">
            <div className="skills-title">
              <h2>My SQL</h2>
              <span>60%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_MySql"></span>
            </div>
          </div>
          <div className="backend_skillsData">
            <div className="skills-title">
              <h2>Mongo DB</h2>
              <span>85%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_Mongodb"></span>
            </div>
          </div>
        </div>

        <div className="skills_soft">
          <div className="soft_heading">
            <div className="soft_title">
              <StoreIcon />
              <h1>Soft Skills</h1>
            </div>
            <h3>More than 5 Years</h3>
          </div>
          <div className="soft_skillsData">
            <div className="skills-title">
              <h2>Problem Solving</h2>
              <span>85%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_problemSolving"></span>
            </div>
          </div>
          <div className="soft_skillsData">
            <div className="skills-title">
              <h2>Canva</h2>
              <span>90%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_Canva"></span>
            </div>
          </div>
          <div className="soft_skillsData">
            <div className="skills-title">
              <h2>Figma</h2>
              <span>90%</span>
            </div>
            <div className="skills_bar">
              <span className="skills_percentage skills_Figma"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
