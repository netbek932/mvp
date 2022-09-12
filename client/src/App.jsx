import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import $ from 'jquery';
import List from './List.jsx';
import './styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      randomFoodItem: ''
    }
    this.addFoodItem = this.addFoodItem.bind(this);
    this.getRandomFoodItem = this.getRandomFoodItem.bind(this);
    this.getList = this.getList.bind(this);
    this.deleteFoodItem = this.deleteFoodItem.bind(this);
  }

  addFoodItem(item) {
    console.log('Adding item...')
    $.ajax({
      type: 'POST',
      url: '/meals',
      data: {
        foodItem: item
      },
      success: function(err) {
        console.log(`${item} - added to your list!`)
      }
    });
  }

  deleteFoodItem(item) {
    console.log(item)
    $.ajax({
      type: 'POST',
      url: '/user/:meals',
      data: {
        foodItem: item
      },
      success: function(err) {
        console.log(`${item} - deleted from your list!`)
      }
    });
  }

  getRandomFoodItem() {
    $.ajax({
      type: 'GET',
      url: '/meals',
    })
    .then((data) => {
      this.setState({randomFoodItem: data})
    })
  }

  getList() {
    $.ajax({
      type: 'GET',
      url: '/user/:meals',
    })
    .then((data) => {
      this.setState({userList: data})
    })
  }

  render () {
    return (
      <div className="App">
          <h1>
            Welcome to random food recommendation!
          </h1>

          <div className="getSuggestion">
            <button onClick={this.getRandomFoodItem}>What should I eat tonight?</button>
            <p>{this.state.randomFoodItem}</p>
          </div>

          <div className="List" >
            <List onClick={this.addFoodItem.bind(this)} onClickList={this.getList.bind(this)} foodList={this.state.userList} delete={this.deleteFoodItem.bind(this)}/>
          </div>

      </div>
    );
  }
}

export default App;

