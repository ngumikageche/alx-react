import './Footer.css'
const Footer = (props) => {
  const year = props.year;
  const isindex = props.isindex
    return ( 
        <footer className="App-footer">
        <hr className="hr"/>
        Copyright {year} - {isindex}
      </footer>
     );
}
 
export default Footer;