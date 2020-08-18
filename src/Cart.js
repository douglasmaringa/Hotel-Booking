import React from 'react'
import Checkout from "./Checkout"
import { useStateValue } from './StateProvider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './Form'
function Cart() {
    const [{ basket }] = useStateValue();
    return (
        <div>
           
               <Grid container spacing={4}>
               <Grid item xs={6}>
                    <Paper > {basket?.map(item => (
                                <Checkout
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    about={item.about}
                                />
                            ))} </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper ><Form/> </Paper>
                  </Grid>
                  <Grid item xs={2}>
                    <Paper ></Paper>
                  </Grid>
                  </Grid>
                 
        </div>
    )
}

export default Cart
