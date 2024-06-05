import React from 'react';

const TeamForm = ({ newName, newAge, setNewName, setNewAge, joinTeam }: { newName: string, newAge: number, setNewName: (name: string) => void, setNewAge: (age: number) => void, joinTeam: () => void }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); joinTeam(); }}>
      <div className='flex gap-5'>
        <input 
          type='text' 
          placeholder='Name' 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          className='bg-black text-white' 
        />
        <input 
          type='number' 
          placeholder='Age' 
          value={newAge} 
          onChange={(e) => setNewAge(Number(e.target.value))} 
          className='bg-black text-white' 
        />
      </div>
      <button type='submit' className='bg-black text-white w-full mt-5'>
        Join
      </button>
    </form>
  );
};

export default TeamForm;
