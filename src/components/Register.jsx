import React from 'react';
import Parse from 'parse';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import {useHistory} from 'react-router-dom';
import Spinner from './Spinner';

const Register = () => {

  
  const history = useHistory();
  const [loading,setLoading] = React.useState(false)
    const [state,setState] = React.useState({
        email:"",password:"",username:""
    })
    const handleChange = (e)=>{
      console.log(e)
setState(()=>{
    
    return {
        ...state,[e.target.name]:e.target.value
    }
})

    }

    const handleSubmit = async(e)=>{
      e.preventDefault();
      const user = new Parse.User();
user.set("username", state.email);
user.set("name", state.username);
user.set("password", state.password);
user.set("email", state.email);

try{
  setLoading(true)
  await user.signUp();
  
  alert("Sign Up successful!");
  setLoading(false);
  history.push("/login");
  console.log(user)
}
catch(err){
  alert(err.message)
}
    }
  return (
    <div className='container' >
        <Header/>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter your username"  name="username" value={state.username} onChange={handleChange}/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  name="email" value={state.email} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password </Form.Label>
        <Form.Control type="password" placeholder="Enter your password"  name="password" value={state.password} onChange={handleChange}/>
      
      </Form.Group>
      {loading && <Spinner/>}
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
      </Form>
    </div>
  )
}

export default Register