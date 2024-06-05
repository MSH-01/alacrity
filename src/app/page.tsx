'use client'

import { useEffect, useState } from 'react';
import Card from './components/card';

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <h1>Meet the team at Alacrity</h1>
      {/* For loop here through team members */}
        {/* Render user card for each user */}
      {/* End for loop */}
      <div className='flex gap-5'>
      {team.members.map((member, index) => (
        <Card key={index} title={member.name} />
      ))}
      </div>


      <h2>About our team</h2>
      {/* Statistics from each member */}
      <div className='flex gap-5 text-center'>
        <div>
          <h3>Average age</h3>
          <p>{avgAge}</p>
        </div>
        <div>
          <h3>Youngest member</h3>
          <p>{youngest}</p>
        </div>
        <div>
          <h3>Oldest member</h3>
          <p>{oldest}</p>
        </div>
      </div>

      <h2>Join our team</h2>
      {/* Form to join the team */}
    </main>
  );
}
