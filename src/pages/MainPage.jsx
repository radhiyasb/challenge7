import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

function MainPage() {
  const [search, setSearch] = useState("");
  const buttonStyle = {
    width: "100%",
    padding: "10px",
  };

  return (
    <>
      <div className="text-center">
        <h3 className="mt-3 text-capitalize text-center">Todo Search</h3>
      </div>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-slate-500 rounded-sm p-4">
        <Row>
          <Col md={7}>
            <Container>
              <div>
                <span>
                  <Form>
                    <InputGroup>
                      <InputGroup.Text>
                        <Search />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search Todo"
                        aria-label="Username"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </InputGroup>
                  </Form>
                </span>
              </div>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col sm={7} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Container>
              <Button
                style={buttonStyle}
                variant="info text-white"
                className="my-3"
              >
                Search
              </Button>
            </Container>
          </Col>
           <Col sm={5} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <Button
              style={buttonStyle}
              variant="info text-white"
              className="my-3 "
              as={Link}
              to={"/todoinput"}
            >
              Add New Task
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="mt-3">
          <TodoList search={search} />
        </div>
      </Container>
    </>
  );
}

export default MainPage;
