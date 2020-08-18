import React from 'react'
import './App.css';
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


import Typography from '@material-ui/core/Typography';
function Product({id,title,image,price,about}) {
    const [ dispatch] = useStateValue();
    const addToBasket = () => {
        // Add item  to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                about:about
            },
        });
    };
    
    return (
  
        <div className="card">
        <Card className="card_ui">
 <CardHeader
   
  className="bold"
   title={title}
   
 />
 
 <CardMedia
style={{height: 0, paddingTop: '56.25%'}}
image={image}
title="lorem ipsum"
/>
 <CardContent>
   <Typography variant="body2" color="textSecondary" component="p">
     
   </Typography>
 </CardContent>
 
   
   <CardContent>
    <Typography paragraph>{price}</Typography>
     
     <Typography paragraph>
     
     <Link to="/room"><button className="button" onClick={addToBasket}>VIEW ROOM</button></Link>
     </Typography>
     
   </CardContent>
 
</Card>
   </div>
    )
}

export default Product
