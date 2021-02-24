import React, { useContext, useEffect, useReducer, useState } from 'react';
import Input from '../../Elements/Input/Input';
import MainButton from '../../Elements/MainButton/MainButton.';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from '../../Util/validators';
import classes from './Auth.Module.css';

import { AuthContext } from '../../context/auth-context';
import { Redirect, useHistory } from 'react-router-dom';
import SecondaryButton from '../../Elements/SecondaryButton/SecondaryButton';
import LoadingSpinner from '../../Elements/LoadingSpinner/LoadingSpinner';
import Modal from '../../Elements/Modal/Modal';
import { useHttpClient } from '../../Util/http-hook';
import Layout from '../../Elements/Layout/Layout';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'username':
      return {
        ...state,
        usernameInput: {
          value: action.value,
          isValid: action.isValid,
        },
      };
    case 'email':
      return {
        ...state,
        emailInput: {
          value: action.value,
          isValid: action.isValid,
        },
      };
    case 'password':
      return {
        ...state,
        passwordInput: {
          value: action.value,
          isValid: action.isValid,
        },
      };
    default:
      return state;
  }
};

const Auth = () => {
  const auth = useContext(AuthContext);

  const [inputsValidity, dispatch] = useReducer(formReducer, {
    usernameInput: { value: '', isValid: false },
    emailInput: { value: '', isValid: false },
    passwordInput: { value: '', isValid: false },
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const { isLoading, error, sendRequest, resetError } = useHttpClient();

  const authSubmitHandler = async () => {
    if (isRegisterMode) {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/user/signup',
          'POST',
          JSON.stringify({
            name: inputsValidity.usernameInput.value,
            email: inputsValidity.emailInput.value,
            password: inputsValidity.passwordInput.value,
          }),
          { 'Content-Type': 'application/json' }
        );

        auth.login(responseData.user.id);
      } catch (err) {
        // nie musi tu być nic, bo error jest ogarnięty w custom hooku
      }
    } else {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/user/login',
          'POST',
          JSON.stringify({
            email: inputsValidity.emailInput.value,
            password: inputsValidity.passwordInput.value,
          }),
          { 'Content-Type': 'application/json' }
        );

        auth.login(responseData.user.id);
      } catch (err) {}
    }
  };

  const changeMode = () => {
    setIsRegisterMode((prevState) => !prevState);
  };

  useEffect(() => {
    if (!isRegisterMode) {
      if (
        inputsValidity.emailInput.isValid &&
        inputsValidity.passwordInput.isValid
      ) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }
    if (isRegisterMode) {
      if (
        inputsValidity.usernameInput.isValid &&
        inputsValidity.passwordInput.isValid &&
        inputsValidity.emailInput.isValid
      ) {
        setFormIsValid(true);
      } else {
        setFormIsValid(false);
      }
    }
  }, [inputsValidity]);

  return (
    <>
      <Layout
        buttons={
          <MainButton disabled={!formIsValid} onClick={authSubmitHandler}>
            {isRegisterMode ? 'Register' : 'Log in'}
          </MainButton>
        }
      >
        {error && <Modal closeModal={resetError}>{error}</Modal>}
        {/* {isLoading && <Modal closeModal={resetError} withSpinner>{<LoadingSpinner/>}</Modal>} */}
        {isRegisterMode && (
          <Input
            element='input'
            id='username'
            type='text'
            placeholder='Enter user name'
            label='Username:'
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            errorText='Please enter a valid Username'
            onDispatch={dispatch}
          />
        )}

        <Input
          element='input'
          id='email'
          type='text'
          placeholder='Enter e-mail'
          label='E-mail:'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid E-mail address'
          onDispatch={dispatch}
        />

        <Input
          element='input'
          id='password'
          type='password'
          placeholder='Enter password'
          label='Password:'
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText='Please enter a valid Password'
          onDispatch={dispatch}
        />
        <SecondaryButton onClick={changeMode}>
          {isRegisterMode ? 'Switch to log in form' : 'Switch to register form'}
        </SecondaryButton>
      </Layout>
    </>
  );
};

export default Auth;
