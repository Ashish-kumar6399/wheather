import React, { useEffect, useState } from "react";

const Tempapp =() =>{

    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Delhi");

    useEffect( ()=>{
        const fetchApi =async() =>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=684511f00211a117e2afda87a40540ec`
            const response=await fetch(url);
           // console.log(response);
            const resJson=await response.json();
           setCity(resJson.main);
        }
        fetchApi();
    },[search]) 

    return(
        <>
       <div  className="box">
        <div  className="inputData">
            <input type="search" 
            value={search}
            className="inputField"
            onChange={ (event)=> {
         setSearch(event.target.value)
            }} />
            </div>

            {
                !city ?(
                    <p className="errorMsg">NO data Found</p>
                ): (
                  
             <div>      
       <div className="info">
         <h2 className="location">
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>

        <h1 className="temp">
        {city.temp}°c</h1>
        <h3 className="tempmin_max">min :{city.temp_min}°c | max :{city.temp_max}°c</h3>
        
       </div>

       <div className="wave-one"></div>
       <div className="wave-two"></div>
       <div className="wave-three"></div>
              </div>
                )}
 
       
      
       </div>
        </>
    )
}
export default Tempapp;