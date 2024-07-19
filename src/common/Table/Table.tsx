import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TablePagination,
	Paper,
} from '@mui/material';

interface Column {
	id: string;
	label: string;
	minWidth?: number;
	align?: 'right' | 'left' | 'center';
}

interface CustomTableProps {
	columns: Column[];
	rows: any[];
	extraHeadRow?: React.ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({
	columns,
	rows,
	extraHeadRow,
}) => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table
					stickyHeader
					aria-label='custom table'
				>
					<TableHead>
						{extraHeadRow && (
							<TableRow>
								<TableCell colSpan={columns.length}>{extraHeadRow}</TableCell>
							</TableRow>
						)}
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column?.align}
									style={{ minWidth: column?.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, index) => (
								<TableRow
									hover
									role='checkbox'
									tabIndex={-1}
									key={index}
								>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell
												key={column.id}
												align={column.align}
											>
												{value}
											</TableCell>
										);
									})}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component='div'
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};

export default CustomTable;
