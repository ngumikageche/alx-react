
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';

const year = getFullYear();
const isindex = getFooterCopy(true);
function App() {
  return (
    <div className="App">
      <Header />
      <hr className="hr"/>
      <body className="App-body">

      <p>Login to access the full dashboard</p>
      <Login />
      </body>
      <Footer year={year} isindex={isindex}/>
    </div>
  );
}

export default App;
