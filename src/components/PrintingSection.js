import React from "react";
import "../assets/css/PrintingSection.css";
import print from "../assets/img/WelkePremies-right.png";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import four from "../assets/img/four.png";
const PrintingSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-7 col-md-10 col-sm-12 col-xs-12 print_content_main">
            <p className="h4 print_heading">
              The background-image property image
            </p>
            <div className="print_content mt-5">
              <p className="h5 print_content_heading">
                {" "}
                The background-image property
              </p>
              <p className="print_content_para">
                For faster mobile-friendly development, use responsive display
                classes for showing and hiding elements by device.classes for
                showing and hiding elements by device.elements by device.
              </p>
              <img src={one} alt="one" className="one " />
            </div>
            <div className="print_content mt-1">
              <p className="h5 print_content_heading">
                {" "}
                The background-image property
              </p>
              <p className="print_content_para">
                For faster mobile-friendly development, use responsive display
                classes for showing and hiding elements by device.classes for
                showing and hiding elements by
              </p>
              <img src={two} alt="one" className="one " />
            </div>
            <div className="print_content mt-1">
              <p className="h5 print_content_heading">
                {" "}
                The background-image property
              </p>
              <p className="print_content_para">
                For faster mobile-friendly development, use responsive display
                classes for showing and hiding elements by device.classes for
                showing and hiding elements
              </p>
              <img src={three} alt="one" className="one " />
            </div>
            <div className="print_content mt-1">
              <p className="h5 print_content_heading">
                {" "}
                The background-image property
              </p>
              <p className="print_content_para">
                For faster mobile-friendly development, use responsive display
                classes for showing and hiding elements by device.classes for
                showing and hiding elements by
              </p>
              <img src={four} alt="one" className="one " />
            </div>
          </div>
          <div className="col-lg-4 col-md-10 col-sm-12 col-xs-12 print_image_div">
            <img src={print} alt="print_image" className="print_image" />
            <button className="btn print_button ">
              krigg tot 4 premies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingSection;
