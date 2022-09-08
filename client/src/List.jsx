import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  handleChange(e) {
    this.setState({item: e.target.value});
  }


  render () {
    return (<div>
      <form onSubmit={this.props.onClick(this.state.item)}>
      <label>
        Add a food item to your list:
        <div>
        <input type="text" />
        <input type="submit" value="Submit" onChange={this.handleChange.bind(this)}/>
        </div>
      </label>
      </form>
    </div>)
  }
}

export default List;