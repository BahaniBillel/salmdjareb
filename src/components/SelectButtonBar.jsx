import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formcontrolarea: {
    width: '100%',
    backgroundColor: '#fff',

    [theme.breakpoints.down('sm')]: {
      padding: '0 3.5rem',
    },
  },
}));

export default function SelectButtonBar() {
  const [age, setAge] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={classes.formcontrolarea}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-disabled-label"
          style={{ color: '#000' }}
        >
          Star rating
        </InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <FormHelperText>Disabled</FormHelperText> */}
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-error-label"
          style={{ color: '#000' }}
        >
          Replied
        </InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <FormHelperText>Error</FormHelperText> */}
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-readonly-label"
          style={{ color: '#000' }}
        >
          Photos
        </InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          label="Age"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <FormHelperText>Read only</FormHelperText> */}
      </FormControl>

      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-required-label"
          style={{ color: '#000' }}
        >
          Reported
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <FormHelperText>Required</FormHelperText> */}
      </FormControl>
    </div>
  );
}
