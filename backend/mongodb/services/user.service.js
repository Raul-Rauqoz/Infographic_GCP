const user = require('../schemas/s_users');

const get_all_users_ = async () => {
	try {
		return await user.find();
	} catch (error) {
		console.error(error);
		return null;
	}
};

const get_one_user_ = async ({ nick, pass }) => {
	try {
		const pre_one = await user.findOne({ nick: nick, pass: pass });
		return pre_one === null ? false : pre_one;
	} catch (error) {
		console.error(error);
		return null;
	}
};

const post_one_user_ = async ({ nick, pass }) => {
	try {
		const pre_create = await user.findOne({ nick: nick });
		return pre_create === null ? await user.create({ nick, pass }) : false;
	} catch (error) {
		console.error(error);
		return null;
	}
};

const delete_one_user_ = async ({ nick }) => {
	try {
		const pre_delete = await user.deleteOne({ nick });
		return pre_delete.deletedCount === 0 ? false : true;
	} catch (error) {
		console.error(error);
		return null;
	}
};

const delete_all_users_ = async () => {
	try {
		const pre_delete = await user.deleteMany({});
		return pre_delete.deletedCount === 0 ? false : true;
	} catch (error) {
		console.error(error);
		return null;
	}
};

module.exports = { get_all_users_, get_one_user_, post_one_user_, delete_one_user_, delete_all_users_ };
