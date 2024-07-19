import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styles from './Search.module.scss';

const INPUT_PLACEHOLDER = 'Search Project, Issues...';
const Search: React.FC = () => {
	const [input, setInput] = useState<string>('');
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};
	const handleIconClick = () => {
		// Add search logic
		console.log('Search icon clicked!');
	};
	return (
		<div className={styles.container}>
			<input
				type='text'
				placeholder={INPUT_PLACEHOLDER}
				value={input}
				onChange={handleInputChange}
				className={styles.search}
			/>
			<SearchOutlinedIcon
				className={styles.customSearchIcon}
				onClick={handleIconClick}
			/>
		</div>
	);
};

export default Search;
