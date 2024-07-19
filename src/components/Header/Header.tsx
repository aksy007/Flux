import * as React from 'react';
import { FLUX } from './HeaderData';
import PersonIcon from '@mui/icons-material/Person';
import CampaignIcon from '@mui/icons-material/Campaign';
import Search from '../../common/Search/Search';
import styles from './Header.module.scss';

const AccountIcon = () => {
	const handleAccountCLick = () => {
		// TODO: Navigate to account page
		console.log('Account Clicked');
	};
	return <PersonIcon onClick={handleAccountCLick} />;
};

const NoticeIcon = () => {
	const handleAccountCLick = () => {
		// TODO: Open  Notice popup
		console.log('Notice Clicked');
	};
	return <CampaignIcon onClick={handleAccountCLick} />;
};

const Header: React.FC = () => {
	const handleLogoClick = () => {
		// navagate to home page
	};

	return (
		<div className={styles.container}>
			<header onClick={handleLogoClick}>{FLUX}</header>
			<div>
				<Search />
				<NoticeIcon />
				<AccountIcon />
			</div>
		</div>
	);
};

export default Header;
