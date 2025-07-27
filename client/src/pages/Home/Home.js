import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/pkl.docx";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";


const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsFillSunFill size={20} />
          )}
        </div>
        <div className="container home-content">
        
            <h2>Hello 👋 I am Piyush Lokhande</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer !",
                    "Mern Stack Developer !",
                    "Java Developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            
            <div className="home-buttons">
              <a className="btn btn-cv" href={Resume} download="pkl.docx">
                Check My Resume
              </a>
            </div>
            </div>
      </div>
    </>
  );
};

export default Home;
