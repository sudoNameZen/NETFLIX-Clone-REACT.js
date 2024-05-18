import React from 'react'
import Main from '../Component/Main'
import requests from '../requests'
import Row from '../Component/Row'


function Home() {
  return (
    <div>
      <Main />
      
      <Row rowID='1' title='Trending' fetchURL={requests.fetchTrending} />
      <Row rowID='2' title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row rowID='3' title='Action Movies' fetchURL={requests.fetchActionMovies} />
      <Row rowID='4' title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
      <Row rowID='5' title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
      <Row rowID='6' title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
 



    </div>
  )
}

export default Home