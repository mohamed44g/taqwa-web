import React from 'react';
import Homepage from './components/homePage';
import Prayer from './components/prayerTime';
import Playlists from './components/playlists';
import About from './components/About';
import Books from './components/books';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import './style/bootstrap.min.css';
import './style/style.scss';

export default function App() {

    return (
        <>  
            <Homepage />
            <About />
            <Prayer />
            <Playlists />
            <Books />
            <Subscribe />
            <Footer />
        </>
    );
}