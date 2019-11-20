import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store/duck';
import { isLoginSelector } from './store/selectors';
import Login from './containers/Login';
import Signup from './containers/Signup';
import AppRouter from './components/AppRouter';
// import { ThemeProvider, useTheme } from '@material-ui/core/styles';
// import { theme } from "./shared/theme";

const mapStateToProps = state => {
  return {
    isLogin: isLoginSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkIsLogin: () => dispatch(actions.checkIsLogin())
  };
};

class App extends Component {
  componentDidMount() {
    const { checkIsLogin } = this.props;
    checkIsLogin();
  }

  render() {
    const { isLogin } = this.props;

    return ( 
      <BrowserRouter>
        <Switch>
          <PrivateRoute 
            path="/dashboard" 
            permited={isLogin} 
            component={AppRouter}
          ></PrivateRoute>
          <Route 
            path="/login" 
            component={Login}
          ></Route>
          <Route 
            path="/signup" 
            component={Signup}
          ></Route>
          <Redirect to="login"></Redirect>
        </Switch>
      </BrowserRouter>
      // <ThemeProvider theme={theme}></ThemeProvider>
    );
  }
}

const PrivateRoute = ({ 
  component: Component, 
  permited, 
  ...rest 
}) => (
  <Route 
    {...rest} 
    render={ props => 
      permited
        ? <Component {...props}/> 
        : <Redirect to="/login"/> }
  ></Route>
);
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);