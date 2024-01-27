import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "./Header";
import BriefContent from "./BriefContent";
import Services from "./Services";
import Domains from "./Domains";
import { Button } from "@mui/material";
import About from "./About";
import Contact from "./Contact";
import Careers from "./Careers";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    // Adjust the value (e.g., 100) based on when you want the button to appear
    setShowButton(scrolled > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="header" style={{ padding: "10px" }}>
        <Header />
      </div>
      <div className="briefContent">
        <BriefContent />
      </div>
      <div className="services" id="services">
        <Services />
      </div>
      <div className="domains" id="domains">
        <Domains />
      </div>
      <div className="about" id="about">
        <About />
      </div>
      <div className="about" id="careers">
        <Careers />
      </div>
      <div className="contact" id="contact">
        <Contact />
      </div>
      {showButton && (
        <div>
          <ScrollLink
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#002244",
                padding: "10px",
                width: "35px !important",
                minWidth: "unset !important",
                borderRadius: "50%",
                position: "fixed",
                bottom: "0",
                right: "0",
              }}
            >
              <ArrowUpwardIcon fontSize="2px" />
            </Button>
          </ScrollLink>
        </div>
      )}
    </div>
  );
};

export default Home;
