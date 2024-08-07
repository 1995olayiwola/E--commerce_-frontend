import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const TextInput = (props) => {
console.log(props);
    const [state,setState] = React.useState({
email:"",password:""
    })


  console.log(state)
  return (
    <div className='container'>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder}  name={props.name} value={props.value} onChange={props.handleChange}/>
   
      </Form.Group>

     
    </Form>

    </div>
  )
}

export default TextInput