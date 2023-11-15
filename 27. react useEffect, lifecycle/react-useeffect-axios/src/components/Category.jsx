import axios from "axios";
import { PropTypes } from "prop-types";
import { useState } from "react";

const Category = ({ category, setCategories, categories }) => {
  let [edit, setEdit] = useState(null);
  return (
    <>
      <li>
        <span>{category.name}</span>
        <button
          onClick={() => {
            setEdit(category);
            // axios.patch(
            //   `https://northwind.vercel.app/api/categories/${category.id}`
            // );
          }}
        >
          edit
        </button>
        <button
          onClick={() => {
            let filteredCategories = categories.filter(
              (x) => x.id !== category.id
            );
            setCategories([...filteredCategories]);
            axios.delete(
              `https://northwind.vercel.app/api/categories/${category.id}`
            );
          }}
        >
          delete
        </button>
      </li>
      {/* edit form */}
      {edit ? <form
        onSubmit={(e) => {
          e.preventDefault();
          axios.patch(`https://northwind.vercel.app/api/categories/${category.id}`,edit);
          let currentUpdated = categories.find((x)=>x.id==category.id);
          currentUpdated.name = edit.name;
          currentUpdated.description = edit.description;
          setCategories([...categories]);
          setEdit(null);
        }}
      >
        <input onChange={(e)=>{
          setEdit({...edit, name: e.target.value});
        }} value={edit.name} type="text" placeholder="edit category name" />
        <input onChange={(e)=>{
          setEdit({...edit, description: e.target.value});
        }} value={edit.description} type="text" placeholder="edit category desc" />
        <button type="submit">edit</button>
        <button onClick={()=>{
          setEdit(null);
        }} type="reset">cancel</button>
      </form> : null}
    </>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  setCategories: PropTypes.func,
  categories: PropTypes.array,
};
export default Category;
