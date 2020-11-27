import React from 'react'
import { useSelector } from "react-redux";

export default function() {

  const user = useSelector(state => state.user)
  const tree = useSelector(state => state.tree)

  const summaryItems = Object.keys(user).filter(key => user[key] !== null && user[key] !== 0)
  const summaryQuestions = summaryItems.filter(item => item in tree.questions)

  return (
    <div className="card card--summary">
      <h3>Summary</h3>
      <div>Thank you {user.userName}!</div>
      <div>Number of people: {user.peopleCount}</div>
      <div>Number of days: {user.dayCount}</div>
      <div>Visiting as tourist: {user.isTouristic === true ? "Yes" : "No"}</div>
      
      {
        summaryQuestions.length > 0 &&
        <>
          <h3>Questions</h3>
          {
            summaryQuestions.map((item, j) => (
              <div className="card--summary__question" key={j}>Q: {tree.questions[item]} <br/> A: {user[item] === true ? "Yes" : "No"}</div>
            ))
          }
        </>
      }
    </div>
  )
}