//IMPORT
// const dotenv = require('dotenv');
// const colors = require('colors');
const authRouter = require('./routes/auth');
const db = require('./config/db');
const app = require('./app/app');
const PORT = 3000
const http = require('http');
const cors = require('cors');
const server =  http.createServer(app);
server.listen(PORT, () => {
    console.log(`Socket Server listening on port ${PORT}`.yellow.bold);
});

// var io = require('socket.io')(server,{
//     cors:{
//         origin:"*",
//     }

// });

// io.on( 'connection', ( socket ) => {
//     console.log("New user connected");
//     print(socket.id);
// });




//SERVER CONNECTION
app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server is listening at http://localhost:${PORT}`.blue.underline.bold);
});