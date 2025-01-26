// src/pages/StageOne.jsx
import React, { useState } from "react";
import { Layout, Card, Typography, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// Example unscramble puzzles
const puzzleData = [
  {
    scrambledWord: "VEOL",
    unscrambledWord: "love",
    hint: "It’s what I feel for you every day!",
  },
  {
    scrambledWord: "LSIEPM",
    unscrambledWord: "smile",
    hint: "I see this on your face whenever we’re together!",
  },
  {
    scrambledWord: "FAAIMLY",
    unscrambledWord: "family",
    hint: "One day, we’ll build our own together!",
  },
];

const StageOne = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isStageComplete, setIsStageComplete] = useState(false);

  const currentPuzzle = puzzleData[currentIndex];

  const checkPuzzle = () => {
    const correct = currentPuzzle.unscrambledWord.toLowerCase();
    if (answer.trim().toLowerCase() === correct) {
      // Move to next puzzle or complete stage
      const nextIndex = currentIndex + 1;
      if (nextIndex < puzzleData.length) {
        setCurrentIndex(nextIndex);
      } else {
        setIsStageComplete(true);
      }
      setAnswer("");
      return;
    }
    alert("That’s not quite right. Try again!");
  };

  const handleContinue = () => {
    navigate("/stage2");
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#fff5f5" }}>
      <Content style={{ padding: "2rem" }}>
        <Card style={{ maxWidth: 600, margin: "2rem auto" }}>
          <Title level={3}>Stage One: Word Unscramble</Title>

          {!isStageComplete ? (
            <>
              <Paragraph strong style={{ fontSize: "1.1rem" }}>
                Puzzle {currentIndex + 1} of {puzzleData.length}
              </Paragraph>
              <Paragraph>Scrambled Word: <strong>{currentPuzzle.scrambledWord}</strong></Paragraph>
              <Paragraph style={{ color: "#888" }}>
                Hint: {currentPuzzle.hint}
              </Paragraph>

              <Input
                placeholder="Type the unscrambled word..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onPressEnter={checkPuzzle}
              />
              <Button
                type="primary"
                style={{ marginTop: "1rem" }}
                onClick={checkPuzzle}
              >
                Check
              </Button>
            </>
          ) : (
            <>
              <Paragraph style={{ color: "green" }}>
                You completed all puzzles in Stage One!
              </Paragraph>
              <Button
                type="primary"
                style={{ backgroundColor: "#eb2f96", borderColor: "#eb2f96" }}
                onClick={handleContinue}
              >
                Continue to Stage Two
              </Button>
            </>
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default StageOne;
