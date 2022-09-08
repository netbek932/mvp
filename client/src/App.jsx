import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import $ from 'jquery';
import List from './List.jsx'
import Recommend from './Recommend.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFoodItems: [],
      randomFoodItem: ''
    }
    this.addFoodItem = this.addFoodItem.bind(this);
    this.getRandomFoodItem = this.getRandomFoodItem.bind(this);
  }


  addFoodItem(item) {
    // ajax post req to DB
    console.log('Trying to add item...')
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

  getRandomFoodItem() {
    $.ajax({
      type: 'GET',
      url: '/meals',
      success: function(data) {
        console.log('GET SUCCESS')
      }
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Random food recommendation system.
          </h1>
          {/* <Recommend onClick={this.getRandomFoodItem.bind(this)} /> */}
          <button onClick={this.getRandomFoodItem}>What should I eat tonight?</button>
          <p>{this.state.randomFoodItem}</p>
          <List onClick={this.addFoodItem.bind(this)} />
        </header>
      </div>
    );
  }
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(
//   <StrictMode>
//   <App />
//   </StrictMode>
// );
//ReactDOM.render(<App />, document.getElementById('app'));