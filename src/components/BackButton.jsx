import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../assets/Back.png'
import styled from 'styled-components'

const IMGBACK = styled.img`
    box-sizing: border-box;
    position: absolute;
    width: 0.5rem;
    left: 1rem;
    top: 56px;
`

const BackButton = () => {
    const navigate = useNavigate()

    const Return = () => {
        navigate(-1)
    }
    return (
        <IMGBACK onClick={Return} src={back} alt="" />
    )
}

export default BackButton