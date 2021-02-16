import React, { useEffect, useReducer } from 'react';

import { validate } from '../../Util/validators';

import classes from './Input.Module.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    isTouched: false,
  });
  const changeHandler = (e) => {
    dispatch({
      type: 'CHANGE',
      val: e.target.value,
      validators: props.validators,
    });
  };
  const touchHandler = () => {
    dispatch({ type: 'TOUCH' });
  };

  const { onDispatch, id } = props;

  useEffect(() => {
    if (inputState.isValid === true) {
      onDispatch({ type: id, value: inputState.value, isValid: true });
    } else if (inputState.isValid === false) {
      onDispatch({ type: id, value: inputState.value, isValid: false });
    }
  }, [inputState.value]);

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={(e, props) => changeHandler(e, props)}
        value={inputState.value}
        onBlur={touchHandler}
      ></textarea>
    );

  return (
    <div className={classes.Input}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {inputState.isTouched && !inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};
export default Input;