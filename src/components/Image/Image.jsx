import React from "react";
import "./image.css";

export default function Image(props) {
  return <img {...props} className="modified-img" alt="modified-thumb" />;
}
