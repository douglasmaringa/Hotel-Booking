import React, {useState, useEffect } from 'react';
import axios from 'axios'
import './form.css';

function Form() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  const[cam,setCam]=useState("")

 const handleSubmit = event => {
    event.preventDefault();

   
   
    axios.post(`https://submit-form.com/18VhWkTmqcwMPRd4UXqXR`, {name,message,email,people })
      .then(res => {
        console.log(res);
        setCam("Successfully Booked please proceed to our shop")
        console.log(res.data);
      })
      setName("");
      setMessage("")
      setEmail("")
      setPeople("")
      
  }
   return (
    <div className="container">
     <form id="contact">
     <h3>Prototype Booking</h3>
     <fieldset>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="Place"
          placeholder="Name"
        />
        </fieldset>
        <fieldset>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="date"
          name="date"
          placeholder="Date"
        />
        </fieldset>
        <fieldset>
        <input
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          type="number"
          name="people"
          placeholder="Number of Days"
        />
        </fieldset>
        <fieldset>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="Your Email"
        />
        </fieldset>
        <fieldset>
        <button disabled={!name} className="contact-submit" type="submit" onClick={handleSubmit}>
          Book
        </button>
        </fieldset>
      </form>
   <h1 className="cam">{cam}</h1>
    
        </div>
    )
}

export default Form
