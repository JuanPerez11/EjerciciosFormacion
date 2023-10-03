import React from 'react';
import Panel from './components/Panel/Panel';
import Loader from "./components/Loader/Loader";
import { useState } from 'react';
import "./App.css"

function App() {

  const [isLoading, setIsLoading] = useState(false)
  function handleFakeLoading(event){
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false),2000)
  }

  return (
    <>
    <div className="App">
      <div>
      <form onSubmit={handleFakeLoading}>
      <input type="submit" value="Fake loading" />
        </form>
        <Loader isShown={isLoading}/>
      </div>
      <Panel title="Mi Panel">
        <p>Este es el contenido que se mostrará cuando se expanda el panel.</p>
      </Panel>
    </div>
    </>
  );
}

export default App;
