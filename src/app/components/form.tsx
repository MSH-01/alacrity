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
          className='bg-[#E0E0E0] text-black p-2 rounded-md' 
        />
        <input 
          type='number' 
          placeholder='Age' 
          value={newAge} 
          onChange={(e) => setNewAge(Number(e.target.value))} 
          className='bg-[#E0E0E0] text-black p-2 rounded-md' 
        />
      </div>
      <button type='submit' className='bg-blue-600 hover:bg-blue-500 transition text-white w-full mt-5 p-2 rounded-md'>
        Join
      </button>
    </form>
  );
};

export default TeamForm;
