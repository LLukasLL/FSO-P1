import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({text, value}) => <div>{text}: {value}</div>;

const Statistics = ({good, neutral, bad, stats}) => {
  if (stats === true) {
    return (
      <div>
        <h1>Statistics</h1>
        <Statistic text={'good'} value={good}/>
        <Statistic text={'neutral'} value={neutral}/>
        <Statistic text={'bad'} value={bad}/>
        <Statistic text={'all'} value={good + neutral + bad}/>
        <Statistic text={'avg'} value={(good + neutral + bad)/3}/>
        <Statistic text={'positive'} value={good/(good + neutral + bad)*100 + ' %'}/>
        <Statistic text={'neutral'} value={neutral}/>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No Feedback given</div>
      </div>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [stats, showStats] = useState(false);

  const gClicked = () => {
    setGood(good + 1);
    if (stats === false) { showStats(true); }
  }
  const nClicked = () => {
    setNeutral(neutral + 1);
    if (stats === false) { showStats(true); }
  }
  const bClicked = () => {
    setBad(bad + 1)
    if (stats === false) { showStats(true); }
  }
  return (
    <div>
      <h1>give Feedback</h1>
      <div>
        <Button handleClick={gClicked} text={'good'}/>
        <Button handleClick={nClicked} text={'neutral'}/>
        <Button handleClick={bClicked} text={'bad'}/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} stats={stats}/>
    </div>
  )
}

export default App