import React from "react";
import { taBort } from "../utility/api";
import '../App.css'

//hamnar här när jag trycker på editkappen
const Personal = ({ handleUpdate, handleDeleteClick,

  handleCancelClick,
  id,
  updateFirstName,
  updateEmail,
  updatePhone,
  updateKontonr,
  setUpdateFirstName,
  setUpdateEmail,
  setUpdatePhone,
  setUpdateKontonr,
  firstName,
  email,
  phone,
  kontonr

}) => {
  return (
    <div className="form-edit">
      <tr key={id} >

        <td>Namn: {firstName}</td>
        <td>Email: {email}</td>
        <td>Telnr: {phone}</td>
        <td>Kontonr: {kontonr}</td>
        <td>
        </td>
      </tr>
      <td>Namn:
        <input
          type="text"
          required="required"
          placeholder="Namn..."
          name="firstName"
          value={updateFirstName}
          onChange={(e) => {
            setUpdateFirstName(e.target.value)
            console.log(updateFirstName)
          }}
        ></input>
      </td>
      <td> Email:
        <input
          type="email"
          required="required"
          placeholder="Email..."
          name="email"
          value={updateEmail}
          onChange={(e) => { setUpdateEmail(e.target.value) }}
        ></input>
      </td>
      <td> Telnr:
        <input
          type="text"
          required="required"
          placeholder="Phone..."
          name="phone"
          value={updatePhone}
          onChange={(e) => { setUpdatePhone(e.target.value) }}
        ></input>
      </td>
      <td> Kontonr:
        <input
          type="text"
          required="required"
          placeholder="Kontonr..."
          name="kontonr"
          value={updateKontonr}
          onChange={(e) => { setUpdateKontonr(e.target.value) }}
        ></input>
      </td>
      <td>
        <button type="submit" onClick={() => handleUpdate(id)}>Edit</button>

        <button type="button" onClick={() => { handleDeleteClick(id); taBort(`/api/delete/${id}`); }}> Delete
        </button>
      </td>
    </div>
  );
};

export default Personal;