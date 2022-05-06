// Module Router from Express
const routes = require('express').Router();
const {
	get_all_users_,
	post_one_user_,
	get_one_user_,
	delete_one_user_,
	delete_all_users_
} = require('../mongodb/services/user.service');

// Routes
routes.get('/', (req, res) => {
	res.status(200).send(true);
});

routes.get('/all', async (req, res) => {
	const all_users = await get_all_users_();
	res.status(200).send(all_users);
});
routes.post('/one', async (req, res) => {
	const { nick, pass } = req.body;
	const all_users = await get_one_user_({ nick, pass });
	res.status(200).send(all_users);
});

routes.post('/create', async (req, res) => {
	const { nick, pass } = req.body;
	const pre_create = await post_one_user_({ nick, pass });
	res.status(200).send(pre_create);
});

routes.delete('/delete', async (req, res) => {
	const { nick } = req.body;
	const pre_delete = await delete_one_user_({ nick });
	res.status(200).send(pre_delete);
});

routes.delete('/deleteall', async (req, res) => {
	const pre_delete = await delete_all_users_();
	res.status(200).send(pre_delete);
});

routes.get('/doc', (req, res) => {
	res.status(200).redirect('/api-doc');
});

module.exports = routes;
