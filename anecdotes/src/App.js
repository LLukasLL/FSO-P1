import { useState } from 'react'

const Ancecdote = ({anecdote}) => <p>{anecdote}</p>;
const Btn = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);

  const zeroVotes = [];
  for (let i = 0; i < anecdotes.length; i += 1) zeroVotes.push(0);
  const [votes, setVotes] = useState(zeroVotes);
  const [mostVotes, setMostVotes] = useState([0,0]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const vote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  }
  for (let i = 0; i < anecdotes.length; i += 1) {
    if (mostVotes[1] < votes[i]) setMostVotes([i,votes[i]]);
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Ancecdote anecdote={anecdotes[selected]}/>
      <p>has {votes[selected]} votes</p>
      <Btn text='Vote' handleClick={() => vote()}/>
      <Btn text='Give me another one!' handleClick={() => setSelected(getRandomInt(0,7))}/>
      <h1>Anecdote with most votes</h1>
      <Ancecdote anecdote={anecdotes[mostVotes[0]]}/>
      <p>has {mostVotes[1]} votes</p>
    </div>
  )
}

export default App