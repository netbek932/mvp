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
    document.getElementById("addItem").value = '';
  }

  get() {
    this.props.onClickList();
  }

  deleteItem() {
    this.props.delete()
  }

  render () {
    return (<div>
      <div className="addItem">
        Add a food item to your list:
        <input type="text"  id="addItem" onChange={this.handleChange}/>
        <button type="submit" onClick={this.add}>Submit</button>
        </div>

        <div>
          Click to see your list of food choices:
          <button type="submit" onClick={this.get} >List</button>
          <ul id="menu">{this.props.foodList.map((item) => <li key={item._id} onClick={this.delete}>{item.meal}</li>)}</ul>
        </div>
    </div>)
  }
}

export default List;