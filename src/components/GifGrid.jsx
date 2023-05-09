import React from "react";
import {useFeth} from "../hook/useFeth";
import GifItem from "./GifItem";
import "../App.css";


const GifGrid = ({ category }) => {

  const { images } = useFeth(category);
  
  return (
      <>
            <h2 className="titleApp">{category}</h2>
          <div className="card-grid">
              {
                  images.map((image) => (
                      <GifItem 
                          key={ image.id } 
                          { ...image }
                      />
                  ))
              }
              
          </div>

      </>
  )
}

export default GifGrid
