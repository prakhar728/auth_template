# AUTH TEMPLATE

This is a auth template open to improvements that can be cloned and used instantly. 
MERN STACK BASED.

## RUN IT ON YOUR MACHINE

1. Clone the repo.
2. Navigate to the Server folder and run `npm install` in the bash shell to install the dependencies.
3. Type in `npm start` to start the server  as well as the email scripting.

# ENDPOINTS

## `http://localhost:3000/`

<br />
### `/api/user/register` - Register the user. POST REQUEST

Payload -  
* `name` : Contains the name of the user(Required)
* `email`: Email id of the user(Required)
* `password`: Password of the user.(Password should be 6 letters long)(Required)

Returns - 
Json object - {
    user: - userIdoftheUserCreated
}

### `api/user/login` - Login with the credentials. POST REQUEST

Payload - 
* `email`: The email with which the user registered.
* `password`:The password to login.

Returns - 
String Type - JSON web Token - This has to be added to the headers as `auth-token`:JWT to make requests to private routes.

If for any reason the JWT token is note present or can't be verified then a message `Access Denied` will be sent by the server.

## ENV FILE

The ENV file has two components
1. `MONGO_URI` - Contains the URL to your Mongo database
2. `TOKEN_SECRET` -  Contains the Secret token for JWT to use.

The location of the .env file is in the server. So relative pathing from root folder will  be 
'./server/.env' 
