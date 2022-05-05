import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../UniversalComponents/Footer/arrow.svg";
import Nav from "../UniversalComponents/Nav/Nav";
import Footer from "../UniversalComponents/Footer/Footer";
import Loading from "../LoadingPage/Loading";
import MainContent from "./MainContent";
import TechItems from "./TechSection/TechItems";
import "./landingPage.scss";
import Data from "../../Data/data.json";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <ScrollToTop smooth component={<MySVG />} />
      <MainContent logos={Data} />
      <div className="wrapper">
        <TechItems data={Data} />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
