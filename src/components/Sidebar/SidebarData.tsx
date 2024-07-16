const ORGANISATION_NAME: string = 'Monarch';

export interface ProjectListType {
	name: string;
	owner: string;
	id: number;
}

const InitialProject: ProjectListType = {
	name: '',
	owner: '',
	id: 0,
};

const ProjectList: ProjectListType[] = [
	{
		name: 'FLUX',
		owner: 'AksyK',
		id: 1,
	},
	{
		name: 'CRM',
		owner: 'AksyK',
		id: 2,
	},
];

export { ORGANISATION_NAME, InitialProject, ProjectList };
