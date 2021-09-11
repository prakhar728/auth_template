import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './SignIn.module.css';
import { KeyboardArrowRight } from '@material-ui/icons';
import { postLogin } from '../../API/Index';
import img1 from '../../Static/img1.png';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#811453'
        }
    }
});

const SignIn = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "email": email,
            "password": password
        }
        postLogin(data);
        console.log(email, password);
    }
    return (
        <ThemeProvider theme={theme}>
            <div className={styles.main} >
                <form onSubmit={handleSubmit} noValidate autoComplete="off" className={styles.form}>
                    <div className={styles.innerFormContainer}>
                        <Typography
                            variant="h5"
                            color="inherit"
                            align="center"
                            className={styles.heading}
                        >
                            Log in to your Account
                        </Typography>

                        <TextField
                            variant="outlined"
                            label="Email"
                            color={theme.primary}
                            className={styles.field}
                            onChange={(e) => setemail(e.target.value)}
                            required
                        />

                        <TextField
                            variant="outlined"
                            className={styles.field}
                            label="Password"
                            type="password"
                            onChange={(e) => setpassword(e.target.value)}
                            color="inherit"
                            required
                        />
                        <div className={styles.buttonContainer}>
                            <Button
                                type="Submit"
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={<KeyboardArrowRight />}
                                className={styles.Button}
                            >
                                LOGIN
                            </Button>
                            <Button
                                type="Submit"
                                variant="outlined"
                                color="primary"
                                size="large"
                                endIcon={<KeyboardArrowRight />}
                                className={styles.Button}
                            >
                                <Link to="/" className={styles.link}> REGISTER </Link>
                            </Button>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={img1} alt="DoodleSideImage" className={styles.image} />
                    </div>
                </form>
            </div>
        </ThemeProvider>
    )
}

export default SignIn
