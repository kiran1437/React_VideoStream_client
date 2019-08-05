import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  const renderStreamDropDown = () => {
    return (
      <select name="Streams" className="ui dropdown" id="select">
        <option value="">menu</option>
        <option value="list">list</option>
        <option value="create">create</option>
      </select>
    );
  };
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All streams
        </Link>
        {renderStreamDropDown()}
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
