import React from 'react';
import './css/index.scss'

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      value:''
    }
  }

  change = (e, key) => {
    this.setState({value:e.target.value})
  }
 
  render() {
    const saveClick = this.props.saveClick;
    return (
      <div>
        <input type="text" placeholder={this.props.value} onChange={this.change}></input>
        <span onClick={() => { saveClick(this.state.value,this.props.index) }}>Save</span>
      </div>
    );
  }
}


export default Input;
