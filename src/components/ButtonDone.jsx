import React from "react";
import { Button } from "react-bootstrap";

function ButtonDone({ clickedDone }) {
  return (
    <div className="container">
      <Button
        style={{ width: "25rem", height: "3rem" }}
        variant="info text-white"
        onClick={clickedDone}
      >Done
      </Button>
    </div>
  );
}

export default ButtonDone;
