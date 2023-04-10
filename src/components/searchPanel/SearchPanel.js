import React, { Component } from 'react'

export default class SearchPanel extends Component {
  buttons =[
    {name:'all', title:'All'},
    {name:'active', title:'Active'},
    {name:'done', title:'Done'}
  ]
  state={
    term:''
  }
  onSearchChange=(e)=>{
    const term=e.target.value
    this.setState({term})
    this.props.onSearchChange(term)
  }
  render(){
    const buttons=this.buttons.map(({name,title})=>{
      const isActive=this.props.filter===name
      const clazz=isActive ?'btn-info':'btn-outlive-secondary'
      return <button
      className={`btn ${clazz}`}
      onClick={()=>this.props.onSetStatus(name)}
      key={title}
      >
        {title}
      </button>
    })
    return (
      <div className='d-flex'>
          <input
          value={this.state.term} 
          onChange={this.onSearchChange}
          className='form-control' placeholder='Search todo'/>
          {buttons}


          {/* <button className='btn btn-info margin-left: 5rem'>All</button>
          <button className='btn btn-outline-secondary'>Active</button>
          <button className='btn btn-outline-secondary'>Done</button> */}
          
      </div>
    )
  }
}
 