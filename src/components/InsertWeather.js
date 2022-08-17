import { useState } from 'react';

function InsertWeather(props) {
    const [enteredName, setEnteredName] = useState('');

    const InsertTodoHandler = (event) => {
        
        event.preventDefault();
        if (enteredName.trim().length === 0) {
            return;
        }  
        props.onAddCard(enteredName);
        setEnteredName('');
        console.log(enteredName);
    };
    const insertingName = (event) => {
        setEnteredName(event.target.value);       
    };
    

    return (
        <form className="card" onSubmit={InsertTodoHandler}>
            <label htmlFor="name">City name: </label>
            <input id="name" type="text" value={enteredName} onChange={insertingName}/>
            <button className="btn1" onClick={props.onChangeSetI}>Insert</button>
        </form>
    );

}
export default InsertWeather;