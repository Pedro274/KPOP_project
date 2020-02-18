import React from 'react';
import './App.css';
import NavBar from '../NavBar/navbar';
import SideBar from '../SideBar/sidebar';
import Cards from '../cards/cards';
import Card from '../cards/card/card';

function App() {
    return (
        <div>
        <NavBar />
        <SideBar />
        <Cards />
        <Card />
          <p>I am here!</p>
        </div>
           
    )
}

export default App;
