import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
	DropdownOption,
	SelectDropdownProps,
	selectStyles,
} from './SelectData';
import styles from './Select.module.scss';

const SelectDropdown = <T extends DropdownOption>({
	DropdownList,
	DropdownLabel,
	customClass,
}: SelectDropdownProps<T>) => {
	const [selectedProjectId, setSelectedProjectId] = useState<string | ''>('');

	const handleChange = (event: SelectChangeEvent) => {
		const projectId = event.target.value as string;
		if (projectId) {
			setSelectedProjectId(projectId);
		}
	};

	return (
		<Box
			sx={selectStyles}
			className={customClass}
		>
			<FormControl fullWidth>
				<InputLabel id='dropdown-select-label'>Project</InputLabel>
				<Select
					labelId='dropdown-select-label'
					id='dropdown-select'
					value={selectedProjectId || ''}
					label={DropdownLabel}
					onChange={handleChange}
				>
					{DropdownList.map((option) => (
						<MenuItem
							value={option.id}
							key={option.id}
						>
							{option.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectDropdown;
