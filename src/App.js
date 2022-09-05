import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { useQuery } from '@apollo/client';
import {DivApp, LoadingApp } from './StyleComponents'
import continents from './components/continents'
import GET_NAME_COUNTRIES from './components/querys'

export default function App() {
  const {loading, error, data} = useQuery(GET_NAME_COUNTRIES)
  const [countrie, setCountrie] = useState(data)
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    setCountrie(data?.countries)
  }, [loading])
  
  useEffect(() => {
    if(continents[filter]){
      let newData = data?.countries.filter(e => e.continent.name === filter)
      setCountrie(newData)
    }
    if(filter === 'All') setCountrie(data?.countries)
  }, [filter])

  if(error) return <p>error</p>

  const getCountrie = (name) => {
    if(data?.countries.length > 0){
      setCountrie(data?.countries.filter(e => e.name.toLowerCase().split('').splice(0, name.length).join('') === name))
    }
  }

  return (
    <DivApp>
      <NavBar searchByName={getCountrie} filter={setFilter}/>
      {
        loading ? <LoadingApp>Loading...</LoadingApp> : <Home data={countrie} filter={filter}/>
      }
    </DivApp>
  );
}
