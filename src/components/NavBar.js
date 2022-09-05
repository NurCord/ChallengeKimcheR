import React from 'react'
import {DivNavBar, H2NavBar, LogoNavBar, InputNavBar, DivNavBarSearch} from '../StyleComponents'
import Filters from './Filters';
import { UilSearchAlt } from '@iconscout/react-unicons';
import logo from '../assets/Logo.png';
export default function NavBar({searchByName, filter}) {
    function HandleOnChange(name){
        searchByName(name)
    } 

  return (
    <>
    <DivNavBar>
        <H2NavBar><LogoNavBar src={logo} alt='Not found'/></H2NavBar>
          <DivNavBarSearch>
            <InputNavBar 
                key='nameCountrie' 
                type='text' 
                name='nameCountrie' 
                placeholder='Search...'
                onChange={(e) => HandleOnChange(e.target.value)}
                />
              <UilSearchAlt style={{color: '#27292e', position: 'absolute', top: '0.3rem', left: '0.3rem'}}/>
          </DivNavBarSearch>
    </DivNavBar>
    <Filters filter={filter}/>
    </>
  )
}
