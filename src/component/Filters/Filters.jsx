import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";
import { setDepartment } from '../../actions/setDepartment';
import { clearDepartment } from '../../actions/clearDepartment';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    display: 'flex',
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const mapStateToProps = state => ({
    department: state.departmentReducer.department,
    options: state.departmentReducer.options,
}); 
const mapDispatchToProps = dispatch => ({
    setDepartment: (department) => dispatch(setDepartment(department)),
    clearDepartment:() => dispatch(clearDepartment())
});


function Filters({department, setDepartment, options}) {
  const classes = useStyles();
//   const [department, setDepartment] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setDepartment(event.target.value);
  } 

  function handleClose() {  
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }


  return (
    <form autoComplete="off">
      {/* <Button className={classes.button}>
        Filters
      </Button> */}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">
            Department
        </InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={department}
          onChange={handleChange}
          inputProps={{
            name: 'name',
            id: 'demo-controlled-open-select',
          }}>
          
          <MenuItem value=""> <em>None</em> </MenuItem>
          {options.map(option => (
            <MenuItem key = {option} value= {option}> {option} </MenuItem>
          ))}

        </Select>
      </FormControl>
      
    </form>
  );
}


export default connect(mapStateToProps,mapDispatchToProps)(Filters);