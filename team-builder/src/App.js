import logo from './logo.svg';
import './App.css';
import React, { memo, useState } from 'react'
import Form from './components/Form'



function App() {

  const [teamList, setTeamList] = useState([
    {
      name: 'Romy Shockey',
      email: 'rkshockey@gmail.com',
      role: 'frontend engineer'
    },
    {
      name: 'Anthony Hopkins',
      email: 'ahopkins@gmail.com',
      role: 'backend engineer'
    }
  ])


  return (
    <div className="App">
    <Form />
      <div className='team'>
        {teamList.map(member => (
          <div className='member' key={member.name}>
            <p>Name: {member.name}</p>
            <p>email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
