import React, { useEffect, useState, useContext } from 'react';

import Modal from '../../Elements/Modal/Modal';
import { useHttpClient } from '../../Util/http-hook';
import { AuthContext } from '../../context/auth-context';
import classes from './UserPage.Module.css';
import Layout from '../../Elements/Layout/Layout';
import SecondaryButton from '../../Elements/SecondaryButton/SecondaryButton';

const UserPage = () => {
  const [userProfile, setUserProfile] = useState({});
  const { isLoading, error, sendRequest, resetError } = useHttpClient();
  const auth = useContext(AuthContext);

  useEffect(() => {
    // nie ustawiać funkcji w useEffect jako asynchronicznej, tylko użyć IIFE
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/user/profile/${auth.userId}`
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
            {userProfile.image ? <img src={userProfile.image} alt={userProfile.name} /> : <i className="fas fa-user-circle"></i>}
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
        <SecondaryButton to='/item/all/latest-sets'>Latest saved sets</SecondaryButton>
        </>
      )}
    </Layout>
  );
};

export default UserPage;
