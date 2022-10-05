import './App.css';
import HeaderList from './components/HeaderList';
import UserList from './components/UserList';
import { users } from './components/helpers';
import { MdHelpOutline as HelpIcon} from "react-icons/md";


function App() {

  const usersList = users
      .map((user, i) => (
          <UserList
              key={i}
              name={user.name}
              img={user.img}
              homeworks={user.homeworks}
              score={user.homeworks.reduce((p, c) => p + c, 0)}
          />
      ))
      .sort((a, b) => b.props.score - a.props.score);


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
                  {usersList}
              </ol>
          </div>
      </div>
  );
}

export default App;
