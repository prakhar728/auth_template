import React, { useState } from 'react'
import styles from './SignUp.module.css';
import { TextField, Button, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons'
import img1 from '../../Static/img1.png';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { postRegister } from '../../API/Index';
import {Link} from 'react-router-dom';
const SignUp = () => {
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "name": Name,
            "email": email,
            "password": password,
        }
        postRegister(data);
        console.log("Form Submited", Name, email, password, confirmPassword);
    }
    const theme = createTheme({
        palette: {
            primary: {
                main: '#811453'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.main}>

                <form onSubmit={handleSubmit} noValidate autoComplete="off" className={styles.form}>
                    <div className={styles.imageContainer}>
                        <img src={img1} alt="DoodleSideImage" className={styles.image} />
                    </div>
                    <div className={styles.innerFormContainer}>
                        <Typography
                            variant="h5"
                            color="inherit"
                            align="center"
                            className={styles.heading}
                        >
                            Create Account
                        </Typography>

                        <TextField
                            variant="outlined"
                            label="Name"
                            color={theme.primary}
                            className={styles.field}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <TextField
                            variant="outlined"
                            className={styles.field}
                            label="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            color="inherit"
                            required
                        />
                        <TextField
                            variant="outlined"
                            className={styles.field}
                            label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            color="inherit"
                            required
                        />
                        <TextField
                            variant="outlined"
                            className={styles.field}
                            label="Confirm Password"
                            type="password"

                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            REGISTER
                        </Button>
                        <Button
                            type="button"
                            variant="outlined"
                            color="primary"
                            size="large"
                            endIcon={<KeyboardArrowRight />}
                            className={styles.Button}
                        >
                            <Link to="/signIn" className={styles.link}> LOG IN </Link>
                        </Button>
                        </div>
                    </div>

                </form>
            </div>
        </ThemeProvider>
    )
}

export default SignUp
