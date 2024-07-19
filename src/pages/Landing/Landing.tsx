// Page To create, select Projects
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingPageProps, useLandingPageData } from './LandingData';
import NoProjectAccess from './partials/NoProjectAccess/NoProjectAccess';
import ProjectCards from './partials/ProjectCards/ProjectCards';
import Button from '../../common/Button/Button';
import styles from './Landing.module.scss';

const LandingPage: React.FC<LandingPageProps> = () => {
	const { userAuthorisedProjects, hasProjectAccess } = useLandingPageData();
	const navigate = useNavigate();
	const handleCreateNewProject = () => {
		// TODO: Navigate to new project page
		navigate('/new-project');
	};
	return hasProjectAccess ? (
		<>
			<div className={styles.createProjectBtn}>
				<Button
					onClick={handleCreateNewProject}
					btnText='Create New Project'
				/>
			</div>
			<ProjectCards userAuthorisedProjects={userAuthorisedProjects} />
		</>
	) : (
		<NoProjectAccess handleCreateNewProject={handleCreateNewProject} />
	);
};

export default LandingPage;
