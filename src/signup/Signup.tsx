import React from "react";

export interface SignupProps {}
 
export interface SignupState {}
 
class Signup extends React.Component<SignupProps, SignupState> {
  state = {};
  render() { 
    return (
      <>
        <h1>Регистрация</h1>
      </>
    )
  }
}
 
export default Signup;