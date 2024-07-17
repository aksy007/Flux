import React, { useEffect, useState } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Logo from '../../assets/monarch_logo.png';
import SelectDropdown from '../../common/Select/Select';
import { ORGANISATION_NAME, ProjectList, UserOptions, UserOptionType } from './SidebarData';
import styles from './Sidebar.module.scss';


const UserOptionList: React.FC= () => {
	const handleOptionClick = (option: UserOptionType) => {
		// TODO: Handle Option Click
		console.log('first', option);
	}
	return (
		<div className={styles.optionsList}>
			{
				UserOptions?.map((option, index) => (
					<div key={index} className={styles.option} onClick={() => handleOptionClick(option)}>
						<span>{<option.icon />}</span>
						<span>{option.option}</span>
					</div>
				))
			}
		</div>
	)
}

const Sidebar: React.FC = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
	const [isContentHidden, setIsContentHidden] = useState<boolean>(true);

	const handleSidebarDisplay = () => {
		setIsContentHidden(true);
		setIsSidebarOpen(!isSidebarOpen);
	}

	useEffect(() => {
		if (isContentHidden) {
		const timeoutId = setTimeout(() => {
			setIsContentHidden(false);
		}, 300);

		return () => clearTimeout(timeoutId);
		}
	}, [isSidebarOpen, isContentHidden]);

	return (
		<div className={isSidebarOpen ? styles.containerOpen : styles.containerClosed}>
			{isSidebarOpen && !isContentHidden  ? <>
				<div className={styles.organisation}>
					<img
						src={Logo}
						className={styles.logo}
					/>
					<span>{ORGANISATION_NAME}</span>
				</div>
				<SelectDropdown
					DropdownList={ProjectList}
					DropdownLabel='Project'
					customClass={styles.dropdown}
				/>
				<UserOptionList />
			</> 
			: !isSidebarOpen && (
				<img
				  src={Logo}
				  className={styles.logo}
				/>
			  ) 
			}
			<div className={styles.arrowIcon}>
				{
					isSidebarOpen 
					? <KeyboardDoubleArrowLeftIcon onClick={handleSidebarDisplay}/> 
					: <KeyboardDoubleArrowRightIcon onClick={handleSidebarDisplay} />
				}
			</div>
		</div>
	);
};

export default Sidebar;
