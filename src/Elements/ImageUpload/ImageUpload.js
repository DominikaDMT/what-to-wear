import React, { useEffect, useRef, useState } from 'react';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

import classes from './ImageUpload.Module.css';

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const fileInput = useRef();

  const pickImageHandler = () => {
    fileInput.current.click();
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    // funkcja, która wywoła się gdy fileReader skończy parsować plik:
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedImgHandler = (e) => {
    let pickedFile;
    let fileIsValid = isValid;
    // holds files, that user selected
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    if (props.newItem) {
      props.dispatch({ type: 'image', payload: pickedFile })
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  return (
    <div className={classes.ImageContainer}>
      <input
        type='file'
        name=''
        id={props.id}
        style={{ display: 'none' }}
        accept='.jpg,.jpeg,.png'
        ref={fileInput}
        onChange={pickedImgHandler}
      />


      <div className={classes.ImagePreview}>
        {previewUrl && <img src={previewUrl} alt='Preview' />}
        {!previewUrl && <p> <i className="far fa-image"></i> </p>}
      </div>
      <button className={classes.btnRound} onClick={pickImageHandler} >+</button>
      {!isValid && <p>{props.error}</p>}
    </div>
  );
};

export default ImageUpload;
