import React from 'react';
import { NoProjectAccessProps } from '../../LandingData';
import Button from '../../../../common/Button/Button';
import styles from './NoProjectAccess.module.scss';

const NoProjectAccess: React.FC<NoProjectAccessProps> = ({
	handleCreateNewProject,
}) => {
	return (
		<div className={styles.container}>
			<div>
				<h2>No Projects Found</h2>
				<p>
					It looks like you don't have access to any projects yet. To get
					started, request access from your team leader.
				</p>
				<p>
					Once you have access, you'll be able to view and work on assigned
					projects.
				</p>
				<Button
					onClick={handleCreateNewProject}
					btnText='Create New Project'
				/>
			</div>
		</div>
	);
};

export default NoProjectAccess;
