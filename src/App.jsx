import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SentenceIntro from "./components/SentenceIntro"
import Question from "./components/Question"
import FeedbackPage from "./components/FeedbackPage"
import Navbar from "./components/Navbar"
import ErrorScreen from "./components/ErrorScreen"
import LoadingScreen from "./components/LoadingScreen"


function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<SentenceIntro/>}/>
      <Route path="/question" element={<Question/>}/>
      <Route path="/feedback" element={<FeedbackPage/>}/>
        <Route path="/error" element={<ErrorScreen/>}/>
                <Route path="/loading" element={<LoadingScreen/>}/>
    </Routes>
   </Router>
  )
}

export default App
