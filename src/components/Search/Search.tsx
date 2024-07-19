import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styles from './Search.module.scss';

interface SearchProps {
	placeholderText?: string;
	handleSerch: () => void;
	width?: string | number;
	height?: string | number;
}

const Search: React.FC<SearchProps> = ({
	placeholderText = 'Search',
	handleSerch,
	width,
	height,
}) => {
	const [input, setInput] = useState<string>('');
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<div
			className={styles.container}
			style={{ width, height }}
		>
			<input
				type='text'
				placeholder={placeholderText}
				value={input}
				onChange={handleInputChange}
				className={styles.search}
				style={{ width, height }}
			/>
			<SearchOutlinedIcon
				className={styles.customSearchIcon}
				onClick={handleSerch}
			/>
		</div>
	);
};

export default Search;
