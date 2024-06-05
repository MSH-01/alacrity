'use client'

import { useEffect, useState } from 'react';
import Card from './components/card';
import TeamForm from './components/form';

export default function Home() {

  // Team members data
  const [team, setTeam] = useState(
    {'members': [
      {'name': 'Alice', 'age': 20, 'role': 'Software Engineer'},
      {'name': 'Bob', 'age': 25, 'role': 'Software Engineer'},
      {'name': 'Carol', 'age': 30, 'role': 'Software Engineer'},
      {'name': 'Dave', 'age': 35, 'role': 'Software Engineer'},
  ]});

  // Team statistics
  const [avgAge, setAvgAge] = useState(0);
  const [youngest, setYoungest] = useState('');
  const [oldest, setOldest] = useState('');

  // New member
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);

  // Calculate team statistics on load and when team changes
  useEffect(() => {
    let totalAge = 0;
    // Set initial values to extremes
    // Could be refactored to store object with name and age
    let youngestAge = 100;
    let oldestAge = 0;
    let youngestName = '';
    let oldestName = '';
    
    // Loop through team members to calculate statistics
    team.members.forEach(member => {
      totalAge += member.age;
      if (member.age < youngestAge) {
        youngestAge = member.age;
        youngestName = member.name;
      }
      if (member.age > oldestAge) {
        oldestAge = member.age;
        oldestName = member.name;
      }
    });

    // Set statistics states
    setAvgAge(totalAge / team.members.length);
    setYoungest(youngestName);
    setOldest(oldestName);
    // include team in dependencies to recalculate when team changes
  }, [team]);

  function joinTeam() {
    if (!newName || !newAge){
      alert('Please enter a name and age');
      return;  
    };

    setTeam({members: [...team.members, {name: newName, age: newAge, role: 'Software Engineer'}]});
    setNewName('');
    setNewAge(0);
  }

  return (
    <main className="flex flex-col justify-center items-center p-20">
      {/* BG */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      
      {/* TEAM MEMBERS */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold pb-12'>Meet the Team at Alacrity</h1>
        <div className='flex gap-5 justify-center'>
        {team.members.map((member, index) => (
          <Card key={index} title={member.name} value={member.role} extra={member.age} user />
        ))}
        </div>
      </div>

      {/* TEAM STATISTICS */}
      <div className='text-center mb-12'>
        <h2 className='text-2xl font-bold pb-12'>About our team</h2>
        <div className='flex gap-5 text-center'>
          <div>
            <Card value='Average Age' title={avgAge} />
          </div>
          <div>
            <Card value='Youngest Member' title={youngest} />
          </div>
          <div>
            <Card value='Oldest Member' title={oldest} />
          </div>
        </div>
      </div>

      {/* JOIN THE TEAM */}
      <div className='text-center'>
        <h2 className='text-2xl font-bold pb-12'>Join our team</h2>
        <TeamForm newName={newName} newAge={newAge} setNewName={setNewName} setNewAge={setNewAge} joinTeam={joinTeam} />
      </div>
    </main>
  );
}
