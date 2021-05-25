import {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';

import Logo from '../olx-logo.png';
import './Signup.css';

import {FirebaseContext} from '../store/context';
export default function Signup(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();
  const handleSignup = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: name,
            phoneNumber: phone,
          })
          .then(async (auth) => {
            alert('Signed Up');
            await firebase.firestore().collection('user').add({
              id: result.user.uid,
              name: name,
              phone: phone,
            });
            history.push('/login');
          })
      )
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  console.log(phone);

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSignup}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
