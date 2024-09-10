import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
	btnText: string;
	onClick: () => void;
	disabled?: boolean;
	variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
	btnText,
	onClick,
	disabled = false,
	variant = 'primary',
}) => {
	return (
		<button
			className={`${styles.btn} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
			disabled={disabled}
			onClick={onClick}
		>
			{btnText}
		</button>
	);
};

export default Button;
