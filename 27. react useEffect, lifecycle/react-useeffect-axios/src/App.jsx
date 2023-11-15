import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Category from "./components/Category";
import Categories from "./components/Categories";
import AddCategory from "./components/AddCategory";

function App() {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/categories")
      .then((res) => {
        setCategories(res.data);
      });
  }, []);
  return (
    <>
      <h2>Categories</h2>
      <Categories>
        {categories &&
          categories.map((category, idx) => {
            return <Category categories={categories} setCategories={setCategories} category={category} key={idx} />;
          })}
      </Categories>
      <AddCategory categories={categories} setCategories={setCategories}/>
    </>
  );
}

export default App;
