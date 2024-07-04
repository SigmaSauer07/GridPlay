import React from 'react';

const BettingBoard = ({ board }) => (
  <li>
    <h2>{board.name}</h2>
    <p>Type: {board.type}</p>
    <p>Created By: {board.created_by}</p>
    <p>Created At: {new Date(board.created_at).toLocaleString()}</p>
  </li>
);

export default BettingBoard;
