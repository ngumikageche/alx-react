import './Login.css'
const Login = () => {
    return ( 
        <div className="login">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email"/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"/>

        <button type="button" id="okButton">OK</button>
      </div>
     );
}
 
export default Login;