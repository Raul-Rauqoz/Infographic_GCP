# Instructions for this Template of Socket IO

## Installation and Use

You need run the next command

```bash
  npm install socket.io-client
```

and for use, you need only uncomment this line on App.js

```javascript
// import './Components/Middlewares/SocketIO/SocketIO';
```

>Remember create the file ".env" on the folder frontend with your key for use this environment variable (then restart your server):

```bash
example using the backend:

REACT_APP_SOCKET=http://localhost:4000
```

## File SocketIO.js

In this file you can see this structure:

```javascript
import socketIOClient from 'socket.io-client';
const socket = socketIOClient(process.env.REACT_APP_SOCKET, { transports: [ 'websocket' ] });

/* 
    You can create and export here your events socket.emit
*/

export default socket;
```

And create and export (if you want) other events "on" or "emit".

>If you need see the official doc for socket io:

[Documentation](https://socket.io/docs/v4/emit-cheatsheet/)
