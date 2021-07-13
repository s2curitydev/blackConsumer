import React from "react";
import image from "../assets/mainstreet.jpg";
import ReportCase from "../components/ReportCase";

const About = () => {
  return (
    <div className="mt-3">
      <img src={image} className="img-fluid rounded mx-auto d-block" />
      <h1>Hi-Penticton.com</h1>
      is reated in order to support people who lives in Penticton.
      <br />
      The Penticton is one of the beautiful city in B.C.
      <br />
      I hope all people stay in safe and happy while enjoy the PENTICTON!!
      <br />
      <br />
      Feel free to help us to make this town clean and manner!!!
      <br />
      The shared information must be refered in your responsibility. The site
      will not be involved any situations. Please read the
      <a href="/About"> Website Terms of Use</a> before using any features on
      this website. <br />
      <br />
      <br />
      No registration required! <br />
      Enjoy! <br />
      <br />
      Please report any cases if you prefer to share with people! The private
      information will not be published includes yours.
      <br />
      <ReportCase />
      <br />
      <br />
      <br />
      <h4>Website Terms of Use</h4>
      The Site may include content provided by third parties, including
      materials provided by other users and third-party licensors, syndicators,
      aggregators and/or reporting services.We are not responsible, or liable to
      you or any third party, for the content or accuracy of any materials
      provided by any third parties. THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES
      OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING
      BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND
      FITNESS FOR PARTICULAR PURPOSE. THE FOREGOING DOES NOT AFFECT ANY
      WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
    </div>
  );
};
export default About;
