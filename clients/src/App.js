import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const[data,setData]=React.useState(null);

  React.useEffect(() => {
   fetch("/api").then((res)=>{
          return res.json()
   }).then((data)=>{
    return setData(data.message)  
   })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{!data ? "Loading..." : data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;