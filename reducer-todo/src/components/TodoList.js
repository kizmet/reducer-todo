import React, { useContext } from "react";
import { initialState, reducer } from "../reducers/reducer";
import { List, Typography } from "antd";
import { Store } from "../reducers/reducer";
const TodoList = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <div style={{ background: "#fff", minHeight: 280 }}>
      <List header={<h1>My Todo's</h1>} bordered>
        {state.todos.map(todo => (
          <List.Item
            item={todo}
            key={todo.id}
            className={`todo status-${todo.completed.toString()}`}
          >
            {todo.item}
          </List.Item>
        ))}
      </List>
    </div>
  );
};
export default TodoList;
