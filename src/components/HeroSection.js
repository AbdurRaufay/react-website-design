import React from 'react'
import banner1 from "../assets/img/banner1.jpg";
import onbanner from "../assets/img/onBannerTag.png";
import "../assets/css/HeroSection.css"
import Form from './Form';
const HeroSection = () => {
  return (
    <>
      <img src={banner1} alt="" className="background_img" />
      <img src={onbanner} className="onbanner_img "  alt="" />
      <div className="Hero_heading">
        <p className="h1 fw-bold hero_main_heading">Gevelrenovatie? Carlux</p>
        <p className="h6 hero_text_para">
          Geniet nu van <span className="hero_text_green">50% korting</span> op
          gevelplint in blauwe <br />
          steen en granietkorel!
        </p>
      </div>
      <div className="container left_para_div ">
        <div className="row form_row">
          <div className="col-lg-6  col-md-12 left_div_para my-5  col-sm-12 ">
            <h4>
              <i class="fa fa-check" aria-hidden="true"></i> Duurzamheid
            </h4>
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              praesentium iusto itaque illum minus saepe, earum iure quaerat
              tempora nostrum voluptatibus perferendis architecto.
            </p>
            <h4>
              <i class="fa fa-check" aria-hidden="true"></i> javascript
            </h4>
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              praesentium iusto itaque illum minus saepe, earum iure quaerat
              tempora nostrum voluptatibus perferendis architecto.
            </p>
            <h4>
              <i class="fa fa-check" aria-hidden="true"></i> HTML
            </h4>
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              praesentium iusto itaque illum minus saepe, earum iure quaerat
              tempora nostrum voluptatibus perferendis architecto.
            </p>
          </div>

          <div className="col-lg-5  col-md-12 col-sm-12 right_form_div">
            <form className="right_div_para  p-4">
            <Form/>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
