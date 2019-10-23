import React, {Component} from 'react';

import Profile from './components/Profile/Profile';
import Map from './components/Map/Map';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      route: window.location.hash.substr(1),
    };
  }
  
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }

  render() {
    var Route;
    switch (this.state.route) {
    case '/profile':
      Route = Profile;
      break;
    case '/map':
      Route = Map;
      break;
    case '/registration':
      Route = Registration;
      break;
    default:
      Route = Login;
      break;
    }

    return (
      <>
        <Route setRoutFun={this.setRoute} />
      </>
    )
  };
}

export default App;
