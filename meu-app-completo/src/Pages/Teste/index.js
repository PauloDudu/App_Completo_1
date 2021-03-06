// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import FilledInput from '@material-ui/core/FilledInput';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import IconButton from '@material-ui/core/IconButton';

// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// const Teste = () => {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     amount: '',
//     password: '',
//     weight: '',
//     weightRange: '',
//     showPassword: false,
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className={classes.root}>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="standard-start-adornment"
//           className={clsx(classes.margin, classes.textField)}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
//           }}
//         />





//         <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
//           <Input
//             id="standard-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
//             aria-describedby="standard-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
//         </FormControl>




//         <FormControl className={clsx(classes.margin, classes.textField)}>
//           <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//           <Input
//             id="standard-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                 >
//                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>




//         <FormControl fullWidth className={classes.margin}>
//           <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
//           <Input
//             id="standard-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>



//       </div>
//       <div>


//         <TextField
//           label="With normal TextField"
//           id="filled-start-adornment"
//           className={clsx(classes.margin, classes.textField)}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
//           }}
//           variant="filled"
//         />




//         <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
//           <FilledInput
//             id="filled-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
//             aria-describedby="filled-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />
//           <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
//         </FormControl>




//         <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
//           <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
//           <FilledInput
//             id="filled-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//               </InputAdornment>
//             }
//           />
//         </FormControl>



//         <FormControl fullWidth className={classes.margin} variant="filled">
//           <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
//           <FilledInput
//             id="filled-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//           />
//         </FormControl>




//       </div>
//       <div>
//         <TextField
//           label="With normal TextField"
//           id="outlined-start-adornment"
//           className={clsx(classes.margin, classes.textField)}
//           InputProps={{
//             startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
//           }}
//           variant="outlined"
//         />
//         <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             value={values.weight}
//             onChange={handleChange('weight')}
//             endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
//             aria-describedby="outlined-weight-helper-text"
//             inputProps={{
//               'aria-label': 'weight',
//             }}
//             labelWidth={0}
//           />
//           <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
//         </FormControl>
//         <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-password"
//             type={values.showPassword ? 'text' : 'password'}
//             value={values.password}
//             onChange={handleChange('password')}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             labelWidth={70}
//           />
//         </FormControl>
//         <FormControl fullWidth className={classes.margin} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             value={values.amount}
//             onChange={handleChange('amount')}
//             startAdornment={<InputAdornment position="start">$</InputAdornment>}
//             labelWidth={60}
//           />
//         </FormControl>
//       </div>
//     </div>
//   );
// }

// export default Teste;

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing(1),
//     },
//     withoutLabel: {
//       marginTop: theme.spacing(3),
//     },
//     textField: {
//       width: '25ch',
//     },
// }));



// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

// export default function TemporaryDrawer() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//       })}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {/* <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      {/* <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} disabled>
        <InputLabel id="demo-simple-select-disabled-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error>
        <InputLabel id="demo-simple-select-error-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
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
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-readonly-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
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
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
}
