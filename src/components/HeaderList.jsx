import './styled-components/user-list.css';
import { GrBarChart, GrCertificate } from "react-icons/gr";


const HeaderList = () => {
    return (
        <li className="user-info">
            <GrBarChart/>
            <div className="caption">
                <span>Студент</span>
                <span>Домашки/Баллы</span>
                <GrCertificate />
            </div>
        </li>
    )
}

export default HeaderList;