import React from 'react';
import Cards from './components/Cards';
import './styles/App.scss';

function App() {
  return (
    <>
    <div className="App">
      <Cards />
    </div>
    <div id="modal-root"></div>
    </>
  );
}

export default App;
