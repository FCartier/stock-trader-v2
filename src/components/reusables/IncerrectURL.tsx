import React from "react"
import { Link } from "react-router-dom"

const IncorrectURL: React.SFC = () => (
    <div>
      <h3>Incorrect URL entered</h3>  
      <Link to="/">Return Home</Link>
    </div>
)

export default IncorrectURL;