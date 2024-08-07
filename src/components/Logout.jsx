import React from 'react';
import Button from 'react-bootstrap/Button';
import Parse from 'parse';
import {useHistory} from 'react-router-dom'
const Logout = () => {
    const history = useHistory();
    const handleSubmit = async()=>{
        try{
           const user = await  Parse.User.logOut();
           alert("You have successfully logged out");
        history.push('/login');
        }

        catch(err){
            alert(err.message)
        }
    }
  return (
    <div>

<h1>Log out from this website</h1>
<Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </div>
  )
}

export default Logout