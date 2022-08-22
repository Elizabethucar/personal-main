const express = require("express");

const router = express.Router();

let contacts = [];



router.get("/read", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
   });

  response.json({
    status: "success",
    method: request.method,
    data: contacts,
  });
});

router.post("/create", (request, response) => {
  console.log({
    method: request.method,
    body: request.body,
  });

  const contact = {
    id: request.body.id,
    firstName: request.body.firstName,
    email: request.body.email,
    phone: request.body.phone,
    kontonr: request.body.kontonr,
  };

  contacts.push(contact);

  response.json({
    status: "success",
    method: request.method,
    data: contacts,
  });
});

router.put("/update/:contactId", (request, response) => {
  const contactId = request.params.contactId;

  const id = request.body.id;
  const firstName = request.body.firstName;
  const email = request.body.email;
  const phone = request.body.phone;
  const kontonr = request.body.kontonr;

  const newContact = {
    id:contactId,
    firstName,
    email,
    phone,
    kontonr,
  };

  const contactIndex = contacts.findIndex((contact) => contact.id == contactId);
  contacts[contactIndex] = newContact;

  response.json({
    status: "success",
    method: request.method,
    data: newContact,
  });
});

router.delete("/delete/:contactId", (request, response) => {
  const contactId = request.params.contactId;

  const contactIndex = contacts.findIndex((contact) => contact.id == contactId);
  contacts.splice(contactIndex, 1);

  response.json({
    status: "success",
    method: request.method,
    data: contactId,
  });
});


module.exports = router;
