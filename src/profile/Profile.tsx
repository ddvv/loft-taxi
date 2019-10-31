import React, { useContext } from 'react';

import AuthContext from "./../contexts/auth-context";

export interface ProfileProps {
  
}
 
const Profile: React.SFC<ProfileProps> = () => {
  const auth = useContext(AuthContext);

  return ( 
    <>
      {auth.isLoggedIn ? <h1>Профиль</h1> : <h1>Сначала авторизуйтесь</h1> }
    </>
  );
}
 
export default Profile;