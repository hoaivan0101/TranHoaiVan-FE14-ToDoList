import './Todo.css';
import React from 'react';
import Inputtext from './Input.jsx';
import ShowMoreText from 'react-show-more-text';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.name,
      statusValue: this.props.status
    }
  }


  saveClick = (event, key) => {
    this.setState({ isEditing: false });
    this.props.getdata(event,key,this.state.statusValue);
  }

  handleChange = (e) => {
    this.setState({ statusValue: e.target.value})
  }

  editClick = () => {
    console.log('EDIT');
    this.setState({ isEditing: true });
  }
  
  render() {
    let classLi = '';
    classLi = this.props.status === 'Finished' ? 'red' : this.props.status === 'Cancel' ? 'yellow' : 'green';
   
    return (
      <li className={classLi}>
        <div>
          <h1>{this.props.index + 1}.</h1>
        </div>
        <div className="flex-center">
          <h3> { this.state.isEditing ?
            <Inputtext
              saveClick={this.saveClick}
              value={this.props.name}
              index={this.props.id} /> :
              <ShowMoreText
              lines={1}
              more='Show more'
              less='Show less'
              className='content-css'
              anchorClass='my-anchor-css-class'
              expanded={false}
              width={380}
          ><span onClick={this.editClick}>{this.props.name}</span></ShowMoreText>
          }</h3>
        </div>
        <div className="flex-center deleteX">
          <p onClick={()=>this.props.deletefn(this.props.id)}>X</p>
        </div>
        <div className="flex-center">
          {this.state.isEditing ?
            <p>
            <select onChange={this.handleChange}>
              <option value={this.state.statusValue}>{this.state.statusValue}</option>
              <option value="Finished">Finished</option>
              <option value="Cancel">Cancel</option>
              <option value="ToDo">ToDo</option>
            </select>
            </p> : <p onClick={this.editClick}>{this.props.status}</p>}
        </div>
      </li>
    );
  }
}


export default Todo;
