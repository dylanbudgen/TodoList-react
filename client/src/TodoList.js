import React, { Component } from 'react';

import TodoInput from './TodoInput';
import TodoItems from './TodoItems';

class TodoList extends Component {

    constructor() {
        super()
        this.state = {
          items: [],
          currentText: '',
          currentPriority:'',
          currentKey: ''
        }
      }

      // TODO do I need this?
    inputElement = React.createRef();

    handleInput = (e) => {
        const itemText = e.target.value
        this.setState({
          currentText: itemText,
          currentKey: Date.now()
        })
      }

    handlePriority = (e) => {
      const  priority = e.target.checked
      this.setState({
        currentPriority: priority,
        currentKey: Date.now()
      })
    }

    addItem = (e) => {
      e.preventDefault();
      
      const newItem = {
        text: this.state.currentText,
        priority: this.state.currentPriority,
        key: this.state.currentKey
      }
        
      if (newItem.text != '') {
        const items = [...this.state.items, newItem]

        items.sort((a, b) => (a.priority < b.priority) ? 1 : -1);

        this.setState({
          items: items,
          currentText: '',
          currentPriority:'',
          currentKey: ''
        })
      } else {
        console.log('Note empty');
      }


      console.log(this.state.items);
    }
      
    deleteItem = (key) => {
      const filteredItems = this.state.items.filter(item => {
        return item.key !== key
      })
      this.setState({
        items: filteredItems,
      })
    }

    render() {
        return (
        <div  >
            <TodoInput       
                addItem={this.addItem}
                inputElement={this.inputElement}
                handleInput={this.handleInput}
                handlePriority={this.handlePriority}
                currentText={this.state.currentText}
                currentPriority={this.state.currentPriority} />
           
            <TodoItems 
                entries={this.state.items}
                deleteItem={this.deleteItem} />
        </div>
        )
    }
}

export default TodoList