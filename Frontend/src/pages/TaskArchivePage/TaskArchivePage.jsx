import { useHistory } from 'react-router-dom';
import './TaskArchivePage.css';
import {Tasks} from "../../components/Tasks/Tasks";

export const TaskArchivePage = () =>{
    const history = useHistory();
    const goBackHandler = (e) => {
        e.preventDefault();
        history.goBack()
    }

    return (
        <div className="page-container">
            <div className="back-btn">
                <button className="waves-effect waves-light btn-flat" onClick={goBackHandler} >
                    Back
                </button>
            </div>
            <h5 className="page-title">Task Archive</h5>
            <Tasks />
        </div>
    )
}
