// src/pages/Landing.jsx
import React from "react";
import { Layout, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title } = Typography;

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff5f5" }}>
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <Title style={{ color: "#eb2f96" }}>Welcome to Our Love Adventure</Title>
        <Button
          type="primary"
          size="large"
          style={{ backgroundColor: "#eb2f96", borderColor: "#eb2f96" }}
          onClick={() => navigate("/stage1")}
        >
          Begin Stage One
        </Button>
      </Content>
    </Layout>
  );
};

export default Landing;
