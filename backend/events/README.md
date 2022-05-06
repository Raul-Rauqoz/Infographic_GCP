# Instructions for this Template of Socket IO

## Installation and Use

You need run the next command

```bash
  npm install socket.io
```

and for use, you need only uncomment this line on index.js

```javascript
// const io = require('./events/socket').listen(server_on);
```

## File socket.js

In this file you can see the events:

```javascript
io.on('connection', (socket) => {
    console.log(`New ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`Disconnect ${socket.id}`);
    });
});
```

With this structure you can use socket io, and create other events "on" or "emit".

>If you need see the official doc for socket io:

[Documentation](https://socket.io/docs/v4/emit-cheatsheet/)
