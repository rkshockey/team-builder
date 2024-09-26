import logo from './logo.svg';
import './App.css';
import React, { memo, useState } from 'react'
import Form from './components/Form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [teamList, setTeamList] = useState([
    {
      name: 'Romy Shockey',
      email: 'rkshockey@gmail.com',
      role: 'Frontend Engineer'
    },
    {
      name: 'Anthony Hopkins',
      email: 'ahopkins@gmail.com',
      role: 'Backend Engineer'
    }
  ])
  const [formValues, setFormValues] = useState({initialFormValues})

  function changeForm (name, value) {
    setFormValues({...formValues, [name]: value})
  }

  function submitForm (){
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.name || !newMember.email || !newMember.role) return

    setTeamList(newMember, ...teamList)
  }

  return (
    <div className="App">
    <Form values={formValues} change={changeForm} submit={submitForm} />

      <div className='team'>
        {teamList.map(member => {return (
          <div className='member' key={member.name}>
            <p>Name: {member.name}</p>
            <p>email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        )})}
      </div>
    </div>
  );
}

export default App;
