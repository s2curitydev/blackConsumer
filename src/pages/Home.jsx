import React from "react";
import image from "../assets/penticton_logo.jpeg";
import ReportCase from "../components/ReportCase";

const Home = () => {
  return (
    <div className="">
      <img src={image} width="350px" height="320px" />
      <hr />
      Penticton, city, southern British Columbia, Canada. It lies between Skaha
      and Okanagan lakes, 245 miles (394 km) east of Vancouver.
      <br />
      <br />
      <h3>- Do you love Penticton?</h3>
      <h3>- Do you live in Penticton?</h3>
      <p />
      <h4>
        please read the <a href="/About">Website Terms of Use</a> before using
        any feature of the website.
      </h4>
      <ReportCase />
    </div>
  );
};
export default Home;
