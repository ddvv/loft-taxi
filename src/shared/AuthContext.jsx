import React, {Component} from "react";
  
const AuthContext = React.createContext('');

class AuthProvider extends Component { 
	state = {
	  isAuthorized: false,
	};

	login = () => {
	  this.setState({ isAuthorized: true });
	};

	logout = () => {
	  this.setState({ isAuthorized: false });
	};

	render() {
	  const { children } = this.props;
	  const { isAuthorized } = this.state;
    
	  return (
	    <AuthContext.Provider 
	      value={{
	        isAuthorized,
	        login: this.login,
	        logout: this.logout,
	      }}>
	      { children }
	    </AuthContext.Provider>
	  )    
	}
}

export { AuthProvider, AuthContext };