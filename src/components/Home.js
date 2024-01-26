import React from "react";
import Header from "./Header";
import BriefContent from "./BriefContent";
import Services from "./Services";
import Domains from "./Domains";

const Home = () => {
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
    </div>
  );
};

export default Home;
