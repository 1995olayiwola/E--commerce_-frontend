import React from 'react';
import Header from './Header';
import Form from "./TextInput";
import Button from 'react-bootstrap/Button';
import Parse from "parse";
import Loading from './Spinner';
import {useHistory} from 'react-router-dom';

const Project = () => {
  const history = useHistory();
  const user = Parse.User.current();
  const [loading,setLoading] = React.useState(false);
  const [state,SetState] =  React.useState({
   email:"" ,number:"",address:"",place:"",job:""
  })
  const handleChange = (e)=>{
SetState((fv)=>{
  return {
...fv,[e.target.name]:e.target.value
  }
})
  }

  const handleSubmit = async(e)=>{
e.preventDefault();
const tableName = "Todo";
try{
  const Post = Parse.Object.extend(tableName);
  const post = new Post();
  const acl = new Parse.ACL(user);
  acl.setWriteAccess(user,true);
  acl.setPublicReadAccess(true);
  post.set("email",state.email);
  post.set("number",state.number);
  post.set("address",state.address);
  post.set("place",state.place);
  post.set("job",state.job);
  post.setACL(acl);
  setLoading(true);
  post.save();
  setLoading(false);
  alert("Post created successfully!!!");
history.push("/");
}

catch(err){
alert(err.message)
}





  }
  return (
    
    <div>
        <Header/>
        {
          user &&
          <div>
<Form  name="email" value={state.email} handleChange={handleChange} type="email" label="Email:" placeholder="Enter your email"/>
        <Form  name="number" value={state.number} handleChange={handleChange} type="number" label="Phone number:" placeholder="Enter your phone number"/>
        <Form  name="address" value={state.address} handleChange={handleChange} type="text" label="Address:" placeholder="Enter your address"/>
        <Form  name="place" value={state.place} handleChange={handleChange} type="text" label="Location:" placeholder="Enter your location"/>
        <Form  name="job" value={state.job} handleChange={handleChange} type="text" label="Job position:" placeholder="Enter your job position"/>
        {" "}
        {loading && <Loading/>}
        {" "}
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
          </div>
        }
        
    </div>
  )
}

export default Project