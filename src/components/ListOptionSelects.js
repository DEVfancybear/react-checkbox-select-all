import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class ListOptionSelects extends Component {
  render() {
    return (
      <Form.Control
        className="col-8 txtInput"
        name="groupType"
        as="select"
        // defaultValue={"Sản phẩm"}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    );
  }
}
