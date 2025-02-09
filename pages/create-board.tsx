import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function CreateBoard() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const createBoard = async () => {
    const { data, error } = await supabase.from('boards').insert([{ name, value }]);
    if (error) console.error('Error creating board:', error);
    else console.log('Board created:', data);
  };

  return (
    <div>
      <h1>Create a New Board</h1>
      <input
        type="text"
        placeholder="Board Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Square Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={createBoard}>Create Board</button>
    </div>
  );
}
