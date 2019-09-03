import React from 'react';
import {
  Form,
  Button
} from 'react-bootstrap';

class Gift extends React.Component {
  state = {
    person: '',
    present: ''
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Gift;