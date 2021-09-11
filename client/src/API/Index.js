import axios from 'axios';

const postLogin = (data) =>{
    axios.post('/api/user/login'
    ,data
    )
    .then(
        resp=>console.log(resp)
        )
    .catch(
        error=>console.log(error)
        );

    console.log("post the login data",data);
}

const postRegister = (data)=>{
    axios.post('http://localhost:5000/api/user/register'
    ,data
    )
    .then(
        resp=>console.log(resp)
    )
    .catch(
        error=>console.log(error)
    )
    console.log("Post the Register Data",data);
}

export {postLogin,postRegister};