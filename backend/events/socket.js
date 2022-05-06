// If you need use this please use "npm i socket.io"
module.exports.listen = (server) => {
	// Module Socket IO
	const io = require('socket.io')(server);
	// Events
	io.on('connection', (socket) => {
		console.log(`New ${socket.id}`);

		socket.on('disconnect', () => {
			console.log(`Disconnect ${socket.id}`);
		});
	});
};
