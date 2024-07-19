import { useEffect, useState } from 'react';
import { MockProjectsList } from './LandingPageMockData';

// interface
export interface ProjectList {
	id: number;
	name: string;
	accessLevel: string;
	owner: string;
	lastUpdatedAt: string;
}
export interface LandingPageProps {}
export interface NoProjectAccessProps {
	handleCreateNewProject: () => void;
}
export interface ProjectCardsProps {
	userAuthorisedProjects: ProjectList[];
}
export interface ProjectCardProps {
	key: number;
	project: ProjectList;
}

// custom hooks
const useLandingPageData = () => {
	const [userAuthorisedProjects, setUserAuthorisedProjects] = useState<
		ProjectList[]
	>([]);
	const [hasProjectAccess, setHasProjectAccess] = useState<boolean>(false);

	useEffect(() => {
		// Fetch Projects which user has access to
		// TODO: Update this to set data from api

		if (MockProjectsList?.length > 0) {
			setUserAuthorisedProjects(MockProjectsList);
			setHasProjectAccess(true);
		} else {
			setUserAuthorisedProjects([]);
			setHasProjectAccess(false);
		}
	}, []);

	return { userAuthorisedProjects, hasProjectAccess };
};

export { useLandingPageData };
