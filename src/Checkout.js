import React from 'react'
import './App.css';
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
function Checkout({title,id,image,price,about}) {
    const [ dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove item from basket...
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    };
    return (
        
         <div className="card">
             <Link to="/"><button  className="button" onClick={removeFromBasket}>Home</button></Link>
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
      
      {about}
      </Typography>
      
    </CardContent>
  
 </Card>
 
    </div>
    )
}

export default Checkout
