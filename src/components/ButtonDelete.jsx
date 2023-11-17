import React from "react";
import { Button } from "react-bootstrap";

function ButtonDelete({ onclick }) {
  return (
    <Button variant="danger" size="sm" onClick={onclick}>
      <i className="fas fa-trash" />
    </Button>
  );
}

export default ButtonDelete;
