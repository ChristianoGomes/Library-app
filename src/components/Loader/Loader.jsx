import React from 'react';
 import LoaderImg from "/Users/christianogomes/Portofolio projects/Book-Search/house-of-wisdom/src/Images/LoaderImg.gif"
import "./Loader.css"



const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={LoaderImg} alt="Loader"/>
      Loader
    </div>
  )
}

export default Loader
