import * as React from 'react';
import { FLUX } from './HeaderData';
import PersonIcon from '@mui/icons-material/Person';
import CampaignIcon from '@mui/icons-material/Campaign';
import Search from '../Search/Search';

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
	return (
		<header>
			{FLUX}
			<Search />
			{NoticeIcon()}
			{AccountIcon()}
		</header>
	);
};

export default Header;
