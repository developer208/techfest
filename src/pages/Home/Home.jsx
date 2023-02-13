import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar';
import Test from '../Test';
import Heading from '../../Heading';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
    <div className='container'>
      <Navbar/>
      <Heading/>
      <Test/>
      <Footer/>
    </div>
    </>
  )
}

export default Home;