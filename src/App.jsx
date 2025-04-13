import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SentenceIntro from "./components/SentenceIntro"
import Question from "./components/Question"
import FeedbackPage from "./components/FeedbackPage"



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<SentenceIntro/>}/>
      <Route path="/question" element={<Question/>}/>
      <Route path="/feedback" element={<FeedbackPage/>}/>
    </Routes>
   </Router>
  )
}

export default App
