import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';

const year = getFullYear();
const isindex = getFooterCopy(true);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
        <link rel="icon" type="image/x-icon" href=""/>
        
      </header>
      <hr className="hr"/>
      <body className="App-body">

      <p>Login to access the full dashboard</p>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email"/>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password"/>

      <button type="button" id="okButton">OK</button>
      </body>
      <footer className="App-footer">
      <hr className="hr"/>
      Copyright {year} - {isindex}
      </footer>
    </div>
  );
}

export default App;
