import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForms from '../SearchForms/SearchForms';
import './Header.css';



const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className="header-content flex flex-c text-center text white">
            <h2 className='header-title text-capitalize' style={{ color: 'white' }} >
              Find your next book to read.
            </h2><br/>
            <p className='header-text fs-18 fw-6' style={{ color: 'white' }}>"Once you learn to read, you will be forever free"</p>
            <SearchForms />
        </div>
      </header>
    </div>
  )
}

export default Header
