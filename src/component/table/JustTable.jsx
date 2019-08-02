import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import { setOptions} from '../../actions/setOptions';
import * as data from '../../mockdata';

const mapStateToProps = state => ({
  department: state.departmentReducer.department,
  options: state.departmentReducer.options,
}); 
const mapDispatchToProps = dispatch => ({
  setOptions: (options) => dispatch(setOptions(options)),
});

function JustTable({department, options}) {
  
  const departmentFilter = department ? data.rows.filter(row => row.department === department) : data.rows;
  
  for (let index = 0; index < data.rows.length; index ++) {
    if (!options.includes(data.rows[index].department)) {
      setOptions(options.push(data.rows[index].department));
    }
  }
  console.log(options)
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>EmployeeID</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departmentFilter.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.employeeID}</TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(JustTable);