import React, { useContext, useEffect, useReducer, useState } from 'react';
import ButtonsContainer from '../../Elements/ButtonsContainer/ButtonsContainer';
import Content from '../../Elements/Content/Content';
import Input from '../../Elements/Input/Input';
import MainButton from '../../Elements/MainButton/MainButton.';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from '../../Util/validators';
import classes from './Auth.Module.css';

import {AuthContext} from '../../context/auth-context'
import { Redirect, useHistory } from 'react-router-dom';

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

  const loginHadler = () => {
    console.log(inputsValidity);
    auth.login();
  };

  const changeMode = () => {
    setIsRegisterMode(prevState => !prevState)
  }


  useEffect(() => {
  if (!isRegisterMode) {
    if (
      inputsValidity.usernameInput.isValid &&
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

  },[inputsValidity])

  return (
    <>
      <Content>
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

        {isRegisterMode && (
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
        )}
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
        <button className={classes.ChangeBtn} onClick={changeMode}>{isRegisterMode ? 'Switch to log in' : 'Switch to rgister'}</button>
      </Content>
      <ButtonsContainer>
        <MainButton
          disabled={!formIsValid}
          onClick={loginHadler}
        >
          <p>{isRegisterMode ? 'Register' : 'Log in'}</p>
        </MainButton>
      </ButtonsContainer>
    </>
  );
};

export default Auth;