import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// https://codesandbox.io/s/pee3m

class TodoInput extends Component {

    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    handleChange = (event) => {
        //setAlignment(newAlignment);
        console.log("toggle");
    };

    render() {
        return (

            <Form onSubmit={this.props.addItem}>
                <Form.Group controlId="formBasicText">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter task" 
                        ref={this.props.inputElement} 
                        value={this.props.currentText}
                        onChange={this.props.handleInput}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="High priority"
                        onChange={this.props.handlePriority} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Create Task
                </Button>
            </Form>
            

        )
    }
}

export default TodoInput