import React, { useState, useEffect } from 'react'
import data from './personal-data.json'
import './App.css';
import Personal from './components/Personal';
import { post, get, put } from "./utility/api";

//hämtar alla kontakter från personalata och visar inputs där man kan skriva nåt, 
//addFormData lägger till contacts
const App = () => {


  const [updateFirstName, setUpdateFirstName] = useState('')
  const [updateEmail, setUpdateEmail] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')
  const [updateKontonr, setUpdateKontonr] = useState('')
  const [newContact, setNewContact] = useState([])
  const [contacts, setContacts] = useState(data);
  const [firstName, setFirstName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [kontonr, setKontonr] = useState('')

  useEffect(() => {
    get('/api/read').then(
      (response) => setContacts(response.data),
    )
  }, [setContacts]);

  const handleUpdate = (id) => {
    console.log('firstName', updateFirstName, 'email', updateEmail, 'phone', updatePhone, 'kontonr', updateKontonr)
    put(`/api/update/${id}`,
      {

        firstName: updateFirstName,
        email: updateEmail,
        phone: updatePhone,
        kontonr: updateKontonr
      }
    ).then(
      (response) => {
        get("/api/read").then((response) => setContacts(response.data))
      }
    )
  }
  const handleAdd = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    const newContacts = {
      id: Date.now(),
      firstName,
      email,
      phone,
      kontonr,
    }

    // setContacts(newContacts);
    post("/api/create", newContacts)
    setNewContact([...newContact, newContacts])
  }

  
  //delete knapp
  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };




  /*form för att lägga till lärare*/
  return (

    <div className="contact-card">


    

      <h2>Lägg Till Lärare</h2>

      <form >

        <input type="text"
          name="firstName"
          required="required"
          placeholder="Namn..."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} />
        <input type="email"
          name="email"
          required="required"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input type="text"
          name="phone"
          required="required"
          placeholder="Phone..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)} />
        <input type="text"
          name="kontonr"
          required="required"
          placeholder="Kontonr..."
          value={kontonr}
          onChange={(e) => setKontonr(e.target.value)} />

        <button className='formbtn' type="submit" onClick={handleAdd}>Add</button>

      </form>

      {contacts.map(({ phone, email, firstName, id , kontonr}) => {
      return <div className="card">
        <Personal 
        id={id}
        key={id}
        firstName={firstName}
        email={email}
        phone={phone}
        kontonr ={kontonr}
        handleUpdate={handleUpdate}
        handleDeleteClick={handleDeleteClick}
        updateFirstName={updateFirstName}
        updateEmail={updateEmail}
        updatePhone={updatePhone}
        updateKontonr={updateKontonr}
        setUpdateFirstName={setUpdateFirstName}
        setUpdateEmail={setUpdateEmail}
        setUpdatePhone={setUpdatePhone}
        setUpdateKontonr={setUpdateKontonr}
        />

      </div>
       })}

    </div>
  );
}

export default App;
