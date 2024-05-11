import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';
import './App.css';

function App() {
  return (
    <>
      <div>
         <h1>
          Gif Generator
         </h1>
      </div>

      <div>
        <Random />
        <Tag />
      </div>
    </>
  );
}

export default App;
