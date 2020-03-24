import React from 'react';
import {useState} from 'react';
import Form from './components/Form';
import './App.css';



function App() {
  const [teamMembers, setTeamMembers] = useState([])//may want this to be an open array...
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: ''
  })
  const onInputChange = event=> {
    const inputChanged = event.target.name
    const newValueInput = event.target.newValueInput
    setFormValues({
      ...formValues,
      [inputChanged]: newValueInput,
    })
  }
  const onFormSubmit = event=>{
    event.preventDefault()
    const newTeamMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
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
      {/* {teamMembers.map(tm => <div key={tm.id}> {tm.name} {tm.email} {tm.role} </div>)} */}
      {/* might need this ^ for later. */}
    </div>
  );
}

export default App;
