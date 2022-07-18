import { resolveComponentProps } from '@mui/base';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import Register from '../Register';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './style.scss';

const schema = yup.object().shape({
    email: yup.string().email().required('please enter your email'),
    password: yup.string().min(8).max(32).required(),
  });

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });
      const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
      };

  return (
    <div className='register__form'>
      <Avatar className='register__avatar'>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Create An Account
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit(onSubmitHandler)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete='Given-nam'
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth id='lastName' label='Last Name' name='lastName' autoComplete='family-name' />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth id='email' label='Email Address' name='email' autoComplete='email' {...register("email")} />
            <p>{errors.email?.message}</p>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'

            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value='allowExtraEmails' color='primary' />}
              label='I want to receive inspiration, marketing promotions and updates via email.'
            />
          </Grid>
        </Grid>

        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
      </Box>
    </div>
  );
}