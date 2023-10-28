import './Header.css'
import logo from './logo.jpg';
const Header = () => {
    return ( 
        <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
        <link rel="icon" type="image/x-icon" href=""/>
      </header> 
    );
}
 
export default Header;