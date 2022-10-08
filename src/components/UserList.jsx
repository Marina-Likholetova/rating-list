import UserModal from "./UserModal";
import "./styled-components/user-list.css";


const UserList = ({ name, img, homeworks, score, grade }) => {
    
    return (
        <li className="user-info">
            <a href="/">
                <div className="user-content">
                    <div className="user-photo">
                        <img src={img} alt={name} />
                    </div>
                    <div className="user-name">{name}</div>
                    <div className="user-score">
                        <UserModal score={score} amount={homeworks} />
                        <span>{homeworks}</span>
                        <span>{score}</span>
                    </div>
                    <div className={grade}></div>
                </div>
            </a>
        </li>
    );
};

export default UserList;
