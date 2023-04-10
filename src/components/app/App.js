import React, { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import SearchPanel from "../searchPanel/SearchPanel";
import TodoAdd from "../todoAdd/TodoAdd";
import TodoList from "../todoList/TodoList";
export default class App extends Component {
  state = {
    todoData: [
      { title: "Learn JS", completed: true, important: false, id: 1 },
      { title: "Learn React", completed: false, important: true, id: 2 },
      { title: "Learn Redux", completed: false, important: false, id: 3 },
    ],
    term:'',
    filter:'all'
  };
  addTodo = (newTodo) => {
    console.log(newTodo);
    const oldId = this.state.todoData.map((el) => el.id);
    const todo = {
      title: newTodo,
      completed: false,
      important: false,
      id: oldId.at(-1) + 1 || 1,
    };
    this.setState({ todoData: [...this.state.todoData, todo] });
  };
 

  completeTodo = (id) => {
    const index = this.state.todoData.findIndex((el) => el.id === id);
    const oldTodo = this.state.todoData[index];
    const before = this.state.todoData.slice(0, index);
    const after = this.state.todoData.slice(index + 1);
    const updTodo = {
      ...oldTodo,
      completed: !oldTodo.completed,
    };
    this.setState({ todoData: [...before, updTodo, ...after] });
  };
  doTodo = (id) => {
    const index = this.state.todoData.findIndex((el) => el.id === id);
    const oldTodo = this.state.todoData[index];
    const before = this.state.todoData.slice(0, index);
    const after = this.state.todoData.slice(index + 1);
    const ondTodo = {
      ...oldTodo,
      important: !oldTodo.important,
    };
    this.setState({ todoData: [...before, ondTodo, ...after] });
  };
  
  deleteTodo = (id) => {
    this.setState({
      todoData: this.state.todoData.filter((el) => el.id !== id),
    });
  };

onSearchChange= (term)=>{
  this.setState({term})
}
search=(items, term)=>{
  if(term.length===0){
    return items
  }
  return items.filter((item)=>{
    return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
  })
}


  filter(items, filter){
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item)=>!item.completed);
      case "done":
        return items.filter((item)=>item.completed);;
      default:
        return items;
    }
  };
  setStatus=(name)=>{
    this.setState({filter:name})
  }
  

  render() {

    const {todoData, }=this.state
    const allTodoCount = this.state.todoData.length;
    const doneCount = this.state.todoData.filter((el) => el.completed).length;
    const visibleItem=this.filter(this.search(this.state.todoData, this.state.term), this.state.filter)

    return (
      <div className="mx-auto" style={{ width: 400 }}>
        <AppHeader allTodoCount={allTodoCount} doneCount={doneCount} />
        <SearchPanel 
        onSearchChange={this.onSearchChange}
        onSetStatus={this.setStatus}
        filter={this.state.filter}
        />
        <TodoList
          onImporant={this.doTodo}
          onDelete={this.deleteTodo}
          onComplete={this.completeTodo}
          todo={visibleItem}
        />
        <TodoAdd onAddTodo={this.addTodo} />
      </div>
    );
  }
}

