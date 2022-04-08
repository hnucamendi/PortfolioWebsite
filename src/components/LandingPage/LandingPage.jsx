import React, { useState, useEffect } from "react";
import Nav from "../UniversalComponents/Nav/Nav";
import Footer from "../UniversalComponents/Footer/Footer";
import Loading from "../LoadingPage/Loading";
import MainContent from "./MainContent";
import TechItems from "./TechSection/TechItems";
import PDItems from "./PDSection/PDItems";
import Axios from "axios";
import "./landingPage.scss";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  const handleBottomScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
      setScrolledToBottom(true);
    } else {
      setScrolledToBottom(false);
    }
  };

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000")
      .then((response) => {
        setData(response.data);
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
      <MainContent />
      <div className={`wrapper`} onScroll={handleBottomScroll}>
        <TechItems data={data} />
        <PDItems data={data} />
        <Footer scrolled={scrolledToBottom} />
      </div>
    </>
  );
};

export default LandingPage;
