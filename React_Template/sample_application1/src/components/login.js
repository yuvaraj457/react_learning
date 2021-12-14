import { Grid, Paper, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: 20,
        height: '70vh',
        width: 400,
        margin: "20px auto"
    },
    avatar: {
        backgroundColor: "#aa00ff"
    },
    form: {
        width: "100%",
        marginTop: "10px"
    },
    submit: {
        margin: "10px"
    }
}))
export const LoginIn = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Paper elevation={10} className={classes.paperStyle}>
                <Grid align="center">
                    <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                    <Typography component="h1" variant="h5">Login</Typography>
                </Grid>
                <form className={classes.form}>
                    <TextField
                        id="email"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        autoComplete="email"
                        autoFocus
                        required
                    />
                    <TextField
                        id="password"
                        label="Password"
                        margin="normal"
                        variant="outlined"
                        type="password"
                        fullWidth
                        required
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type='submit'
                        color="primary"
                        variant="contained"
                        className={classes.submit}
                        fullWidth
                    >
                        LogIn
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="" variant="body2">
                                Forgot password?
                            </Link>

                        </Grid>
                        <Grid item>
                            <Link href="" variant="body2">
                                Don't have a account? SignUp
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}