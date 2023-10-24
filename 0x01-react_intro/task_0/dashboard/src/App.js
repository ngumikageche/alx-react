import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
        <link rel="icon" type="image/x-icon" href=""/>
        
      </header>
      <hr class="hr"/>
      <body className="App-body">
      <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
      <hr class="hr"/>
      Copyright 2020 - holberton School
      </footer>
    </div>
  );
}

export default App;
