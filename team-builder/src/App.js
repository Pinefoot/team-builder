import React from 'react';
import {useState} from 'react';
import Form from './components/Form';
import { v4 as uuid } from 'uuid';
import './App.css';

const initialTeamMembers = [
  { id: uuid(), name: '', email: '', role: '' },
  
]


function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
  })
  const onInputChange = event=> {
    const inputChanged = event.target.name
    const newValueInput = event.target.value
    setFormValues({
      ...formValues,
      id: uuid(),
      [inputChanged]: newValueInput,
    })
  }
  const onFormSubmit = event=>{
    event.preventDefault()
    const newTeamMember = {
      id: formValues.id,
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }
    setTeamMembers ([...teamMembers, newTeamMember])
  }



  return (
    <div className="App">
      <Form
       onInputChange={onInputChange}
       formValues={formValues} 
       onFormSubmit={onFormSubmit}
      />

      <h2>The Wonderful Team Members!</h2>
       {teamMembers.map(tm => <div key={tm.id}> {`Name: ${tm.name}`}  {`Role: ${tm.role}`} {`Email: ${tm.email}`} </div>)} 
      {/* might need this ^ for later. */}
    </div>
  );
}

export default App;
