import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '250px',
    justifyContent: '',
    marginLeft:"30px",
    height:"60px"

  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    borderRadius: '10px',
    color:"black",
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
      margin:"5px",
      color:"black"
    },
    '&.Mui-selected': {
      borderRadius: '10px',
      background: 'rgb(76, 217, 100)',
      color: '#ffffff',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: 'rgb(76, 217, 100)',
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
