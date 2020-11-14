import React from 'react'
import Nav from './Nav'
import Form from './Form'

import './Header.css'


const Header = () => {
  return (
    <>
      <div className = "header">
      <Nav />
      <Form />
        
      </div>
    </>
  );
}

export default Header
