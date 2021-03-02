import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import SecondaryButton from '../SecondaryButton/SecondaryButton';

import ownClasses from './ItemForm.Module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const ItemForm = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.PhotoContainer}> {props.children} </div>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        style={{
          width: '80%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.creating && (
          <div className={ownClasses.DescriptionContainer}>
            <TextField
              id='outlined-basic'
              label="URL (if there's no image)"
              size='small'
              variant='outlined'
              style={{ width: '100%' }}
              value={props.item.imageURL}
              onChange={(e) =>
                props.dispatch({ type: 'imageURL', payload: e.target.value })
              }
            />
          </div>
        )}
        <div className={ownClasses.DescriptionContainer}>
          <TextField
            id='outlined-basic'
            label='Description'
            size='small'
            variant='outlined'
            style={{ width: '100%' }}
            value={props.item.name}
            onChange={(e) =>
              props.dispatch({ type: 'description', payload: e.target.value })
            }
          />
        </div>
        <div className={ownClasses.DescriptionContainer}>
          <FormControl
            variant='outlined'
            className={classes.formControl}
            style={{ width: '48%' }}
            size='small'
          >
            <InputLabel id='demo-simple-select-outlined-label'>
              Color
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='demo-simple-select-outlined'
              value={props.item.color}
              onChange={(e) =>
                props.dispatch({ type: 'color', payload: e.target.value })
              }
              label='Color'
            >
              {/* <MenuItem value=''>
              <em>None</em>
            </MenuItem> */}
              <MenuItem value='multi'>multicolor</MenuItem>
              <MenuItem value='bw'>black {'&'} white</MenuItem>
              <MenuItem value='black'>black</MenuItem>
              <MenuItem value='gray'>gray</MenuItem>
              <MenuItem value='white'>white</MenuItem>
              <MenuItem value='red'>red</MenuItem>
              <MenuItem value='blue'>blue</MenuItem>
              <MenuItem value='green'>green</MenuItem>
              <MenuItem value='yellow'>yellow</MenuItem>
              <MenuItem value='orange'>orange</MenuItem>
              <MenuItem value='pink'>pink</MenuItem>
              <MenuItem value='beige'>beige</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id='outlined-basic'
            label='Brand'
            size='small'
            variant='outlined'
            style={{ width: '48%' }}
            value={props.item.brand}
            onChange={(e) =>
              props.dispatch({ type: 'brand', payload: e.target.value })
            }
          />
        </div>

        <RadioGroup
          size='medium'
          aria-label='level'
          name='level'
          value={`${props.item.level}`}
          onChange={(e) =>
            props.dispatch({ type: 'level', payload: e.target.value })
          }
        >
          <FormControlLabel
            size='small'
            value='1'
            control={<Radio />}
            label='t-shirt / shirt /
              blouse'
          />
          <FormControlLabel
            size='small'
            value='2'
            control={<Radio />}
            label='trousers / skirt'
          />
          <FormControlLabel
            size='small'
            value='3'
            control={<Radio />}
            label='shoes'
          />
        </RadioGroup>
        
      </form>
      <SecondaryButton>Select matching outfits</SecondaryButton>
    </>
  );
};

export default ItemForm;