import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
  root: {
    '&$checked': {
      color: '#000',
    },
  },
  checked: {},
  wrap: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 0,
  },
  label: {
    fontSize: '.8rem',
    fontFamily: `'Raleway', sans-serif`,
  },
});

const CheckboxProton = ({ changeChecked, cuisine }) => {
  const classes = useStyles();
  const { checked, label, id } = cuisine;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckboxProton;
{/*
import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '60%',
    justifyContent: '',
    marginLeft:"30px"
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      margin:"5px"
    },
    '&.Mui-selected': {
      borderRadius: '10px',
      background: '#000',
      color: '#fff',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#000',
        color: '#fff',
      },
    },
  },
});

const FilterListToggle = ({ options, value, selectToggle }) => {
  const classes = useStyles();
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={selectToggle}
      className={classes.root}
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton className={classes.toggle} key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterListToggle;




*/ }