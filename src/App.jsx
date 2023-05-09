import "./App.css";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import Header from "./components/Header";
import Footer from "./components/Footer"


const App = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) {
      return;
    } else {
      setCategories([...categories, NewCategory]);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className='container__letter'>
        <h1 className="">AppGif</h1>
      </div>
      {/* agregar Gif */}
      <AddCategory NewCategory={(value) => onAddCategory(value)} />
      {/* listado de Gif */}
      <div>
        {categories?.map((category) => (
          <GifGrid  category={category} key={category} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
