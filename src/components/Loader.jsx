import React from "react";
import "../App.scss";
import { loader } from "../assets";

const Loader = () => {
     return (
          <div className="container">
               <div className="loader flex justify-center align-center">
                    <img src={loader} alt="" />
               </div>
          </div>
     );
};

export default Loader;
