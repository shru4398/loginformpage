import React from "react";
import { useNavigate } from "react-router-dom";

function View() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/register");
  }
  return (
    <div>
      <button>View</button>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default View;
