import React from 'react'
import { DivFilters, ButtonFilters, H2Filters, DivButtonFilters, SelectFilters} from '../StyleComponents'

export default function Filters({filter}) {
  function handlrOnClick(name){
    filter(name)
  }
  return (
        <DivFilters>
            <H2Filters>Group by:</H2Filters>
            <DivButtonFilters>
                <ButtonFilters onClick={() => handlrOnClick('con')}>Continent</ButtonFilters>
                <ButtonFilters onClick={() => handlrOnClick('len')}>Lenguage</ButtonFilters>
                <SelectFilters name="select" onChange={(e) => handlrOnClick(e.target.value)}>
                  <option disabled>Select</option>
                  <option value="All">All</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Europe">Europe</option>
                  <option value="South America">South America</option>
                  <option value="North America">North America</option>
                  <option value="Antarctica">Antarctica</option>
                </SelectFilters>
                <SelectFilters name="select" onChange={(e) => handlrOnClick(e.target.value)}>
                  <option disabled>Order</option>
                  <option value="Az">Az</option>
                  <option value="Za">Za</option>
                </SelectFilters>
            </DivButtonFilters>
        </DivFilters>
  )
}
