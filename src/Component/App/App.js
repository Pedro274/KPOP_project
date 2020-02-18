import React from 'react';
import './App.css';
import NavBar from '../NavBar/navbar';
import Jumbotron from '../Jumbotron/jumbotron';
import SideBar from '../SideBar/sidebar';
import Cards from '../Cards/cards';
import Footer from '../Footer/footer';

function App() {
    return (
        <div className='web'>
            <div className="row">
                <NavBar/>
            </div>
            <div className="row">
                <Jumbotron/>
            </div>
            <div className="row">
                <div className='col'>
                    <SideBar/>
                </div>
                <div className='col'>
                    <Cards/>
                </div>
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
    )
}

export default App;
