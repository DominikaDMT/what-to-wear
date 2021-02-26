import React, { useEffect, useState, useContext } from 'react';

import Modal from '../../Elements/Modal/Modal';
import { useHttpClient } from '../../Util/http-hook';
import { AuthContext } from '../../context/auth-context';
import classes from './UserPage.Module.css';
import Layout from '../../Elements/Layout/Layout';

const UserPage = () => {
  const [userProfile, setUserProfile] = useState({});
  const { isLoading, error, sendRequest, resetError } = useHttpClient();
  const auth = useContext(AuthContext);

  useEffect(() => {
    // nie ustawiać funkcji w useEffect jako asynchronicznej, tylko użyć IIFE
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/user/profile/${auth.userId}`
        );
        setUserProfile({
          id: responseData.user.id,
          name: responseData.user.name,
          email: responseData.user.email,
          image: responseData.user.image,
          clothes: responseData.user.clothes.length,
        });
      } catch (err) {}
    };
    fetchUser();
  }, [sendRequest]);

  return (
    <Layout>
      {error && <Modal closeModal={resetError}>{error}</Modal>}
      {/* {isLoading && <Modal closeModal={resetError} withSpinner>{<LoadingSpinner/>}</Modal>} */}
      {!isLoading && userProfile && (
        <>
          <div className={classes.ProfilePicture}>
            <img src={userProfile.image || 'https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg'} alt={userProfile.name} />
          </div>
          <div className={classes.Info}>
            <p className={classes.Name}>
              Username: <strong>{userProfile.name}</strong>
            </p>

            <p className={classes.Name}>
              Items: <strong>{userProfile.clothes}</strong>
            </p>
            <p className={classes.Name}>
              Collections: <strong>0</strong>
            </p>
          </div>
        </>
      )}
    </Layout>
  );
};

export default UserPage;
