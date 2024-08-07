import React from 'react';
import Parse from 'parse';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import {useHistory} from 'react-router-dom';
import Spinner from './Spinner';
import TextInput from './TextInput';

const Register = () => {
  const history = useHistory();
  const [loading,setLoading] = React.useState(false);
    const [state,setState] = React.useState({
        email:"",password:""
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

try{
  setLoading(true);
  const user = await Parse.User.logIn(state.email, state.password);
 alert("Login successfully!");
 setLoading(false);
 history.push("/");
}
catch(err){
  alert(err.message)
}
    }
  return (
    <div className='container' >
        <Header/>
 <Form>
    
     
 <TextInput label="Email Address" type="email" value={state.email} name="email" handleChange={handleChange}/>
 <TextInput label="Password" type="password" value={state.password} name="password" handleChange={handleChange}/>
      {loading && <Spinner/>}
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
      </Form>

    
    </div>
  )
}

export default Register