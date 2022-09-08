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
      currentFoodItem: ''
    }
    this.addFoodItem = this.addFoodItem.bind(this);
    this.getRandomFoodItem = this.getRandomFoodItem.bind(this);
  }


  addFoodItem() {
    // ajax post req to DB
  }

  getRandomFoodItem() {

  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Random food recommendation system.
          </h1>
          <Recommend onClick={this.getRandomFoodItem.bind(this)} />
          <List onClick={this.addFoodItem.bind(this)} foodItem={this.state.currentFoodItem}/>
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