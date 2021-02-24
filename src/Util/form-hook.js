import React, { useReducer } from 'react';

const initialState = {
  id: '',
  color: '',
  brand: '',
  name: '',
  level: '',
  image: '',
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'color':
      return {
        ...state,
        color: action.payload,
      };
    case 'brand':
      return {
        ...state,
        brand: action.payload,
      };
    case 'description':
      return {
        ...state,
        name: action.payload,
      };
    case 'level':
      return {
        ...state,
        level: action.payload,
      };
    case 'image':
      return {
        ...state,
        image: action.payload,
      };
    case 'state':
      return action.payload;

    default:
      break;
  }
};

const useFormReducer = () => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  return [state, dispatch];
};
export default useFormReducer;