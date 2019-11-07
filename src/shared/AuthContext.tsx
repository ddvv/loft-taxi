import React from "react";
import { bool } from "prop-types";
  
const AuthContext = React.createContext({ 
  isAuthorized: false,
  login: () => {},
  logout: () => {},
});

export interface AuthProviderProps {}
 
export interface AuthProviderState {}
 
class AuthProvider extends React.Component<AuthProviderProps, AuthProviderState> {
  state = { isAuthorized: false }

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
	      value = {{
	        isAuthorized,
	        login: this.login,
	        logout: this.logout,
	      }}
      >
	      { children }
	    </AuthContext.Provider>
	  )    
	}
}

export { AuthProvider, AuthContext };