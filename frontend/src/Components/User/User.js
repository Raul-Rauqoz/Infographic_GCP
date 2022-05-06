import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { delete_account_ } from '../Middlewares/Requests/Axios';
import { SUser } from './Style/User.style';

const User = () => {
	const navigate = useNavigate();
	const { state } = useLocation();

	const submit_ = async ({ nick }) => {
		try {
			await delete_account_({ nick });
			alert(`Account ${nick} Removed`);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SUser>
			{state ? (
				<div>
					<h2>Hello {state.nick}</h2>
					<button
						type="button"
						className="btn-default btn"
						name="button-2"
						access="false"
						id="button-2"
						onClick={() => navigate('/')}
					>
						Back to Home
					</button>
					<button
						type="button"
						className="btn-default btn"
						name="button-2"
						access="false"
						id="button-2"
						onClick={() => submit_({ nick: state.nick })}
					>
						Delete My Account
					</button>
				</div>
			) : (
				<div>
					<h2>First Login D:</h2>
					<button
						type="button"
						className="btn-default btn"
						name="button-2"
						access="false"
						id="button-2"
						onClick={() => navigate('/')}
					>
						Go!
					</button>
				</div>
			)}
		</SUser>
	);
};

export default User;
