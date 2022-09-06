/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { useQuery } from '@apollo/client';
import {DivApp, LoadingApp } from './StyleComponents'
import continents from './components/continents'
import GET_NAME_COUNTRIES from './components/querys'
import { SortArrayDown, SortArrayUp } from "./components/Function";

export default function App() {
  const {loading, error, data} = useQuery(GET_NAME_COUNTRIES)
  const [countrie, setCountrie] = useState(data)
  const [filter, setFilter] = useState(null)
  let dataC = data?.countries
  useEffect(() => {
    setCountrie(dataC)
  }, [loading])
  
  useEffect(() => {
    if(continents[filter]){
      let newData = dataC.filter(e => e.continent.name === filter)
      setCountrie(newData)
    }
    if(filter === 'All') setCountrie(dataC)
    if(filter === 'Az') setCountrie(countrie.slice().sort(SortArrayUp))
    if(filter === 'Za') setCountrie(countrie.slice().sort(SortArrayDown))
  }, [filter])

  if(error) return <p>error</p>

  const getCountrie = (name) => {
    if(dataC.length > 0){
      setCountrie(dataC.filter(e => e.name.toLowerCase().split('').splice(0, name.length).join('') === name))
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
