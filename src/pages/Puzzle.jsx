// src/pages/Puzzle.jsx

import React, { useState } from "react";
import { Layout, Card, Button, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// Replace with your own puzzle questions/answers
const puzzleData = [
  {
    id: 1,
    question: "Where did we go on our first date?",
    answer: "Vegas mall",
    hint: "You got a Burger",
  },
  {
    id: 2,
    question: "What’s my nickname for you?",
    answer: "Bubuuu",
    hint: "It’s baby with a u",
  },
  {
    id: 3,
    question: "What makes us special?",
    answer: "Our Love",
    hint: "Prem",
  },
];

const Puzzle = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const currentPuzzle = puzzleData[currentIndex];

  const checkAnswer = () => {
    // Compare answers in a case-insensitive way
    if (
      userAnswer.trim().toLowerCase() ===
      currentPuzzle.answer.trim().toLowerCase()
    ) {
      // Move to next puzzle
      setCurrentIndex((prev) => prev + 1);
      setUserAnswer("");
    } else {
      alert("That’s not quite right! Try again or check the hint!");
    }
  };

  // If the user has answered all puzzles, show the final "All puzzles solved" card
  if (currentIndex >= puzzleData.length) {
    return (
      <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
        <Content style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}>
          <Card style={{ maxWidth: 600 }}>
            <Title level={3}>You Did It!</Title>
            <Paragraph>
              You’ve solved all the clues. I have one more surprise for you...
            </Paragraph>
            <Button
              type="primary"
              style={{ backgroundColor: "#eb2f96", borderColor: "#eb2f96" }}
              onClick={() => navigate("/proposal")}
            >
              See the Surprise
            </Button>
          </Card>
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <Content style={{ padding: "2rem" }}>
        <Card style={{ maxWidth: 600, margin: "2rem auto" }}>
          <Title level={3}>Clue #{currentPuzzle.id}</Title>
          <Paragraph>{currentPuzzle.question}</Paragraph>
          <Input
            placeholder="Type your answer..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onPressEnter={checkAnswer}
          />
          <Button
            type="primary"
            style={{ marginTop: "1rem" }}
            onClick={checkAnswer}
          >
            Submit
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            onClick={() => alert(`Hint: ${currentPuzzle.hint}`)}
          >
            Hint
          </Button>
        </Card>
      </Content>
    </Layout>
  );
};

export default Puzzle;
