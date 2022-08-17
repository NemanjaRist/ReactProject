import { useState } from "react";
import Select from 'react-select';

function SortingCards(props){
    const [option,setOption] = useState(0);

    const options = [
        { value: '1', label: 'Lowest first' },
        { value: '2', label: 'Highest first' }
      ];

    console.log(option);

    const choosingOption = (options) => {

        setOption(options.value);
        props.onSetValue(options.value);
    }

    return(
        <Select className="card" options = {options} onChange={choosingOption}/>
    );

    

    /*return(
    <form className="card" onLoad={onSubmitOptions}>
    <label htmlFor="options">Sort temperature: </label>
    <select className="btn2" id="options" name="options" onChange={choosingOption}>
        <option value='1'>min to max</option>
        <option value='2'>max to min</option>
    </select>
    </form>
    );*/
}
export default SortingCards;