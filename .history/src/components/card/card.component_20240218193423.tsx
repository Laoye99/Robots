import './card.styles.css';
import { Monster } from '../../App';
import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

type CardProps = {
        monster: Monster;
}

const Card = ({monster}: CardProps) => {
        const {id, name, email}= monster;

        return(
            <div className="card-container" key={id}>
            <img alt={`monster ${name}`} 
            src={`https://robohash.org/${id}?set=set1&size=180x180`} />
                 <h2>{name}</h2>
                 <p>{email}</p>
            </div>
);
        };

export default Card;a