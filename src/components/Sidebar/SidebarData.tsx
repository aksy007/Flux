import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const ORGANISATION_NAME: string = 'Monarch';

export interface ProjectListType {
	name: string;
	owner: string;
	id: number;
}

export interface UserOptionType {
	icon: React.FC;
	option: string;
	link: string;
}

const InitialProject: ProjectListType = {
	name: '',
	owner: '',
	id: 0,
};

const UserOptions: UserOptionType[] = [
	{
		icon: AssignmentIcon,
		option: 'Issues',
		link: '/issues',
	},
	{
		icon: GroupsIcon,
		option: 'Team',
		link: '/team',
	},
	{
		icon: RocketLaunchIcon,
		option: 'Releases',
		link: '/releases',
	},
];

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

export { ORGANISATION_NAME, InitialProject, ProjectList, UserOptions };
