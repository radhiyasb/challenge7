import React from "react";
import { Button } from "react-bootstrap";

function Checklist({ onclick }) {
  return (
    <Button variant="info" size="sm" onClick={onclick}>
      <i className="fas fa-check" />
    </Button>
  );
}

export default Checklist;
