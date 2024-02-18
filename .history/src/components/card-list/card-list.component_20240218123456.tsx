import './card-list.styles.css';
import Card from "../card/card.component";
import { Monster } from '../../App';
import { type } from '@testing-library/user-event/dist/type';

type CardList

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card monster={monster}/>
        })}
        </div>
);


export default CardList;