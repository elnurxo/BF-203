import { PropTypes } from 'prop-types'

const Students = ({students}) => {

  return (
    <>
      <h3>Students</h3>
      <ul>
        {students &&
          students.map((student, idx) => {
            return <li key={idx}>{student.name}, {student.age}</li>;
          })}
      </ul>

    </>
  );
};

Students.propTypes = {
    students: PropTypes.array
}

export default Students;
