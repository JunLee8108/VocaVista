"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import styles from "./page.module.css";
import { questions } from "../../../../util/data/data";
import GameIntro from "./GameIntro";
import GameOver from "./GameOver";

export default function GameMain() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [fadeControl, setFadeControl] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let timerID: NodeJS.Timeout | null = null;
    let isMounted = true;

    if (gameStarted && !gameOver && !showAnswer && timer > 0) {
      timerID = setInterval(() => {
        if (isMounted) {
          setTimer((prevTimer) => prevTimer - 1);
        }
      }, 1000);
    }

    if (timer === 0 && currentQuestion < questions.length - 1 && isMounted) {
      setShowAnswer(true);
      timerID = setTimeout(() => {
        if (isMounted) {
          nextQuestion();
        }
      }, 2000);
    }

    return () => {
      isMounted = false;
      if (timerID) {
        clearInterval(timerID);
      }
    };
  }, [gameStarted, gameOver, showAnswer, timer, currentQuestion]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    setFadeControl(true);
    let timer = setTimeout(() => {
      setFadeControl(false);
      setTimer(30);
      setShowAnswer(false);
      setSelectedAnswer("");
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setGameOver(true);
      }
    }, 500);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
    setTimer(30);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <>
      {!gameStarted ? (
        <GameIntro startGame={startGame} />
      ) : gameOver ? (
        <GameOver score={score} restartGame={restartGame} />
      ) : !fadeControl ? (
        <>
          <div className={styles.question}>
            <p>
              <FontAwesomeIcon
                icon={faClock}
                size="lg"
                style={{ marginRight: "10px" }}
              />{" "}
              {timer}s
            </p>
            <p>Score: {score}</p>
          </div>

          {showAnswer && (
            <div className={`${styles.feedback} mg-left-right-auto`}>
              {timer === 0 ? (
                <h3 style={{ color: "#39ff14" }}>"Timed Out"</h3>
              ) : selectedAnswer ===
                questions[currentQuestion].correctAnswer ? (
                <h3 style={{ color: "#4dfdff" }}>"Correct!"</h3>
              ) : (
                <h3 style={{ color: "#ff1818" }}>"Wrong!"</h3>
              )}
              {timer !== 0 && (
                <button onClick={nextQuestion} className={styles.nextButton}>
                  NEXT
                </button>
              )}
            </div>
          )}

          <div className={styles.choices}>
            <p>Translate the following Korean word:</p>
            <h1>{questions[currentQuestion].word}</h1>
            {questions[currentQuestion].choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(choice)}
                disabled={showAnswer}
                className={`${styles.choiceButton} mg-left-right-auto`}
              >
                {choice}
              </button>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
}
