import React from "react";
import "./preloader.css";
import { SyncLoader } from "react-spinners";

function Preloader() {
  return (
    <div className="preloader">
      <SyncLoader size={20} />
    </div>
  );
}

export default Preloader;
