
import React from 'react';
import { Grid, Row, Col, Button, Navbar, Media, Nav, NavItem, Jumbotron } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import './Landing.css';
import Logo from './logo.png';


const Landing = () => (

<div className="wrapper">
   <Navbar>
     <Nav bsStyle="pills" pullRight >
       <NavItem>
      <Button bsStyle="primary" bsSize="large">
         <Link to='/'>Home</Link>
         </Button>
        </NavItem>

      <NavItem>
         <Button bsStyle="primary" bsSize="large">
         <Link to='/library'>Library</Link>
         </Button>
         </NavItem>
  </Nav>

      </Navbar>
<Grid>
  <Jumbotron >

         <h1>Turn the music up! </h1>

         <Media>

    <img src= {Logo} alt="logo" height="100" width="100" />

         </Media>



<section className="landing" >
<div className="container-fluid">
<section className="selling-points">
<Grid>
<Row className="show-grid">

<Col xs={6} md={4}>
<div className="point">
 <h2 className="point-title">Choose your music</h2>
 <p className="point-description"><strong>The world is full of music; why should you have to listen to music that someone else chose?</strong></p>
</div>
</Col>

<Col xs={6} md={4} >
<div className="point">
 <h2 className="point-title">Unlimited, streaming, ad-free</h2>
 <p className="point-description"><strong>No arbitrary limits. No distractions.</strong></p>
</div>
</Col>

<Col xs={6} md={4} >
<div className="point" >
 <h2 className="point-title">Mobile enabled</h2>
 <p className="point-description"><strong>Listen to your music on the go. This streaming service is available on all mobile platforms.</strong></p>
</div>
</Col>

</Row>
</Grid>
</section>
</div>
  </section>
  </Jumbotron>
  </Grid>
  </div>


);


export default Landing;
