import "./App.css";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


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
      <h1>GifExpertApp</h1>
      {/* agregar Gif */}
      <AddCategory NewCategory={(value) => onAddCategory(value)} />
      {/* listado de Gif */}
      <div>
        {categories?.map((category) => (
          <GifGrid  category={category} key={category} />
        ))}
      </div>
    </div>
  );
};

export default App;
