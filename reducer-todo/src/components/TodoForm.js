import React, { useReducer, useState, useContext } from "react";
import { Store } from "../reducers/reducer";
import { addTodo } from "../actions/Actions";
import { Form, Input, Icon, Button } from "antd";

const TodoForm = () => {
  const { dispatch } = useContext(Store);
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo, dispatch);
    setTodo("");
  };

  return (
    <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
      <Form>
        <Input value={todo} type="text" onChange={handleChange} />
        <Button
          type="dashed"
          style={{ marginTop: "10px" }}
          onClick={handleSubmit}
        >
          <Icon type="plus" /> Add Todo
        </Button>
      </Form>
    </div>
  );
};
export default TodoForm;
