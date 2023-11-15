import { useState } from "react";
import { PropTypes } from 'prop-types';
import axios from "axios";

const AddCategory = ({categories, setCategories}) => {
  let[newCategory, setNewCategory] = useState({name: '',description:''});
  return (
    <form onSubmit={async(e)=>{
        e.preventDefault();
        let addedCategory = await axios.post('https://northwind.vercel.app/api/categories', newCategory);
        setCategories([...categories, addedCategory.data]);
        setNewCategory({name: '',description:''});
    }}>
        <input value={newCategory.name} onChange={(e)=>{
            setNewCategory({...newCategory, name: e.target.value});
        }} type="text" placeholder="enter category name"/>
        <input value={newCategory.description} onChange={(e)=>{
            setNewCategory({...newCategory, description: e.target.value});
        }} type="text" placeholder="enter category desc"/>
        <button type="submit">add</button>
    </form>
  )
}

AddCategory.propTypes = {
    categories: PropTypes.array,
    setCategories: PropTypes.func
}

export default AddCategory