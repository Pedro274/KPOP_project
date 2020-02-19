import React from 'react';
import './cards.css';
import Card from './Card/card'

const cards = (props) => props
    .arrOfKpopVideos
    .map((card, index) => <Card
        key={index}
        title={card.name}
        frame={card.youTubeEmbeddedVideoLink}
        delete={() => props.delete(index)}/>)

export default cards;
