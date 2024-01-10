import React from 'react';
import 'styles/common-components/button.css';

const Button = ({
	size = 'default',
	type = 'submit',
	disable = false,
	children,
}) => {
	return (
		<button
			className={`button-custom button-${size}`}
			type={type}
			disabled={disable}>
			{children}
		</button>
	);
};

export default Button;
