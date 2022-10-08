import "./App.css";
import { MdHelpOutline as HelpIcon } from "react-icons/md";
import users from "./data/db.js";
import getGrade from "./utils/constants.js";
import HeaderList from "./components/HeaderList";
import UserList from "./components/UserList";



function App() {
    
    const usersList = users
        .map((user) => {
            return { ...user, score: user.homeworks.reduce((p, c) => p + c, 0) };
        })
        .sort((a, b) => b.score - a.score);

    
    return (
        <div className="container">
            <div className="wrapper">
                <div className="rating-title">
                    <h3>Рейтинг группы</h3>
                    <button className="help-btn">
                        <HelpIcon />
                    </button>
                </div>
                <ol className="rating-list">
                    <HeaderList />
                    {usersList.map((user, i) => (
                        <UserList
                            key={i}
                            name={user.name}
                            img={user.img}
                            homeworks={user.homeworks.length}
                            score={user.score}
                            grade={getGrade(user.score)}
                        />
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default App;
