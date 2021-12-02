import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API_URL = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(r => r.json())
    .then(data => setToys(data));
  },[]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(e) {
    e.preventDefault();
    // console.log("addToy has been invoked in App.js", e.target.name.value, e.target.image.value);
    fetch(API_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: e.target.name.value,
        image: e.target.image.value,
        likes: 0
      }
    })
    .then(r => r.json())
    .then(data => console.log("Fetch POST from addToy()", data));
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
