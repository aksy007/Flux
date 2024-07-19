interface Column {
	id: string;
	label: string;
	minWidth?: number;
	align?: 'right' | 'left' | 'center';
}

const columns: Column[] = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'code', label: 'ISO Code', minWidth: 100 },
	{ id: 'population', label: 'Population', minWidth: 170, align: 'right' },
	{ id: 'size', label: 'Size (km²)', minWidth: 170, align: 'right' },
	{ id: 'density', label: 'Density', minWidth: 170, align: 'right' },
];

const rows = [
	{
		name: 'India',
		code: 'IN',
		population: 1324171354,
		size: 3287263,
		density: 402.1,
	},
	{
		name: 'China',
		code: 'CN',
		population: 1403500365,
		size: 9596961,
		density: 146.2,
	},
	{
		name: 'India',
		code: 'IN',
		population: 1324171354,
		size: 3287263,
		density: 402.1,
	},
	{
		name: 'China',
		code: 'CN',
		population: 1403500365,
		size: 9596961,
		density: 146.2,
	},
	// Add more rows as needed
];

export { columns, rows };
