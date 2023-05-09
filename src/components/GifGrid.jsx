import React from "react";
import {useFeth} from "../hook/useFeth";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

  const { images } = useFeth(category);
  
  return (
      <>
          <h3>{ category }</h3>
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
