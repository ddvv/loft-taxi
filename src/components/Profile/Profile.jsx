import React from 'react';

import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForm';

class Profile extends React.Component {
  render() {
    return(
      <>
        <Header/>
        <h1>Профиль</h1>
        <ProfileForm/>
      </>
    )
  }
}

export default Profile;