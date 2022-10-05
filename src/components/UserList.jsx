import { matchScore } from "./helpers";
import UserModal from "./UserModal";
import "./styled-components/user-list.css";


const UserList = ({ name, img, homeworks, score }) => {
    return (
        <li className="user-info">
            <a href="/">
                <div className="user-content">
                    <div className="user-photo">
                        <img src={img} alt="avatar" />
                    </div>
                    <div className="user-name">{name}</div>
                    <div className="user-score">
                        <UserModal score={score} amount={homeworks.length} />
                        <span>{homeworks.length}</span>
                        <span>{score}</span>
                    </div>
                    <div className={matchScore(score)}></div>
                </div>
            </a>
        </li>
    );
};

export default UserList;
