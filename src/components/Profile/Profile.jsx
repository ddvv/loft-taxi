import React from 'react';

import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForm';

class Profile extends React.Component {
  render() {
    return(
      <>
        <Header/>
        <ProfileForm/>
      </>
    )
  }
}

export default Profile;