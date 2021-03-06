import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import requests from './requests';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />
      <Row title='NETFLIX ORIGINALS' isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
