import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from './firebase';
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');

  const [error, setError] = useState('');

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up successfully:', user);
      setEmail("");
      setPassword("");
      setUser(user);

      // Additional logic like redirecting to another page or displaying a success message can be added here
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailSignIn, passwordSignIn);
      const user = userCredential.user;
      console.log('User signed in successfully:', user);
      setEmailSignIn("");
      setPasswordSignIn("");
      setUser(user);
      // Additional logic like redirecting to another page or displaying a success message can be added here
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
      setUser(null);
      // Additional logic like redirecting to another page or displaying a success message can be added here
    } catch (error) {
      console.error('Error signing out:', error.message);
      setError(error.message);
    }
  };

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:9000';
  const fetchProtectedData = async () => {
    try {
      if (!auth.currentUser) {
        console.error('Cannot fetch protected data: No authenticated user.');
        return;
      }
      const token = await auth.currentUser.getIdToken(); 
      const response = await fetch(`${API_BASE_URL}/protected`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (!response.ok) {
        let errorMsg = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMsg = errorData?.message || errorMsg;
        } catch (e) {
          // Ignore JSON parse errors, use default errorMsg
        }
        setError(errorMsg);
        console.error('Error fetching protected data:', errorMsg);
        return;
      }
      const data = await response.json();
      console.log(data);

      if(data && data?.message) {
        setMessage(data.message);

        let timeout = setTimeout(() => {
          setMessage(null);
          clearTimeout(timeout);
        }, 10000);

      }
    } catch (error) {
      console.error('Error fetching protected data:', error);
    }
  };

  return (
    <div>
        <h1>Firebase Authentication</h1>
        {
            !user && (
                <>
                
                <div>
                <h1>Sign-up form</h1>
                {/* Sign-up form */}
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSignUp}>Sign Up</button>

                </div>

                <div>
                <h1>Sign-in form</h1>
                {/* Sign-in form */}
                <input type="email" placeholder="Email" value={emailSignIn} onChange={(e) => setEmailSignIn(e.target.value)} />
                <input type="password" placeholder="Password" value={passwordSignIn} onChange={(e) => setPasswordSignIn(e.target.value)} />
                <button onClick={handleSignIn}>Sign In</button>
                </div>

                </>
            )
        }

        {
            user && (
                <>
                <p>Welcome, {user.displayName}!</p>
                
                <button onClick={handleSignOut}>Sign Out</button>
                <button onClick={fetchProtectedData}>Fetch Protected Data</button>

                { message && (
                        <>
                        <p>Message from server: {message}</p>
                        <p>The above message will go away in 10 seconds.</p>
                        </>
                ) }

                </>
            )
        }

        

        {/* Display error message if there's an error */}
        {error && <p>{error}</p>}

    </div>
  );
}

export default App;
