import React, { useState } from 'react';
import './contactbook/contactbook.css'
import ContactInput from './contactbook/ContactInput'
import './App.css'

function App() {
  let [isLoad,setLoad] = useState(false)
  return (
    <div className="App">
      <header><div>Contact<span>Book</span></div></header>
      <ContactInput/>
    </div>
  );
}

export default App;
