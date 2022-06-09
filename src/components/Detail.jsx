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
`
const DIVstats = styled.div`
    position: absolute;
    width: 278px;
    height: 64px;
    left: 75px;
    top: 522px;
    border-radius: 20px;
    display: flex;
`

const Product = () => {
    const { pathname } = useLocation()
    const location = pathname.slice(9, pathname.length)

    const [data, setData] = useState([])

    const getting = async () => {
        let value = await GetData("usuarios/id" + location)
        setData(value[0])
    }

    useEffect(() => {
        getting()
    }, [])

    return (
        <div>
            <BackButton />
            <div>
                <IMGD src={data.foto1} alt="" />
            </div>
            <DIVstats>
                <img src={data.profile} alt="" />
                <h6>{data.name}</h6>
                <div><img src={like} alt="" /><span>108K</span></div>
                <div><img src={comment} alt="" /><span>54K</span></div>
                <div><img src={share} alt="" /><span>2K</span></div>
            </DIVstats>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet gravida tortor in habitant pellentesque a quisque. Nisl diam, amet eu est libero dignissim donec nec. Fames bibendum porta phasellus neque. Integer et lectus amet, vitae facilisis laoreet feugiat pellentesque accumsan. Turpis eget laoreet turpis urna tincidunt nisl, integer nisl. Id nec tortor vel, dui, lectus. Donec consequat dolor cursus sed pellentesque etiam ipsum, id quam. Tincidunt eu duis ullamcorper posuere augue. Arcu senectus elit, semper diam porta. Platea tempus augue ante pellentesque dictum sed vitae. Auctor dui ac bibendum lacus.</p>
            <div style={{ display: "flex", padding: "1rem" }}>
                <img src="" alt="" />
                <input type="text" placeholder='Write comment as ' />
                <img src={enter} alt="" />
            </div>
        </div>
    )
}

export default Product