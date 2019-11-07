import React, { useContext } from 'react';
import { AuthContext } from "../shared/AuthContext";

const Profile = () => {
  const { isAuthorized } = useContext(AuthContext);

  return ( 
    <div>
      {isAuthorized ? <h1>Профиль</h1> : <h1>Сначала авторизуйтесь</h1>}
    </div>
  );
}
 
export default Profile;