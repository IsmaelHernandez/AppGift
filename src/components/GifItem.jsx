import React from 'react'
import "../App.css";

const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p className='titleApp'>{ title }</p>
    </div>
  )
}

export default GifItem