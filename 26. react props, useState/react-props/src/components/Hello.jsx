import {Fragment} from "react"
import { PropTypes }  from 'prop-types'

const Hello = ({name,surname,age, hobbies, address, func}) => {
    func();
  return (
    <Fragment>
        <h2>Hello {name} {surname}, {age}</h2>
        <h4>{address.city}, {address.street}</h4>
        <ul>
            {hobbies && hobbies.map((hobby,idx)=>{
                return <li key={idx}>{hobby}</li>
            })}
        </ul>
    </Fragment>
  )
}

Hello.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.array,
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired
    }),
    func: PropTypes.func
}

export default Hello