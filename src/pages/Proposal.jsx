// src/pages/Proposal.jsx
import React, { useState } from "react";
import { Layout, Typography, Button } from "antd";
import Confetti from "react-confetti";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Proposal = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYesClick = () => {
    setShowConfetti(true);
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff5f5" }}>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
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
        <Title level={2} style={{ color: "#eb2f96" }}>
          Will You Be My Valentine?
        </Title>
        <Paragraph style={{ maxWidth: 600, fontSize: "1.2rem" }}>
          My love, from the moment I met you, I knew you were someone special.
          You’ve brought so much joy and warmth into my life, and I want to
          spend the rest of my life making you as happy as you've made me.
        </Paragraph>


        {!showConfetti ? (
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: "#eb2f96", borderColor: "#eb2f96" }}
            onClick={handleYesClick}
          >
            Yes, Yes, Yes!
          </Button>
        ) : (
          <Paragraph
            style={{ color: "#eb2f96", fontWeight: "bold", marginTop: "1.5rem" }}
          >
            You said YES! I love you, always and forever. Chalo ab valentine pe aur bubu dudu bnate h  hehe
          </Paragraph>
        )}
      </Content>
    </Layout>
  );
};

export default Proposal;
