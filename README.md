# Sentence Construction Tool 🧑‍💻

## Overview 📝
The **Sentence Construction Tool** is a fun and interactive web application that helps users practice sentence construction. The app presents users with incomplete sentences and a set of word options, and users must select the correct words to fill in the blanks. 

Key features include:
- A 30-second timer for each question ⏱️
- Auto-navigation to the next question when the timer ends 🔄
- A feedback screen displaying the user's performance at the end ✅


## Features 🌟
- **Interactive Sentence Blanks**: The app displays incomplete sentences where users must fill in the missing words.
- **Word Options**: Users are provided with 4 word options to choose from for each blank space.
- **Unselect Word**: Users can unselect a word by clicking on a filled blank, allowing flexibility.
- **Timer**: Each question comes with a 30-second countdown ⏳. The user needs to complete the sentence within this time.
- **Auto-Navigation**: Once the timer expires, the app automatically navigates to the next question ➡️.
- **Next Button**: The "Next" button is enabled only when all blanks are filled. Users need to complete the sentence before moving forward.
- **Feedback Screen**: After finishing the quiz, a feedback screen shows:
  - All correct and incorrect answers 🟢🔴
  - The correct answers for any incorrect responses ✔️
  - User’s score out of 10 🏆
- **Lazy Loading**: The app implements lazy loading to ensure smooth performance when fetching large sets of questions 📥.
- **Error Handling**: Proper error handling ensures that users are shown helpful messages if something goes wrong, like a failed API request ⚠️.

## Technical  ⚙️
- **React**: The app is built using React to manage the user interface.
- **Vite**: Vite is used as the build tool for fast development.
- **Tailwind CSS**: Styling is done using Tailwind CSS for easy and responsive design.
- **JSON API**: The app fetches the questions data from a local API using JSON Server.
- **Vercel**: Deployment is done using the Vercel

## Deployment 🌐
The application has been deployed online and is live for users. You can access it at the following link:

https://quiz-app-nu-ten-14.vercel.app/

## Setup Instructions 🚀

### 1. Clone the repository:

git clone https://github.com/Tejas-b463/quiz-app

