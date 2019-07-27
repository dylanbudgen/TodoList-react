import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'

class TodoItems extends Component {
    
  createTasks = item => {
    return (
      <TodoItem   
          deleteItem={this.props.deleteItem} 
          item={item}>
      </TodoItem>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ListGroup className='list'  >{listItems}</ListGroup>
  }
}

class TodoItem extends Component {
    
  render() {
    const variant = (this.props.item.priority == true) ? ('danger') : ('');
    
    return (

      <ListGroup.Item key={this.props.item.key} variant={variant}>
        <FontAwesomeIcon icon={faCheck} onClick={() => this.props.deleteItem(this.props.item.key)} />
        &nbsp;&nbsp;{this.props.item.text} 
      </ListGroup.Item>
    )
  }
}

export default TodoItems