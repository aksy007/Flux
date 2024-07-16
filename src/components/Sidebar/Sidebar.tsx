import Logo from '../../assets/monarch_logo.png';
import SelectDropdown from '../../common/Select/Select';
import { ORGANISATION_NAME, ProjectList } from './SidebarData';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
	return (
		<div className={styles.container}>
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
			{/* Issue Team Releases Tab */}
		</div>
	);
};

export default Sidebar;
