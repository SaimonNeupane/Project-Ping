import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [Email, setEmail] = useState('');
  const [passw, setPassword] = useState('');
  const [isCredTrue, setCred] = useState(false);
  const defEmail = "admin";
  const defPas = "admin";

  const handleLoginClick = () => {
    console.log(`Email: ${Email}, Password: ${passw}`);
    if (Email === defEmail && passw === defPas) {
      setCred(true);
    }
  };
  console.log(isCredTrue)

  return (
    <>
      {isCredTrue ? (
        <Dashboard />
        
      ) : (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="button">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <a href="#">Forget Your Password?</a>
              <button type="button" onClick={handleLoginClick}>Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of the site's features</p>
                <button className="hidden" onClick={() => setIsActive(false)} id="login">Sign In</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of the site's features</p>
                <button className="hidden" onClick={() => setIsActive(true)} id="register">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
