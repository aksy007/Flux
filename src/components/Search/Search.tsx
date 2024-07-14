import React, { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styles from './Search.module.scss';

const Search: React.FC = () => {
	const [input, setInput] = useState<string>('');
	return (
		<div className={styles.container}>
			<SearchOutlinedIcon />
		</div>
	);
};

export default Search;
