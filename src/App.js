import React, {Component} from 'react';

import Profile from './components/Profile/Profile';
import Map from './components/Map/Map';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      name: 'Dima',
      route: '/',
    };
  }

  setRoute = (newRoute) => {
    this.setState({route: newRoute})
  };
  
  render() {
    var Route
      switch (this.state.route) {
        case '/profile':
          Route = Profile;
          break;
        case '/Map':
          Route = Map;
          break;
        case '/registration':
          Route = Registration;
          break;
        default:
          Route = Login;
      }

    return (
      <>
        <Route setRountFun={this.setRoute} />
      </>
    )
  };
}

export default App;
