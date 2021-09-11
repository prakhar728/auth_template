import React, { useState } from 'react'
import styles from './SignUp.module.css';
import { TextField, Button, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons'
import { postRegister } from '../../API/Index';

const SignUp = () => {
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            "Name":Name,
            "email":email,
            "password":password,
        }
        post
        console.log("Form Submited", Name, email, password, confirmPassword);
    }
    return (
        <div>
            <Typography
                variant="h2"
                color="textPrimary"
                align="center"
                className={styles.heading}
            >
                SIGN UP
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit} className={styles.form}>

                <TextField
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    className={styles.field}
                    label="Name"
                    variant="outlined"
                    color="primary"
                    required
                />

                <TextField
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    className={styles.field}
                    label="Email"
                    variant="outlined"
                    color="primary"
                    required
                />

                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    className={styles.field}
                    label="Password"
                    variant="outlined"
                    color="primary"
                    required
                />

                <TextField
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}
                    className={styles.field}
                    label="Confirm Password"
                    variant="outlined"
                    color="primary"
                    required
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRight />}
                    className={styles.button}>LOGIN</Button>
            </form>
        </div>
    )
}

export default SignUp
