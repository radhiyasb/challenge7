import React from "react";
import { Button } from "react-bootstrap";

function ButtonDeleteAll(props) {
  const { clickedDeleteAll } = props;

  return (
    <Button
      style={{ width: "25rem", height: "3rem" }}
      variant="danger text-white"
      onClick={clickedDeleteAll}
    >
      Delete All Tasks
    </Button>
  );
}

export default ButtonDeleteAll;