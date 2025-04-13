// components/FeedbackPage.jsx
import React from 'react';

function FeedbackPage({ score, totalQuestions, userAnswers, questions, onRestartTest }) {
  return (
    <div className="max-w-4xl mt-20 mx-auto p-8 flex flex-col shadow-xl rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Test Results</h1>
      
      <div className="text-center mb-8">
        <p className="text-3xl font-bold mb-2">{score}/{totalQuestions}</p>
        <p className="text-gray-600">
          {score === totalQuestions ? 'Perfect score!' : 
           score >= totalQuestions * 0.7 ? 'Good job!' : 
           score >= totalQuestions * 0.5 ? 'Not bad!' : 
           'Keep practicing!'}
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl mb-4 font-semibold">Question Review</h2>
        
        {questions.map((question, qIndex) => {
          const userAnswer = userAnswers[qIndex] || [];
          const isCorrect = arraysEqual(userAnswer, question.correctAnswer);
          
          return (
            <div key={qIndex} className={`mb-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Question {qIndex + 1}</h3>
                <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                  {isCorrect ? 'Correct' : 'Incorrect'}
                </span>
              </div>
              
              <ReviewQuestion 
                question={question.question} 
                userAnswer={userAnswer} 
                correctAnswer={question.correctAnswer} 
              />
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-center">
        <button
          className="px-6 py-3 bg-orange-400 text-white rounded-md hover:bg-orange-500"
          onClick={onRestartTest}
        >
          Restart Test
        </button>
      </div>
    </div>
  );
}

function ReviewQuestion({ question, userAnswer, correctAnswer }) {
  const parts = question.split(/_{13,}/g);
  
  return (
    <div>
      <p className="mb-3">
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className={`inline-block mx-1 px-2 py-1 rounded ${
                userAnswer[index] === correctAnswer[index] ? 'bg-green-200 border-green-300' : 'bg-red-200 border-red-300'
              } border`}>
                {userAnswer[index] || "[blank]"}
              </span>
            )}
          </span>
        ))}
      </p>
      
      {!arraysEqual(userAnswer, correctAnswer) && (
        <div className="mt-2 pt-2 border-t">
          <p className="text-sm font-medium">Correct answer:</p>
          <p>
            {parts.map((part, index) => (
              <span key={index}>
                {part}
                {index < parts.length - 1 && (
                  <span className="inline-block mx-1 px-2 py-1 bg-green-100 border border-green-300 rounded">
                    {correctAnswer[index]}
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

function arraysEqual(a, b) {
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export default FeedbackPage;