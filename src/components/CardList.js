import Card1 from './Card1';

const CardList = props => {

    


    return (
    <div>
        
            {props.cards.map(card =>
                <div className='card2' key={card.id}>
                    
                    <Card1 text={card.cityDets} text1={card.weather} text2={card.temperature} id={card.id} currentState={props.currentState} removeCard={props.removeCard}/>
                    
                </div>
            )} 
        
    </div>   
    );
    
}
export default CardList;