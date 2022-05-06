import socketIOClient from 'socket.io-client';
const socket = socketIOClient(process.env.REACT_APP_SOCKET, { transports: [ 'websocket' ] });

/* 
    You can create and export here your events socket.emit
*/

export default socket;
