import React,{useState} from 'react';
import './App.css';
import Product from './Product'
import Cart from './Cart'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Head from './Head'
function App() {
 

  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/room">
          <Cart/>
        </Route>
      <Route path="/">
        <Head/>
        <br/>
        <br/>
        <h1 className="head">AVAILABLE ROOMS</h1>
        <br/>
        <br/>
   <Grid container spacing={4}>
     <Grid item xs={4}>
          <Paper ><Product id="1234" image={require('./img/sing.jpeg')} title="Single Room" price="$100" about="$100 per night for a Nice single room overlooking the beach Our hotel is completely renovated in 2013 and has all the features and amenities to fulfill your needs. All of the rooms are equipped with free-wireless Internet."/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper ><Product id="2345" image={require('./img/doublejpeg.jpeg')} title="Double Room" price="$150" about="$150 per night for a Nice double room overlooking the beach Our hotel is completely renovated in 2013 and has all the features and amenities to fulfill your needs. All of the rooms are equipped with free-wireless Internet."/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper ><Product id="2345" image={require('./img/tripple.jpeg')} title="Tripple" price="$200" about="$200 per night for a Nice tripple room overlooking the beach Our hotel is completely renovated in 2013 and has all the features and amenities to fulfill your needs. All of the rooms are equipped with free-wireless Internet."/></Paper>
        </Grid>
        </Grid>
        <Grid container spacing={4}>
     <Grid item xs={4}>
          <Paper ><Product id="1234" image={require('./img/queen.jpeg')} title="Queen" price="$250" about="$250 per night for a Nice queen sized room overlooking the beach Our hotel is completely renovated in 2013 and has all the features and amenities to fulfill your needs. All of the rooms are equipped with free-wireless Internet."/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper ><Product id="2345" image={require('./img/king.jpeg')} title="King" price="$300" about="$300 per night for a Nice king sized room overlooking the beach Our hotel is completely renovated in 2013 and has all the features and amenities to fulfill your needs. All of the rooms are equipped with free-wireless Internet."/></Paper>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        </Grid>
        <br/>
        <br/>
        <div className="footer">
          <div className="image">
        <img src="https://opentextbc.ca/introtourism/wp-content/uploads/sites/38/2015/03/2605901871_ea754ef7ce_z.jpg"/>
        </div>
        <p>Banff Springs Hotel opened in 1888, and other hotels soon followed, including the Château Frontenac in Quebec City (1893), the Royal York in Toronto (1929), and the Hotel Vancouver (1939). These hotels remain in operation today and are landmarks in their destinations, functioning as accommodations and as local attractions due to their historic significance and outstanding architecture.

Through the 1950s and 1960s, an increase in motor traffic saw the rise of the motel. The word motel, used less commonly today, comes from the term “motorist’s hotel,” used to denote a hotel that provides ample parking and rooms that are easily accessible from the parking lot. Traditionally, these structures were designed with all the rooms facing the parking lot, and relied heavily on motor traffic from nearby highways (Diffen, 2015).

Today, there are a number of hotel types, which can be classified in multiple ways. Let’s explore these classifications in more detail.</p>
        </div>
     </Route>
     </Switch>
     </Router>
     </div>
  );
}
export default App;


{/* localhost.com */ }
{/* localhost.com/checkout */ }
{/* localhost.com/login */ }