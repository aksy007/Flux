import React from 'react';
import { ProjectCardsProps, ProjectCardProps } from '../../LandingData';
import styles from './ProjectCards.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../common/Button/Button';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const navigate = useNavigate();

	const handleProjectClick = () => {
		// TODO: Navigate TO Project Home
		navigate(`/project/${project?.id}`);
	};

	return (
		<div
			className={styles.projectCard}
			onClick={handleProjectClick}
		>
			<span className={styles.projectCardName}>{project?.name}</span>
			<span className={styles.projectCardOwner}>Owner: {project?.owner}</span>
			<p className={styles.projectCardUpdatedAt}>
				<span>Last Updated: </span>
				<span className={styles.projectCardUpdatedDate}>
					{project?.lastUpdatedAt}
				</span>
			</p>
		</div>
	);
};

const ProjectCards: React.FC<ProjectCardsProps> = ({
	userAuthorisedProjects,
}) => {
	const navigate = useNavigate();
	const handleCreateNewProject = () => {
		// TODO: Navigate to new project page
		navigate('/new-project');
	};
	return (
	<>
		<div className={styles.projectCardList}>
			{userAuthorisedProjects.map((project) => (
				<ProjectCard
					key={project.id}
					project={project}
				/>
			))}
		</div>
		<div className={styles.newProject}>
		<Button
			onClick={handleCreateNewProject}
			btnText='Create New Project'
		/>
		</div>
	</>
	);
};

export default ProjectCards;
