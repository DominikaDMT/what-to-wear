import React from 'react';

import Content from '../../Elements/Content/Content';
import NavBar from '../../Elements/NavBar/NavBar';

import classes from './UserPage.Module.css';

const UserPage = () => {

  const USER = {
    id: 123,
    name: 'Użytkownik1', 
    email: 'user1@test.com',
    image: 'https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg',
    amountOfClothes: 5
  }

  return (
    <>
      <NavBar></NavBar>
      <Content>
        <div className={classes.ProfilePicture}>
          <img src={USER.image} alt={USER.name}/>
        </div>
        <p className={classes.Name}>Nazwa: <strong>{USER.name}</strong></p>
        <p className={classes.Name}>E-mail: <strong>{USER.email}</strong> </p>
        <p className={classes.Name}>Liczba ubrań: <strong>{USER.amountOfClothes}</strong> </p>
      </Content>
    </>
  );
};

export default UserPage;