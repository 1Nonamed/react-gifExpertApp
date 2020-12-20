import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Hunter x Hunter"]);

  // const handleAdd = () => {
  //   setCategories([...categories, 'Bleach']);
  //   // setCategoriesFn((cats) => [...cats, inputValue]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategoriesFn={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
