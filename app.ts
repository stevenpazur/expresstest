// Setting up a new NPM Express project
// 1. npm init
// 2. npm install express
// 3. (if not already installed) npm install -g ts-node
// 4. npm install body-parser
// 5. (install any other necessary dependencies)
// 6. npm i @types/node
// 7. npm install --only-dev @types/express
// 8. code . (opens VS code at the current directory)

// import express from 'express';  // import (export member) from 'package-name'
                                // non-default imports must be in { nonDefaultExport }

// What is a port?
// A port is an access point to a machine.  We needa port for our application to 'listen' on.
// Applications outside of our computer can send messages to a port.  Our application can listen
// and respond to those messages.  

const port = 3000;

/*
    Express is a framework for creating web applications that communicate over HTTP
    Express can be use d to easily listen for incoming 'requests' and easily handle
    writing 'responses'.
    A server is a machine that 'serves' things.  For HTTP, that means users send 'requests'
    and the server responds with 'responses'.
*/
const express = require( "express" );

// Middleware
express.use('', (request, response, next) => {
    response.json({message: 'Hello from express!'})
    next();
});

const userRouter = express.Router();

// for most things, GET is the default request sent
userRouter.get('', (request, response, next) => {
    response.json({message: 'Getting user'});
    next();
});

userRouter.post('', (request, response, next) => {
    response.json({message: 'Creating user'});
    next();
});

express.use('/users', userRouter);

express.listen(port, () => {
    console.log('Express listening on port ' + port);
});