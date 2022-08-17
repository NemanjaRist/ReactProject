function Card(props){

    const removeComponent = (event) => {
        const id = event.target.getAttribute("id");
        props.removeCard(props.currentState.filter(item => item.id != id));
        console.log(event);
        console.log(id);
      };

    return(
        <div className='card'>
            <h1>{props.text}</h1>
            <h1>{props.text1}</h1>
            <h1>{props.text2}</h1>
            <div className='actions'>
                <button className='btn' id={props.id} onClick={removeComponent}>Delete</button>
            </div>
        </div>
    );
}
export default Card;