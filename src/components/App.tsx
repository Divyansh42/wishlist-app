import React, { Component } from 'react';
import '../App.css';

import WishListView from "./WishListView";
import { render } from '@testing-library/react';

class App extends Component {
  props: any;
  constructor(props: any) {
    super(props);
    this.props = props;
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">WishList</h1>
        </header>
        <WishListView wishList={this.props.wishList} />
      </div>
    );
  }
} 
export default App;
