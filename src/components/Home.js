import React, { useEffect, useState } from 'react'
import {DivContainCards, DivCard,CardCountinentImg, DivCardImage, InfoCardCountinent, DivInfoCard, DivIconCard, IconCard, InfoCard, ImageCard, LenguageCard, NameCard, Lenguage} from '../StyleComponents'
import backgound from '../assets/background.jpg'
import { findFlagUrlByIso2Code } from "country-flags-svg";
import continents from './continents'

export default function Home({data, filter}) {
    const [country, setCountry] = useState([])

    useEffect(() => {
            setCountry(data)
    }, [data]) 
    
     return (
        <DivContainCards>
            {
                country?.map((e, i) => 
                <DivCard className="text-sm font-bold underline bg-black" key={i}>
                    <DivCardImage>
                        <ImageCard src={backgound} alt='Not found'></ImageCard>
                        <LenguageCard>
                            {
                                filter === 'len' ? e.languages.map((l, i) => <Lenguage key={i}>{l.name}</Lenguage>) :
                                <Lenguage>{e.continent.name}</Lenguage>
                            }
                        </LenguageCard>
                        <DivIconCard>
                            <IconCard src={findFlagUrlByIso2Code(e.code)} alt='Not found'/>
                        </DivIconCard>
                    </DivCardImage>
                    <DivInfoCard>
                        <NameCard>{e.name}</NameCard>
                        <InfoCardCountinent>
                            <div>
                                <InfoCard>Native: {e.native}</InfoCard>
                                <InfoCard>Capital: {e.capital}</InfoCard>
                                <InfoCard>Code: {e.code}</InfoCard>
                                <InfoCard>Currency: {e.currency}</InfoCard>
                                <InfoCard>Phone: +{e.phone}</InfoCard>
                            </div>
                            <div>
                                <InfoCard>{e.continent.name}</InfoCard>
                                <CardCountinentImg src={continents[e.continent.name]} alt='Not found'/>
                            </div>
                        </InfoCardCountinent>
                    </DivInfoCard>
                </DivCard>
                )            
            } 
        </DivContainCards>
    )
}
