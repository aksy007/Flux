import { useEffect, useState } from "react";
import { DATA} from "./NewProjectData";
import { useDispatch } from "react-redux";
import { ProjectList } from "../../pages/Landing/LandingData";
import { addProject } from "../../redux/actions";
import styles from './NewProject.module.scss';
import Button from "../../common/Button/Button";
import { getFormatedDate } from "../../common/util";

interface NewProjectProps {
    handleClose: () => void
}

const NewProject: React.FC<NewProjectProps> = ({ handleClose }) => {
    const dispatch = useDispatch();
    const [projectName, setProjectName] = useState<string>('');
    const [projectDescription, setProjectDescription] = useState('');
    const [validProjectData, setValidProjectData] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProjectName(e.target.value);
	};
      
    const handleDescriptionChange = (e: any) => {
        setProjectDescription(e.target.value);
    };

    const handleAddProject = (newProjectData: ProjectList) => {
        dispatch(addProject(newProjectData));
    };

    const handleCreateNewProject = () => {
        const data = {
            id: Math.random(),
            name: projectName,
            description: projectDescription,
            accessLevel: 'admin',
            owner: 'John Doe',
            lastUpdatedAt: getFormatedDate(new Date()).toString()
        };
        handleAddProject(data);
        handleClose();
    }
    
    useEffect(() => {
        if (projectName?.length > 0 && projectDescription?.length>0) {
            setValidProjectData(true);
        } else {
            setValidProjectData(false);
        }
    }, [projectName, projectDescription])

    return <div className={styles.container}>
        <div className={styles.projectName}>
            <span>{DATA.PROJECT_NAME}</span>
            <input
                type='text'
                placeholder={DATA.ENTER_PROJECT_NAME}
                value={projectName}
                onChange={handleInputChange}
                className={styles.projectNameInput}
            />
        </div>
        <div className={styles.textareaContainer}>
            <span>{DATA.PROJECT_DESCRIPTION}</span>
            <textarea 
                id="myTextarea"
                rows="4" 
                cols="50"
                value={projectDescription} 
                onChange={handleDescriptionChange}
            />
        </div>
        <div className={styles.btn}>
            <Button
                btnText={DATA.CREATE_NEW_PROJECT}
                onClick={handleCreateNewProject}
                disabled={!validProjectData}
            />
        </div>
    </div>;
}

export default NewProject;