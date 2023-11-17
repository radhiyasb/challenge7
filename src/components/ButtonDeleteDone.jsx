import React from "react";
import { Button } from "react-bootstrap";

function ButtonDeleteDone({ clickedDeleteDone }) {
  return (
    <div className="container">
      <Button
        style={{ width: "25rem", height: "3rem" }}
        variant="danger text-white"
        onClick={clickedDeleteDone}
      >Delete Done Tasks
      </Button>
    </div>
  );
}

export default ButtonDeleteDone;
