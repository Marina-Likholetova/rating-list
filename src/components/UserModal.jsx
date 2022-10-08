import "./styled-components/user-modal.css";


const ScoreModal = ({ score, amount }) => {
    
    return (
        <ul className="user-modal">
            <li>Выполнено ДЗ: {amount}</li>
            <li>Пересдач: {0}</li>
            <li>Всего баллов: {score}</li>
        </ul>
    );
};

export default ScoreModal;
