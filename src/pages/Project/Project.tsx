import Button from '../../common/Button/Button';
import CustomTable from '../../common/Table/Table';
import Search from '../../components/Search/Search';
import styles from './Project.module.scss';
import { ProjectPageProps, useProjectPageData } from './ProjectData';
import { columns, rows } from './ProjectMockData';

const Project: React.FC<ProjectPageProps> = () => {
	const { handleCreateIssue, handleIssueSearch } = useProjectPageData();
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Search
					placeholderText={'Search Projects, Issues'}
					handleSerch={handleIssueSearch}
					height={'36px'}
				/>
				<Button
					onClick={handleCreateIssue}
					btnText='Create New Issue'
				/>
			</div>
			<div className={styles.main}>
				<CustomTable
					columns={columns}
					rows={rows}
					extraHeadRow={<div>Extra Header Content</div>}
				/>
			</div>
		</div>
	);
};

export default Project;
