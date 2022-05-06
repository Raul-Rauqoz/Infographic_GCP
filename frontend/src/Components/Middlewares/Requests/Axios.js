import axios from 'axios';
const url_base = 'http://localhost:4000';

export const get_login_ = async ({ nick, pass }) => {
	var data = JSON.stringify({
		nick: nick,
		pass: pass
	});

	var config = {
		method: 'post',
		url: `${url_base}/one`,
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};

	try {
		return await axios(config);
	} catch (error) {
		return error;
	}
};

export const post_signup_ = async ({ nick, pass }) => {
	var data = JSON.stringify({
		nick: nick,
		pass: pass
	});

	var config = {
		method: 'post',
		url: `${url_base}/create`,
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};
	try {
		return await axios(config);
	} catch (error) {
		return error;
	}
};

export const delete_account_ = async ({ nick }) => {
	var axios = require('axios');
	var data = JSON.stringify({
		nick: nick
	});

	var config = {
		method: 'delete',
		url: `${url_base}/delete`,
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};

	try {
		return await axios(config);
	} catch (error) {
		return error;
	}
};
