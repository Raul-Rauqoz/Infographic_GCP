import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post_signup_ } from '../Middlewares/Requests/Axios';
import { SSignup } from './Style/Signup.style';

const Signup = () => {
	const navigate = useNavigate();
	const [ nick, setNick ] = useState('');
	const [ pass, setPass ] = useState('');

	const submit_ = async (e) => {
		e.preventDefault();
		try {
			const { data } = await post_signup_({ nick, pass });
			if (data) {
				navigate('/user', { state: { nick: data.nick } });
			} else {
				alert('User Exist, Try with other Nick');
			}
		} catch (error) {
			console.log(error);
		}
		setNick('');
		setPass('');
	};

	return (
		<SSignup>
			<h2>Signup</h2>
			<form className="rendered-form" onSubmit={submit_}>
				<div className="formbuilder-text form-group field-nick">
					<label htmlFor="nick" className="formbuilder-text-label">
						Nick<span className="formbuilder-required">*</span>
					</label>
					<input
						type="text"
						placeholder="nick"
						className="form-control"
						name="nick"
						access="false"
						id="nick"
						required="required"
						aria-required="true"
						onChange={(e) => setNick(e.target.value)}
						value={nick}
					/>
				</div>
				<div className="formbuilder-text form-group field-pass">
					<label htmlFor="pass" className="formbuilder-text-label">
						Pass<span className="formbuilder-required">*</span>
					</label>
					<input
						type="password"
						placeholder="pass"
						className="form-control"
						name="pass"
						access="false"
						id="pass"
						required="required"
						aria-required="true"
						onChange={(e) => setPass(e.target.value)}
						value={pass}
					/>
				</div>
				<div className="formbuilder-button form-group field-button-1651869556783">
					<button type="submit" className="btn-default btn" name="button-1" access="false" id="button-1">
						Signup
					</button>
					<button
						type="button"
						className="btn-default btn"
						name="button-2"
						access="false"
						id="button-2"
						onClick={() => navigate('/')}
					>
						I have account !
					</button>
				</div>
			</form>
		</SSignup>
	);
};

export default Signup;
