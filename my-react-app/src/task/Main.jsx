import React, {useState} from 'react'
import Meal from './Meal'

const MainPage = () => {
  const [data,setData]=useState()
  const[search,setSearch]=useState()

    const handleInput = (e) => {
    setSearch(e.target.value)
  }
  const myFav= async () => {
    const get = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${search}');
    const jsonData =  await get.json();
    console.log(jsonData.meals);
    setData(jsonData.meals);
  }
  console.log(data)
  
  return (
    <div className='main-container'>
      <div className='search-container'>
        <input type='text' placeholder='Search for a recipe...' onChange={handleInput}/>
        <button onClick={myFav}>Search</button>
      </div>
      <div>
        <Meal detail={data}/>
      </div>
    </div>
  )
}

export default MainPage