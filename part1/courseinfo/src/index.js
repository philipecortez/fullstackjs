import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => (
  <h1>{course}</h1>
)

const Part = ({ part: {name, exercises} }) => (
  <p> {name} {exercises} </p>
)

const Content = ({parts}) => (
  <>
    {
      parts.map((part, i) =>
        <Part key={i} part={part} />
      )
    }
  </>
)

const Total = ({exercises}) => (
  <p>
    Number of exercises { exercises.reduce((total, n) => total + n, 0) }
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    }, 
    {
      name: 'Using props to pass data',
      exercises: 7,
    }, 
    { 
      name: 'State of a component',
      exercises: 14,
    },
  ]

  return(
    <>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total exercises={parts.map(part => part.exercises)} />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));
