import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) =>
  <button onClick={onClick}> {text} </button>

const Statistic = ({ text, value }) =>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = ({feedback: {good, neutral, bad, total}}) => {
  const calcAverage = (good, neutral, bad, total) => (
    ((good * 1) + (neutral * 0) + (bad * -1)) / total
  ) 

  const positivePercentage = (good, total) => `${(good / total) * 100} %`

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="total" value={total} />
          <Statistic text="average" value={calcAverage(good, neutral, bad, total)} />
          <Statistic text="positive" value={positivePercentage(good, total)} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0, total: 0
  })

  const handleClick = (type) => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
      total: feedback.total + 1
    })
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <div>
        <Button text="good" onClick={() => handleClick('good')}/>
        <Button text="neutral" onClick={() => handleClick('neutral')}/>
        <Button text="bad" onClick={() => handleClick('bad')}/>
      </div>
      {
        feedback.total > 0 ?
        <Statistics feedback={feedback} /> :
        <p>No feedback given</p>
      }
    </>

  )
}

ReactDOM.render(<App />, document.getElementById('root'));
