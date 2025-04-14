// components/FeedbackPage.jsx
import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineChevronDown } from 'react-icons/hi';




function FeedbackPage({ score, totalQuestions, userAnswers, questions }) {
  const navigate = useNavigate();
  const questionReviewRef = useRef(null);
  const handleScrollToReview = () => {
  questionReviewRef.current?.scrollIntoView({ behavior: 'smooth' });
};


  return (
    <div className="max-w-4xl mt-8  mx-auto p-4 md:p-8 flex flex-col">
      <h1 className="text-xl md:text-xl text-gray-500 font-medium mb-6 text-center">Test Results</h1>

      {/* Score Circle */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-3">
          <div className="w-30 h-30 md:w-24 md:h-24 flex items-center justify-center rounded-full border-8 border-green-700 text-green-700 text-3xl md:text-4xl font-bold shadow-md">
            <span>{score}</span>/{totalQuestions}
          </div>
        </div>
        {/* <p className="text-gray-600 text-base md:text-lg">
          {score === totalQuestions
            ? 'Perfect score 🎉'
            : score >= totalQuestions * 0.7
            ? 'Well done 👏'
            : score >= totalQuestions * 0.5
            ? 'Good effort 😊'
            : 'Keep practicing, you’ll get there 💪'}
        </p> */}
        <p className="text-gray-600 text-xs md:text-lg p-8 py-8">
          While you correctly formed serveral sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.
        </p>
        <button className='border-2 border-blue-600 px-12 py-2 rounded-md text-lg font-semibold text-blue-600 hover:text-blue-500 cursor-pointer' onClick={()=> navigate('/')}>Go to Dashboard</button>
        {/* overhere create the button  */}
        <div className="flex justify-center mb-4">
  <button
    onClick={handleScrollToReview}
    className="mt-8 cursor-pointer"
    aria-label="Scroll to Question Review"
  >
    <HiOutlineChevronDown size={28} />
  </button>
</div>

      </div>


      {/* Question Review */}
      <div ref={questionReviewRef} className="mb-8 space-y-6">
        {questions.map((question, qIndex) => {
          const userAnswer = userAnswers[qIndex] || [];
          const isCorrect = arraysEqual(userAnswer, question.correctAnswer);

          return (
            <div key={qIndex} className={`p-4 rounded-lg shadow-md`}>
              <div className="flex justify-between gap-4 mb-3 items-center">
                <p className="font-medium text-gray-500 bg-gray-100 px-1 rounded-2xl">Prompt</p>
                <p className="font-medium text-lg text-gray-600"><span className='font-semibold text-black'>{qIndex + 1}</span>/<span className='text-gray-500'>{questions.length}</span></p>
              </div>
             

              <div className="flex gap-2 mb-3 items-center">
                <p className="font-medium text-gray-500">Your response </p>
                <span className={`font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
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

      {/* Restart Button */}
      <div className="flex justify-center">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 shadow-md transition cursor-pointer"
          onClick={()=> navigate('/')}
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
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="px-1 font-semibold  text-gray-600">
                {userAnswer[index] || "[blank]"}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>

      {!arraysEqual(userAnswer, correctAnswer) && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="font-medium text-gray-500 mb-1">Correct answer</p>
          <p>
            {parts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < parts.length - 1 && (
                  <span className="px-1 font-semibold  text-gray-600">
                    {correctAnswer[index]}
                  </span>
                )}
              </React.Fragment>
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
