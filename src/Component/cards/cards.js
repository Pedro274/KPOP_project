import React from 'react';
import './cards.css';
import Card from './Card/card'

const cards = (props) => props
    .arrOfKpopVideos
    .map((card, index) => <Card title={card.name} frame={card.youTubeEmbeddedVideoLink}/>)

export default cards;
