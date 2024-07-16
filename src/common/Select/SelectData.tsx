export type DropdownOption = {
	id: number;
	name: string;
	owner: string;
	// Add other properties as needed
};

export interface SelectDropdownProps<T> {
	DropdownList: T[];
	DropdownLabel: string;
	customClass?: string;
}
