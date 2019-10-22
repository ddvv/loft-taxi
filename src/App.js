import React, {Component} from 'react';

import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Dima',
    };
  }
  
  render() {
    return (
      <>
        <Header name={this.state.name} />
      </>
    )
  };
}

export default App;
