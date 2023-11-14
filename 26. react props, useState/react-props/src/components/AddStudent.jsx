import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from 'prop-types'


const AddStudent = ({students, setStudents}) => {
  let [name, setName] = useState("");
  let [age, setAge] = useState(0);

  function handleName(e) {
    setName(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function addStudent(e) {
    e.preventDefault();
    let newStudent = {
      id: uuidv4(),
      name: name,
      age: age,
    };
    console.log(newStudent);
    setStudents([...students, newStudent]);
    setAge(0);
    setName("");
  }
  return (
    <>
      <form onSubmit={(e) => addStudent(e)}>
        <input
          value={name}
          onChange={(e) => handleName(e)}
          placeholder="enter student name"
          type="text"
        />
        <input
          value={age}
          onChange={(e) => handleAge(e)}
          placeholder="enter student age"
          type="number"
          min={0}
        />
        <button type="submit">add student</button>
      </form>
    </>
  );
};

AddStudent.propTypes = {
    students: PropTypes.array,
    setStudents: PropTypes.func
}

export default AddStudent;
