import './App.css';
import InsertWeather from './components/InsertWeather';
import CardList from './components/CardList';
import SortingCards from './components/SortingCards'
import { useState } from 'react';

function App() {
  const [i, setI] = useState(0);
  const [weather, setWeather] = useState([]);

  const key = 'CrhVZqTUTuPnYCOR9YVyDQ8FcsAxPCCL';

  const getCity = async (name) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${name}`;

    const response = await fetch(base + query, { mode: "cors" });
    const data = await response.json();

    console.log(name);

    return data[0];
  };

  const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
  };

  const onsetWeather = async (name) => {

    const cityDets = await getCity(name);
    const weather = await getWeather(cityDets.Key);

    console.log(cityDets.EnglishName);
    console.log(weather.WeatherText);
    console.log(weather.Temperature.Metric.Value);

    setWeather((previousWeather) => {
      return [
        ...previousWeather,
        {
          cityDets: cityDets.EnglishName,
          weather: weather.WeatherText,
          temperature: weather.Temperature.Metric.Value,
          id: i
        }
      ]
    });
  };



  const changeSetI = () => {
    setI(i + 1);
  };


  const handleSort= option =>{
    if(option === '1')
    {
    const sortedData = [...weather].sort((a,b)=>{
      return a.temperature > b.temperature ? 1 : -1
    })
    setWeather(sortedData);
    }
    else if(option === '2')
    {
      const sortedData = [...weather].sort((a,b)=>{
        return a.temperature > b.temperature ? -1 : 1
      })
      setWeather(sortedData);
      }
  }



  return (
    <div className='MainDiv'>
      <table>
        <tr>
          <th><InsertWeather onAddCard={onsetWeather} onChangeSetI={changeSetI} /></th>
          <p className='spaceBetweenTh'></p>
          <th><SortingCards onSetValue = {handleSort} /></th>
        </tr>
      </table>
        <div className='CardList1'>
          <div className='card2'><CardList cards={weather} currentState={weather} removeCard={setWeather} /></div> 
        </div>
      
      
    </div>
  );
}

export default App;
