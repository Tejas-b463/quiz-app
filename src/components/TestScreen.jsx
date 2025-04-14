// components/TestScreen.jsx
import React from 'react';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import QuestionDisplay from './QuestionDisplay';
import OptionButtons from './OptionButtons';
import NavigationControls from './NavigationControls';

function TestScreen({
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  timer,
  selectedWords,
  availableOptions,
  handleOptionClick,
  handleFilledBlankClick,
  handleNextQuestion,
  handleQuit
}) {
  const parts = currentQuestion.question.split(/_{13,}/g);
  const blankCount = parts.length - 1;
  const isAllBlanksFilledIn = selectedWords.length === blankCount;

  return (
    <div className="max-w-4xl mt-20 mx-auto p-10 flex flex-col relative shadow-xl rounded-xl">
      <div className="mb-6 flex justify-between items-center">
        <Timer timer={timer} />
        <button 
          className="px-4 py-2 border rounded-md hover:bg-gray-100 cursor-pointer font-semibold"
          onClick={handleQuit}
        >
          Quit
        </button>
      </div>

      <ProgressBar 
        currentQuestionIndex={currentQuestionIndex} 
        totalQuestions={totalQuestions} 
      />

      <h1 className="text-xl text-gray-600 font-semibold text-center mb-8">
        Select the missing words in the correct order
      </h1>
      
      <QuestionDisplay 
        parts={parts} 
        selectedWords={selectedWords} 
        handleFilledBlankClick={handleFilledBlankClick} 
      />
      
      <OptionButtons 
        options={availableOptions} 
        handleOptionClick={handleOptionClick} 
      />
      
      <NavigationControls 
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        isAllBlanksFilledIn={isAllBlanksFilledIn}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
}

export default TestScreen;