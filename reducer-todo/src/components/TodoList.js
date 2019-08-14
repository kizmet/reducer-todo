import React, { useContext } from "react";
import { initialState, reducer } from "../reducers/reducer";
import { List, Typography } from "antd";
import { Store } from "../reducers/reducer";
import { removeTodo, toggleTodo } from "../actions/Actions";

const TodoList = () => {
  const { state, dispatch } = useContext(Store);

  const handleClick = todoId => {
    toggleTodo(todoId, dispatch);
  };

  const handleRemoveTodo = todoId => {
    removeTodo(todoId, dispatch);
  };

  return (
    <div style={{ background: "#fff", minHeight: 280 }}>
      <List
        header={<h1>My Todo's</h1>}
        bordered
        dataSource={state.todos}
        renderItem={item => (
          <List.Item
            key={item.id}
            value={item.id}
            onClick={() => handleClick(item.id)}
            onDoubleClick={() => handleRemoveTodo(item.id)}
            className={`todo status-${item.completed.toString()}`}
          >
            {item.item}
          </List.Item>
        )}
      />
    </div>
  );
};
export default TodoList;
