import React, {useState} from "react";
import axios from 'axios'

const Login = props => {

const [creds, setCreds] = useState({
  username: '',
  password: ''
})

  const handleChange = e => {
    return setCreds({
      ...creds,
        [e.target.name]: e.target.value
    });
  }

  const routeToBubbles = () => {
    props.history.push('/bubbles')
  }


  const login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login',{ username: 'Lambda School', password: 'i<3Lambd4'})
    .then(res => {
      console.log(res)
      console.log('creds', creds)
      localStorage.setItem('token', res.data.payload)
      routeToBubbles()
    })
    .catch(err => console.log(err.response));
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  return (
   <form onSubmit={login}>
     <div>
       <label htmlFor='username'>Enter username</label>
       <input 
          type='text'
          id='username'
          name='username'
          value={creds.username}
          onChange={handleChange} />
     </div>

     <div>
       <label htmlFor='password'>Enter password</label>
       <input
          type='text'
          id='password'
          name='password'
          value={creds.password}
          onChange={handleChange} />
     </div>

     <button type='submit'>submit</button>
   </form>
  );
}


export default Login;
