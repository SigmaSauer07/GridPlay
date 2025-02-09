import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function JoinBoard() {
  const [boardId, setBoardId] = useState('');
  const [userId, setUserId] = useState('');

  const joinBoard = async () => {
    const { data, error } = await supabase.from('board_users').insert([{ board_id: boardId, user_id: userId }]);
    if (error) console.error('Error joining board:', error);
    else console.log('Joined board:', data);
  };

  return (
    <div>
      <h1>Join a Board</h1>
      <input
        type="text"
        placeholder="Board ID"
        value={boardId}
        onChange={(e) => setBoardId(e.target.value)}
      />
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={joinBoard}>Join Board</button>
    </div>
  );
}
