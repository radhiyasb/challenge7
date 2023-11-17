import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import datas from "../data/data.json";
import ButtonAll from "./ButtonAll";
import ButtonDone from "./ButtonDone";
import ButtonTodo from "./ButtonTodo";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import ButtonDeleteDone from "./ButtonDeleteDone";
import ButtonDeleteAll from "./ButtonDeleteAll";
import Checklist from "./CheckList";

function TodoList({ search }) {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    setTodos(datas);
  }, []);

  const sortAll = () => {
    setType("");
  };

  // sort by done
  const sortDone = () => {
    setType("sortDone");
  };

  //sort by todo
  const sortTodo = () => {
    setType("sortTodo");
  };

  //delete done task
  const deleteDoneTask = () => {
    const donetask = todos.filter((todo) => !todo.complete);
    setTodos(donetask);
  };

  //delete all task
  const deleteAllTask = () => {
    setTodos([]);
  };

  const updateList = (type, id) => {
    if (type === "done") {
      let check = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
      setTodos(check);
    }
    if (type === "delete") {
      let del = todos.filter((todo) => todo.id !== id);
      setTodos(del);
    }
  };

  return (
    <>
      <div>
        <h3 className="mt-3 text-capitalize text-center">Todo List</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-slate-400 rounded-sm p-4">
      <Container>
        <Row className="mt-4 flex justify-between">
          <Col md={3} className="justify-content-center flex flex-col ">
            <ButtonAll
              clickedAll={() => {
                sortAll();
              }}
            />
          </Col>
          <Col md={3} className="justify-content-center flex flex-col" >
            <ButtonDone
              clickedDone={() => {
                sortDone();
              }}
            />
          </Col>
          <Col md={3} className="justify-content-center flex flex-col">
            <ButtonTodo
              clickedTodo={() => {
                sortTodo();
              }}
            />
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 ">
        <Row className="mx-auto">
          <Col>
            {todos &&
              type === "sortTodo" &&
              !search &&
              todos
                .filter((todo) => todo.complete === false)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <Checklist />
                              <ButtonEdit />
                              <ButtonDelete
                                onclick={() => updateList("delete", data.id)}
                              />
                            </Stack>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
            {todos &&
              type === "" &&
              !search &&
              todos.map((data) => {
                return (
                  <div key={data.id}>
                    <Container className="square border rounded my-3 p-2">
                      <Row>
                        <Col>
                          <p className={data.complete ? "complete" : null}>
                            {data.task}
                          </p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <Stack direction="horizontal" gap={3}>
                            <Checklist
                              onclick={() => updateList("done", data.id)}
                            />
                            <ButtonEdit />
                            <ButtonDelete
                              onclick={() => updateList("delete", data.id)}
                            />
                          </Stack>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                );
              })}
            {todos &&
              type === "sortDone" &&
              !search &&
              todos
                .filter((todo) => todo.complete === true)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <Checklist />
                              <ButtonEdit />
                              <ButtonDelete
                                onclick={() => updateList("delete", data.id)}
                              />
                            </Stack>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
            {todos &&
              search &&
              todos
                .filter((todo) =>
                  todo.task.toLowerCase().includes(search.toLowerCase())
                )
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <Container className="square border rounded my-3 p-2">
                        <Row>
                          <Col>{data.task}</Col>
                          <Col className="d-flex justify-content-end">
                            <Stack direction="horizontal" gap={3}>
                              <Checklist />
                              <ButtonEdit />
                              <ButtonDelete
                                onclick={() => updateList("delete", data.id)}
                              />
                            </Stack>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  );
                })}
          </Col>
        </Row>
      </Container>
      <div>
        <Container className="mt-4 pb-5 d-flex justify-content-center">
          <Row>
            <Col>
              <ButtonDeleteDone
                clickedDeleteDone={() => {
                  deleteDoneTask();
                }}
              />
            </Col>
            <Col>
              <ButtonDeleteAll
                clickedDeleteAll={() => {
                  deleteAllTask();
                }}
              />
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    </>
  );
}

export default TodoList;
