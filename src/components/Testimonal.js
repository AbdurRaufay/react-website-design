import React from "react";
import "../assets/css/Testimonal.css";
import circle from "../assets/img/circle.png";
import onzetroevn from "../assets/img/OnzeTroeven.jpg";
const Testimonal = () => {
  return (
    <div className="container mt-5 me-4">
      <div className="row">
        <div className="col-lg-6  col-md-10 col-sm-10 col-xs-10 testimonal_left">
          <div className="testimonal_heading_div">
            <p className="h3 testimonal_heading">Onze troven</p>
            <p>
              The first value is the URL of the image to be used as the
              background image. The first value is the URL of the image to be
              used as
            </p>
          </div>
          <div>
            <img src={circle} alt="" className="circle_testimonal mt-2" />
            <p className="h4 testimonal_heading_bottom">Onze troven</p>
            <p className="testimonal_para_bottom">
              {" "}
              The first value is the URL of the image to be used as the
              background image. The first value is the URL of the image to be
              used as
            </p>
          </div>
          <div>
            <img src={circle} alt="" className="circle_testimonal mt-2" />
            <p className="h4 testimonal_heading_bottom">Onze troven</p>
            <p className="testimonal_para_bottom">
              {" "}
              The first value is the URL of the image to be used as the
              background image. The first value is the URL of the image to be
              used as
            </p>
          </div>
          <div>
            <img src={circle} alt="" className="circle_testimonal mt-2" />
            <p className="h4 testimonal_heading_bottom">Onze troven</p>
            <p className="testimonal_para_bottom">
              {" "}
              The first value is the URL of the image to be used as the
              background image. The first value is the URL of the image to be
              used as
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-10 col-sm-10 col-xs-12  testimonal_right">
          <img src={onzetroevn} alt="" className="testimonal_right_image" />
          <button className="btn testimonal_button ml-5 ">
            krigg tot 4 premies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
