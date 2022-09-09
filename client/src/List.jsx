import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({item: e.target.value});

  }

  add(e) {
    this.props.onClick(this.state.item);
  }

  get() {

  }

  render () {
    return (<div>
      <div>
        Add a food item to your list:
        <input type="text" onChange={this.handleChange}/>
        <button type="submit" onClick={this.add}>Submit</button>
        </div>

        <div>
          Click to see list of saved food choices.
          <button type="submit" onClick={this.get} >List</button>
        </div>
    </div>)
  }
}

export default List;