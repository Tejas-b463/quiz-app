
import React, { useState, useEffect } from 'react';
import TestScreen from './TestScreen';
import FeedbackPage from './FeedbackPage';
import LoadingScreen from './LoadingScreen';
import ErrorScreen from './ErrorScreen';
import QuitConfirmationDialog from './QuitConfirmationDialog';


function App() {
  const [testData, setTestData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [timer, setTimer] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [availableOptions, setAvailableOptions] = useState([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  // Fetch questions from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch from local JSON file
        const response = await fetch('/questions.json');
        const data = await response.json();
        
        setTestData(data);
        setAvailableOptions([...data.data.questions[0].options]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0 && !testCompleted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          setProgress((30 - newTimer) / 30 * 100);
          return newTimer;
        });
      }, 1000);
    } else if (timer === 0) {
      saveCurrentAnswer();
      if (currentQuestionIndex < (testData?.data.questions.length - 1)) {
        goToNextQuestion();
      } else {
        finishTest();
      }
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, timer, testCompleted]);

  const saveCurrentAnswer = () => {
    if (!testData) return;
    
    // Save current answer
    setUserAnswers(prev => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentQuestionIndex] = [...selectedWords];
      return updatedAnswers;
    });
  };

  const goToNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setSelectedWords([]);
    setTimer(30);
    setProgress(0);
    
    // Reset available options for the next question
    setAvailableOptions([...testData.data.questions[nextIndex].options]);
  };

  const handleNextQuestion = () => {
    if (!testData) return;
    
    saveCurrentAnswer();
    
    if (currentQuestionIndex < testData.data.questions.length - 1) {
      goToNextQuestion();
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setIsTimerRunning(false);
    setTestCompleted(true);
    
    // Calculate score
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      const question = testData.data.questions[index];
      const isCorrect = arraysEqual(answer, question.correctAnswer);
      if (isCorrect) correctCount++;
    });
    
    setScore(correctCount);
  };

  const arraysEqual = (a, b) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const handleOptionClick = (option) => {
    if (!testData) return;
    
    const currentQuestion = testData.data.questions[currentQuestionIndex];
    const blankCount = (currentQuestion.question.match(/_{13,}/g) || []).length;
    
    if (selectedWords.length < blankCount) {
      // Add word to selected words
      setSelectedWords([...selectedWords, option]);
      
      // Remove word from available options
      setAvailableOptions(availableOptions.filter(opt => opt !== option));
    }
  };

  const handleFilledBlankClick = (index) => {
    // Get the word that was clicked
    const wordToReturn = selectedWords[index];
    
    // Remove the word from selected words
    const newSelectedWords = [...selectedWords];
    newSelectedWords.splice(index, 1);
    setSelectedWords(newSelectedWords);
    
    // Return the word to available options
    setAvailableOptions([...availableOptions, wordToReturn]);
  };

  const handleQuit = () => {
    setShowQuitConfirm(true);
  };

  const confirmQuit = () => {
    // Reset state
    setCurrentQuestionIndex(0);
    setSelectedWords([]);
    setTimer(30);
    setProgress(0);
    setShowQuitConfirm(false);
    setUserAnswers([]);
    setTestCompleted(false);
    
    // Reset available options to the first question's options
    if (testData) {
      setAvailableOptions([...testData.data.questions[0].options]);
    }
  };

  const cancelQuit = () => {
    setShowQuitConfirm(false);
  };

  const restartTest = () => {
    confirmQuit();
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!testData) {
    return <ErrorScreen message="Error loading questions. Please try again." />;
  }

  // Render feedback screen if test is completed
  if (testCompleted) {
    return (
      <FeedbackPage 
        score={score}
        totalQuestions={testData.data.questions.length}
        userAnswers={userAnswers}
        questions={testData.data.questions}
        onRestartTest={restartTest}
      />
    );
  }

  return (
    <>
      <TestScreen
        currentQuestion={testData.data.questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={testData.data.questions.length}
        timer={timer}
        selectedWords={selectedWords}
        availableOptions={availableOptions}
        handleOptionClick={handleOptionClick}
        handleFilledBlankClick={handleFilledBlankClick}
        handleNextQuestion={handleNextQuestion}
        handleQuit={handleQuit}
      />
      
      {showQuitConfirm && (
        <QuitConfirmationDialog
          onCancel={cancelQuit}
          onConfirm={confirmQuit}
        />
      )}
    </>
  );
}

export default App;