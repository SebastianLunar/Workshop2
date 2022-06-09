import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton'
import { GetData } from '../helpers/GetData'
import styled from 'styled-components';
import like from '../assets/like.png'
import comment from '../assets/comment.png'
import share from '../assets/share.png'
import enter from '../assets/enter.png'

const IMGD = styled.img`
    width: 100vw;
    border-radius: 30px;
    z-index: 0;
`
const DIVstats = styled.div`
    width: 278px;
    height: 64px;
    margin: 0 auto;
    margin-top: -32px;
    border-radius: 20px;
    display: flex;
    border: solid black;
    z-index: 1;
    position: relative;
    background: white;
    justify-content: space-evenly;
`
const Stats = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`

const Product = () => {
    const { pathname } = useLocation()
    const location = pathname.slice(9, pathname.length)

    const [data, setData] = useState([])

    const getting = async () => {
        let value = await GetData("usuarios/1")
        setData(value)
    }
    console.log(data.fotos[0])
    useEffect(() => {
        getting()
    }, [])

    return (
        <div>
            <BackButton />
            <div>
                <IMGD src={data.fotos[0].image} alt="" />
            </div>
            <DIVstats>
                <img src={data.perfil} alt="" />
                <h6>{data.name}</h6>
                <Stats><img src={like} alt="" /><br /><span>108K</span></Stats>
                <Stats><img src={comment} alt="" /><br /><span>54K</span></Stats>
                <Stats><img src={share} alt="" /><br /><span>2K</span></Stats>
            </DIVstats>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet gravida tortor in habitant pellentesque a quisque. Nisl diam, amet eu est libero dignissim donec nec. Fames bibendum porta phasellus neque. Integer et lectus amet, vitae facilisis laoreet feugiat pellentesque accumsan. Turpis eget laoreet turpis urna tincidunt nisl, integer nisl. Id nec tortor vel, dui, lectus. Donec consequat dolor cursus sed pellentesque etiam ipsum, id quam. Tincidunt eu duis ullamcorper posuere augue. Arcu senectus elit, semper diam porta. Platea tempus augue ante pellentesque dictum sed vitae. Auctor dui ac bibendum lacus.</p>
            <div style={{ display: "flex", padding: "1rem", width:"333px", border: "solid black", borderRadius: "20px" }}>
                <img src="" alt="" />
                <input type="text" placeholder='Write comment as ' />
                <img src={enter} alt="" />
            </div>
        </div>
    )
}

export default Product