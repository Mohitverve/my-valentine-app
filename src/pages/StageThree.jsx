// src/pages/StageThree.jsx
import React, { useState } from "react";
import { Layout, Card, Typography, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// Example riddles
const riddleData = [
  {
    riddle: "Bubu ke aage dudu, dudu ke aage bubu, btao kitne bubu?",
    answer: "One bubu",
  },
  {
    riddle: "If mohit is Khushi's and khushi's mohit, then who is dudu?",
    answer: "Mohit",
  },
  {
    riddle: "Momos khaogi ya ice cream?",
    answer: "Momos",
  },
];

const StageThree = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isStageComplete, setIsStageComplete] = useState(false);

  const currentRiddle = riddleData[currentIndex];

  const checkRiddle = () => {
    if (
      inputValue.trim().toLowerCase() === currentRiddle.answer.toLowerCase()
    ) {
      const nextIndex = currentIndex + 1;
      if (nextIndex < riddleData.length) {
        setCurrentIndex(nextIndex);
        setInputValue("");
      } else {
        setIsStageComplete(true);
      }
    } else {
      alert("That’s not correct. Try again!");
    }
  };

  const handleContinue = () => {
    navigate("/proposal");
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff5f5" }}>
      <Content style={{ padding: "2rem" }}>
        <Card style={{ maxWidth: 600, margin: "2rem auto" }}>
          <Title level={3}>Stage Three: Riddles</Title>

          {!isStageComplete ? (
            <>
              <Paragraph strong style={{ fontSize: "1.1rem" }}>
                Riddle {currentIndex + 1} of {riddleData.length}
              </Paragraph>
              <Paragraph>{currentRiddle.riddle}</Paragraph>

              <Input
                placeholder="Your answer..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPressEnter={checkRiddle}
              />
              <Button
                type="primary"
                style={{ marginTop: "1rem" }}
                onClick={checkRiddle}
              >
                Check
              </Button>
            </>
          ) : (
            <>
              <Paragraph style={{ color: "green" }}>
                You solved all riddles in Stage Three!
              </Paragraph>
              <Button
                type="primary"
                style={{ backgroundColor: "#eb2f96", borderColor: "#eb2f96" }}
                onClick={handleContinue}
              >
                See Your Final Surprise
              </Button>
            </>
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default StageThree;
