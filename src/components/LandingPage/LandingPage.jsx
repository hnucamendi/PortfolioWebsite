import React, { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../UniversalComponents/Footer/arrow.svg";
import Nav from "../UniversalComponents/Nav/Nav";
import Footer from "../UniversalComponents/Footer/Footer";
import Loading from "../LoadingPage/Loading";
import MainContent from "./MainContent";
import TechItems from "./TechSection/TechItems";
import Axios from "axios";
import "./landingPage.scss";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    Axios.get("http://www.oldjimmy.com:8000")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        throw err;
      });

    Axios.get("http://www.oldjimmy.com:8000/api/cat")
      .then((response) => {
        setCatData(response.data);
      })
      .catch((err) => {
        throw err;
      });

    Axios.get("http://www.oldjimmy.com:8000/logos")
      .then((response) => {
        setLogos(response.data);
        console.log(logos);
      })
      .catch((err) => {
        throw err;
      });

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
      <MainContent logos={logos} />
      <div className="wrapper">
        <TechItems data={data} />
        <Footer catData={catData} />
      </div>
    </>
  );
};

export default LandingPage;
