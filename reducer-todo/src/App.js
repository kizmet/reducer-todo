import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const { Header, Content, Footer, Sider } = Layout;
function App() {
  return (
    <Layout>
      <Header>
        <div className="logo">Todo's Reducer</div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <TodoForm />
        </Sider>

        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <TodoList />
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }} />
    </Layout>
  );
}

export default App;
