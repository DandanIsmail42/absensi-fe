import React from "react";
import { Link } from "react-router-dom";

const Home = ({ title, description }) => {
  return (
    <div>
      {title}
      <Link to={"/login"}>Login</Link>
    </div>
  );
};

export default Home;
