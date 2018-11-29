import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Button, Navbar, Media, Nav, NavItem, Jumbotron, Carousel } from 'react-bootstrap';
import albumData from './../data/albums';
import './Library.css'



class Library extends Component {
   constructor(props) {
   super(props);
   this.state = { albums: albumData };
     }

   render() {
    return (
      <section className='library'>
      <Navbar>
        <Nav bsStyle="pills" pullRight >
          <NavItem>
         <Button bsStyle="primary" bsSize="large">
            <Link to='/'>Home</Link>
            </Button>
           </NavItem>


     </Nav>

         </Navbar>


<h1>Library</h1>


  <Carousel >
           {this.state.albums.map( (album, index) =>
             <Carousel.Item key={index}>
              <img alt={album.title} src={album.albumCover}/>
            <Carousel.Caption>
           <h2>{album.title}</h2>
           <h3>{album.artist}</h3>
          <h4>{album.songs.length} songs</h4>
           <Link to={`/album/${album.slug}`}><h3>Play</h3></Link>
           </Carousel.Caption>
           </Carousel.Item>
          )
     }
    </Carousel>
   </section>
   )
}
}



export default Library;
