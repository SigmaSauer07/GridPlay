import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BettingBoard from './components/BettingBoard';

const App = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/boards/')
      .then(response => setBoards(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Betting Boards</h1>
      <ul>
        {boards.map(board => (
          <BettingBoard key={board.id} board={board} />
        ))}
      </ul>
    </div>
  );
}

export default App;
