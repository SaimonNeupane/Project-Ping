import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import { auth } from './firebase'; // Import from the firebase.js file
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { get, getDatabase, ref, set } from 'firebase/database'; // Import from firebase/database

function App() {
  const provider = new GoogleAuthProvider();
  const [isActive, setIsActive] = useState(false);
  const [Email, setEmail] = useState('');
  const [passw, setPassword] = useState('');
  const [isCredTrue, setCred] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', Email: '', passw: '' });
  const database = getDatabase(); // Get a reference to the database

  const defEmail = "admin";
  const defPas = "admin";

  const handleLoginClick = async () => {
    console.log(`Email: ${Email}, Password: ${passw}`);
    if (Email === defEmail && passw === defPas) {
      setCred(true);
    } else {
      try {
        const userRef = ref(database, 'users');
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const users = snapshot.val();
          const user = Object.values(users).find(user => user.email === Email);
          if (user && user.password === passw) {
            setCred(true);
          } else {
            alert('Invalid credentials');
            setEmail('');
            setPassword('');
          }
        } else {
          alert('No users found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  const handleRegistration = async () => {
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, newUser.Email, newUser.passw);
      const user = userCredential.user;

      // Save user profile data to Firebase Realtime Database
      const userRef = ref(database, 'users/' + user.uid);
      await set(userRef, {
        username: newUser.username,
        email: newUser.Email,
        password: newUser.passw // Adding password to user data for login comparison
      });

      // Send email verification
      await sendEmailVerification(user);

      alert('Registration successful! Please check your email for verification.');
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in:', user);
      setCred(true);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  return (
    <>
      {isCredTrue ? (
        <Dashboard />
      ) : (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
          <div className="form-container sign-up">
            <form method='POST'>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon" onClick={handleGoogleSignIn}>
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                value={newUser.username}
                onChange={(e) => setNewUser(prev => ({ ...prev, username: e.target.value }))}
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.Email}
                onChange={(e) => setNewUser(prev => ({ ...prev, Email: e.target.value }))}
              />
              <input
                type="password"
                placeholder="Password"
                value={newUser.passw}
                onChange={(e) => setNewUser(prev => ({ ...prev, passw: e.target.value }))}
              />
              <button type="button" onClick={handleRegistration}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon" onClick={handleGoogleSignIn}>
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password" value={passw} onChange={(e) => setPassword(e.target.value)} />
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
