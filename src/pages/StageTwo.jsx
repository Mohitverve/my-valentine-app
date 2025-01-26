// src/pages/StageTwo.jsx
import React, { useState } from "react";
import { Layout, Card, Typography, Radio, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// Example memory quiz
const quizData = [
  {
    id: 1,
    question: "What is 2324?",
    options: ["Randsom ass number", "Anniversary", "Love", "Potty"],
    correct: "Anniversary",
  },
  {
    id: 2,
    question: "Which movie did we watch we first met?",
    options: ["Can i Kiss you?", "Hum sth sth hai", "Tamasha", "Bubu and dudu"],
    correct: "Tamasha",
  },
  {
    id: 3,
    question: "What Is your faviourte food?",
    options: ["Pizza", "Momos", "Garlic Bread", "Duduuu"],
    correct: "Duduuu",
  },
];

const StageTwo = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isStageComplete, setIsStageComplete] = useState(false);

  const currentQuestion = quizData[currentIndex];

  const handleNext = () => {
    if (!selectedOption) {
      alert("Please select an answer!");
      return;
    }
    // Check correctness
    if (selectedOption === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentIndex(nextIndex);
      setSelectedOption("");
    } else {
      setIsStageComplete(true);
    }
  };

  const handleContinue = () => {
    navigate("/stage3");
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff5f5" }}>
      <Content style={{ padding: "2rem" }}>
        <Card style={{ maxWidth: 600, margin: "2rem auto" }}>
          <Title level={3}>Stage Two: Memory Quiz</Title>

          {!isStageComplete ? (
            <>
              <Paragraph strong style={{ fontSize: "1.1rem" }}>
                Question {currentIndex + 1} of {quizData.length}
              </Paragraph>
              <Paragraph><strong>{currentQuestion.question}</strong></Paragraph>

              <Radio.Group
                onChange={(e) => setSelectedOption(e.target.value)}
                value={selectedOption}
              >
                {currentQuestion.options.map((opt) => (
                  <Radio
                    key={opt}
                    value={opt}
                    style={{ display: "block", margin: "8px 0" }}
                  >
                    {opt}
                  </Radio>
                ))}
              </Radio.Group>

              <Button
                type="primary"
                style={{ marginTop: "1rem" }}
                onClick={handleNext}
              >
                {currentIndex < quizData.length - 1 ? "Next" : "Finish Quiz"}
              </Button>
            </>
          ) : (
            <>
              <Paragraph style={{ color: "green" }}>
                You’ve answered all questions in Stage Two!
              </Paragraph>
              <Paragraph>
                Your score: {score} / {quizData.length}
              </Paragraph>
              <Button
                type="primary"
                style={{ backgroundColor: "#eb2f96", borderColor: "#eb2f96" }}
                onClick={handleContinue}
              >
                Continue to Stage Three
              </Button>
            </>
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default StageTwo;
