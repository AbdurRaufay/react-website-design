import React from "react";
import "../assets/css/Services.css";
import onsAnabod from "../assets/img/OnsAanbod.jpg";
import circle from "../assets/img/circle.png";
const Services = () => {
  return (
    <div className="wrapper">
      <div className="container mt-5">
        <div className="row  m-auto ">
          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 ">
            <img src={onsAnabod} alt="" className="services_image" />
            <button className="btn px-4 py-3 service_image_btn">
              otvang uw offerte
            </button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-10 col-xs-10 services_right">
            <p className="h3">Ons aanbod</p>
            <p className="mainpara">
              point of the paragraph. ! Write three supporting or “detail”
              sentences that are about the topic and help illustrate
            </p>

            <img src={circle} alt="circle" className="circle mt-3 ml-3" />

            <p className="h5 he ">Capacitiet</p>
            {/* </div> */}

            <p className=" para">
              {" "}
              point of the paragraph. ! Write three supporting or “detail”
              sentences that are about the topic and help illustrate point of
              the paragraph. ! Write three supporting or “detail” sentences that
              are about the topic and help illustrate
            </p>
            <img src={circle} alt="circle" className="circle mt-3 ml-3" />

            <p className="h5 he ">Kwaliteit</p>
            {/* </div> */}

            <p className=" para">
              {" "}
              point of the paragraph. ! Write three supporting or “detail”
              sentences that are about the topic and help illustrate point of
              the paragraph. ! Write three supporting or “detail” sentences that
              are about the topic and help illustrate
            </p>
            <img src={circle} alt="circle" className="circle mt-3 ml-3" />

            <p className="h5 he ">Oplevertijd</p>
            {/* </div> */}

            <p className=" para">
              {" "}
              point of the paragraph. ! Write three supporting or “detail”
              sentences that are about the topic and help illustrate point of
              the paragraph. ! Write three supporting or “detail” sentences that
              are about the topic and help illustrate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
