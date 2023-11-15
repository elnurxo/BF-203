import {PropTypes } from "prop-types"

const Categories = ({children}) => {
  return (
    <>
     {children}
    </>
  )
}

Categories.propTypes = {
    children: PropTypes.node
}

export default Categories