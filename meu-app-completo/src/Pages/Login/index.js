import React, { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import {
  DivRoot,
  DivForm,
  Button_,
  DivLoading
} from './styles';

const logo = require('../../assets/helloworldlogo.png');
const Login = () => { 

  const classes = useStyles();

  const { signIn } = useAuth();
  const history = useHistory();
  
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  async function logIn(event) {
    event.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      try {
        await signIn({
          email: email,
          senha: values.password,
        });
  
        history.push('/users');  
  
      } catch (error) {
        console.log(error);
        console.log("Usuário ou senha não confere.");
  
      } finally {
        setLoading(false);
      }

    }, 1000)
  }

  return (
    <>
    <DivRoot>
     <img src={logo} style={{ borderRadius: '12px', width: '30vw', height: '30vh', margin: ' 0 auto'}}/>

      <DivForm>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <TextField  
          onChange={(e) => setEmail(e.target.value)} 
          id="outlined-basic" 
          label="Email" 
          variant="outlined" />
        </FormControl>
      </DivForm>

      <DivForm>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          
      </DivForm>

      <Button_>
            <Button variant="outlined" href="#outlined-buttons" disabled={loading}
            onClick={(e) => logIn(e)}>
               Login
            </Button>
      </Button_>

    </DivRoot>
    <DivLoading>
      {loading && <CircularProgress  size={90}  />}
    </DivLoading>
    </>
  )
}

export default Login;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25vw',
  },
}));