import React from 'react';
import Header from './Header';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Parse from 'parse';



import { products } from './products/products';

const Home = () => {
  const user = Parse.User.current();
 
  
 
  
 
  
  return (
    <div>

<Header/>
{user && <h3>Hello, {user.get("name")} </h3>}
{
products.map((item)=>{
  return (
    <Card sx={{ maxWidth: 345 }} key={item.id}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
})
}


    </div>
  )
}

export default Home