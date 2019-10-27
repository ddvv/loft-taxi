import React from 'react';

export interface ProfileProps {}
 
export interface ProfileState {}
 
class Profile extends React.Component<ProfileProps, ProfileState> {
  state = {}
  render() { 
    return ( 
      <>
        <h1>Профиль</h1>
      </>
    );
  }
}
 
export default Profile;