import styled from 'styled-components'

const theme = {
    greyDark: '#27292e',
    grey: '#aba59c',
    greyLigth: '#bdbdbd',
    white: '#f5f5f5',
    black: '#0c0c0c',
}

const size = {
    mobile: '700px',
    tablet: '1040px',
}

const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
};

const extendsFilter = `
    :hover{
        cursor: pointer;
        color: ${theme.greyDark};
        font-weight:bold;
        background-color: ${theme.grey};
    }
    :focus{
        cursor: pointer;
        color: ${theme.greyDark};
        font-weight:bold;
        background-color: ${theme.grey};
    }
    border: 1px solid ${theme.grey};
    color: ${theme.white};
    background-color: ${theme.greyDark};
    border-radius: 4rem;
    width: 8rem;
    height: 2rem;
    margin: 0rem 1rem;
`
const alignGrid = `
    display: grid;
    align-items: center;
    justify-items: center;
`
//App

export const DivApp = styled.div`
    background: ${theme.white};
    font-family: serif;
    width: 100%;
    height: 100vh;
`

export const LoadingApp = styled.div`
    display: grid;
    align-items: center;
    height: 60%;
    justify-items: center;
    font-size: larger;
    font-weight: bolder;
    color: ${theme.greyDark};
`

// Nav

export const DivNavBar = styled.div`
    background: ${theme.greyDark};
    display: grid;
    align-items: center;
    width: 100%;
    height: 4rem;
    grid-template-columns: 1fr 2fr;
    @media ${device.mobile}{
        grid-template-columns: 1fr;
    }
`

export const H2NavBar = styled.h2`
    font-size: larger;
    margin: 0rem 1rem;
    color: ${theme.greyDark};
`

export const LogoNavBar = styled.img`
    position: absolute;
    top: 0;
    height: 4.5rem;
    margin: 0rem;
`

export const InputNavBar = styled.input`
    border: 1px solid ${theme.black};
    height: 2rem;
    border-radius: 0.5rem;
    padding-left: 2rem;
    width: 25rem;
    @media ${device.mobile}{
        width: 100%;
    }
`

export const DivNavBarSearch = styled.div`
    display: flex;
    position: relative;
`

// filter

export const DivFilters = styled.div`
    background: ${theme.greyDark};
    border-top: 1px solid ${theme.grey};
    border-bottom: 1px solid ${theme.grey};
    width: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 2fr;
    @media ${device.mobile}{
        grid-template-rows: 1fr 2fr;
        grid-template-columns: 1fr;
    }
`

export const ButtonFilters = styled.button`
    ${extendsFilter}
    @media ${device.tablet}{
        margin: 0rem 0.2rem;
    }
`
export const SelectFilters = styled.select`
    ${extendsFilter}
    @media ${device.tablet}{
        margin: 0rem 0.2rem;
    }
    padding-left: 1rem;
`
export const H2Filters = styled.h2`
    color: ${theme.grey};
    font-size: larger;
    margin: 1rem 3rem;
    text-align: start;
    @media ${device.mobile}{
        font-size: medium;
        margin: 0.2rem 1.5rem;
        text-align: center;
    }
`

export const DivButtonFilters = styled.div`
    display: flex;
    @media ${device.mobile}{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }
`

//Cards
export const DivContainCards = styled.div`
    height: auto;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    ${alignGrid}
    @media ${device.tablet}{
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.mobile}{
        grid-template-columns: 1fr;
    }
`

export const DivCard = styled.div`
    background: ${theme.greyDark};
    margin: 1rem 0rem;
    border-radius: 0.5rem 0rem 0.5rem 0.5rem;
    height: 20rem;
    width: 18rem;
    ${alignGrid}
    grid-template-rows: 1fr 2fr;
    :hover{
        box-shadow: 10px 4px 20px;
        transition: 0.3s;
    }
`

export const DivCardImage = styled.div`
    width: 18rem;
    height: auto;
    position: relative;
`

export const ImageCard = styled.img`
    background-size: cover;
    border-radius: 0.5rem 0rem;
    overflow: hidden;
    width: 18rem; 
    opacity: 0.3;
`

export const LenguageCard = styled.div`
    position: absolute;
    top: 0rem;
    display: flex;
    max-height: 8rem;
    overflow-x: scroll;
    white-space: nowrap;
    flex-direction: column;
    justify-content: space-between;
    ::-webkit-scrollbar{
        display: none;
    }
`
export const Lenguage = styled.p`
    font-size: x-large;
    font-weight: bolder;
    color: ${theme.greyDark};
    border-radius: 0.5rem;
    background: rgb(255, 255, 255, 0.6);
    margin: 0.3rem 1rem;
    padding: 0.2rem;
`

export const DivIconCard = styled.div`
    position: absolute;
    top: 0.3rem;
    right: 1rem;
    width: 45px;
    height: 30px;
`

export const IconCard = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 45px;
    height: 30px;
`

export const DivInfoCard = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
`

export const InfoCardCountinent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CardCountinentImg = styled.img`
    width: 5rem;
    height: 5rem;
    right: 0rem;
    margin: 0rem 1rem;
    border-radius: 0.5rem 0rem;
`

export const NameCard = styled.h2`
    font-size: x-large;
    font-weight: bold;
    margin: 0rem 1rem;
    overflow: hidden;
    height: 4rem;
    max-height: 4rem;
    color: ${theme.greyLigth};
`

export const InfoCard = styled.p`
    font-size: small;
    margin: 0rem 0.4rem;
    color: ${theme.greyLigth};
    width: 9rem;
    overflow: hidden;
`

export const ContinentCard = styled.p`
    font-size: small;
    margin: 0rem 1rem;
    color: ${theme.greyLigth};
`
