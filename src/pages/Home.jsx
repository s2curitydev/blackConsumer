import React from "react";
import image from "../assets/penticton_logo.JPG";
import ReportCase from "../components/ReportCase";

const Home = () => {
  return (
    <div>
      <img src={image} className="img-fluid rounded mx-auto d-block" />
      <hr />
      Penticton, city, southern British Columbia, Canada. It lies between Skaha
      and Okanagan lakes, 245 miles (394 km) east of Vancouver.
      <br />
      <br />
      <h3>Love Penticton!</h3>
      <p />
      <h4>
        Please read the <a href="/About">Website Terms of Use</a> before using
        any feature of the website.
      </h4>
      <ReportCase />
    </div>
  );
};
export default Home;
