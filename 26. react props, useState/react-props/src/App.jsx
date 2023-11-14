import { useState } from "react";
import "./App.css";
import Students from "./components/Students";
import AddStudent from "./components/AddStudent";

function App() {
  let [students, setStudents] = useState([]);

  return (
    <>
      <Students students={students} />
      <AddStudent students={students} setStudents={setStudents} />
    </>
  );
}

export default App;
