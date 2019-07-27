import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class TodoInput extends Component {

    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

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
                        checked={this.props.currentPriority}
                        onClick={this.props.handlePriority} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Create Task
                </Button>
            </Form>
            

        )
    }
}

export default TodoInput