import React from "react";
import "./index.scss";
import hourglass from "../../assets/hourglass.svg";

export const Loading = () => {
  return (
    <div className="loading">
      <p>Loading</p>
      <img className="rotation img-loading" src={hourglass} alt="" />{" "}
    </div>
  );
};
export default Loading;
