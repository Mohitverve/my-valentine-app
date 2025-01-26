// src/pages/Landing.jsx

import React from "react";
import { Button, Layout, Typography } from "antd";
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Title level={1} style={{ color: "#eb2f96", marginBottom: "2rem" }}>
          A Special Journey for My Love
        </Title>
        <Button
          type="primary"
          size="large"
          style={{ backgroundColor: "#eb2f96", borderColor: "#eb2f96" }}
          onClick={() => navigate("/puzzle")}
        >
          Begin the Adventure
        </Button>
      </Content>
    </Layout>
  );
};

export default Landing;
