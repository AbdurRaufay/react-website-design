import React from "react";
import "../assets/css/TeamSection.css";
import team from "../assets/img/team.jpg";
const TeamSection = () => {
  return (
    <div className="wrapper_team">
      <p className="h3 ">Ons Team</p>
      <p className="h5 team_heading">
        The first value is the value is the image
      </p>
      <p className="team_para">
        The first value is the URL of the image to be used as the background
        image. <br />
        <span className="ml-5">
          value is the of the image to be used the of the image to be used
        </span>
      </p>
      <p className="team_para ">
        The first value is the URL of the image to be used as the background
        image. The first value is the of the image to be used the of the image
        to be used
      </p>
      <img src={team} alt="" className="team_image" />
    </div>
  );
};

export default TeamSection;
