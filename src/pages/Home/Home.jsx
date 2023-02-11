import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Test from '../Test';
import Heading from '../../Heading';

const Home = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Heading/>
      <Test/>
    </div>
  )
}

export default Home;