import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

function TodoInputPage() {
  const navigate = useNavigate();

  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const taskLength = data.length;
    data.push({
      id: taskLength + 1,
      task,
    });

    return navigate("/");
  };

  return (
    <>
      <div>
        <h3 className="mt-3 text-capitalize text-center">Todo Input</h3>
      </div>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={onSubmit} className="">
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Input/Edit Todo"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="mb-2"
                ></Form.Control>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="info text-white" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TodoInputPage;
