import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import InputGroup from "react-bootstrap/InputGroup"
import Data from "../Server/Data"

const Details = (props) => {
  const [name, setName] = useState("Name")

  return (
    <div className="row" >
      <div className="col-md-6 my-auto" style={{ textAlign: "center" }}>
        <FontAwesomeIcon icon={faUserEdit} size="10x" swapOpacity transform="shrink-6 left-4" />
      </div>
      <div className="col-md-6 mx-auto" style={{ textAlign: "center" }}>
        <div style={{ marginTop: "1rem" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1qUP6kMIOSMVTg1Bnwq-EBgL75Cc7jNvBan3jM1Pt-sfBHc8dQ&s" />
            <Card.Body>
              <Card.Title>Name</Card.Title>
              <Card.Text>
                Enter your name so that,it will help us to recognize you
              </Card.Text>
              <InputGroup size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-lg">User Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl onChange={(event) => {
                  setName(event.target.value)
                  console.log(name)
                }} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
              </InputGroup>
              <Button onSubmit={} style={{ margin: ".5rem" }} variant="primary">Submit</Button>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  )
}
export default Details;