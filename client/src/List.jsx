import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
    this.get = this.get.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({item: e.target.value});

  }

  add(e) {
    this.props.onClick(this.state.item);
  }

  get() {
    this.props.onClickList();
  }

  render () {
    return (<div>
      <div className="addItem">
        Add a food item to your list:
        <input type="text" onChange={this.handleChange}/>
        <button type="submit" onClick={this.add}>Submit</button>
        </div>

        <div>
          Click to see list of saved food choices.
          <button type="submit" onClick={this.get} >List</button>
          <ul id="menu">{this.props.foodList.map((item) => <li key={item._id}>{item.meal}</li>)}</ul>
        </div>
    </div>)
  }
}

export default List;