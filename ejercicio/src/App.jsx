import React from 'react';
import Panel from './components/Panel/Panel';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Panel title="Mi Panel">
        <p>Este es el contenido que se mostrará cuando se expanda el panel.</p>
      </Panel>
    </div>
  );
}

export default App;
