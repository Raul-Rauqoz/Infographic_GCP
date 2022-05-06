const template = require('../schemas/template');

const get_all_ = async () => {
	try {
		return await template.find();
	} catch (error) {
		console.error(error);
		return null;
	}
};

const get_one_ = async (data) => {
	try {
		return await template.findOne({ template_text: data });
	} catch (error) {
		console.error(error);
		return null;
	}
};

const post_one_ = async (data) => {
	try {
		return await template.create({ template_text: data });
	} catch (error) {
		console.error(error);
		return null;
	}
};

module.exports = { get_all_, get_one_, post_one_ };
