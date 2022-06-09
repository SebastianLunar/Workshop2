import React from 'react';
import img from '../assets/img.jpg'
import img2 from '../assets/jeni.png'
import '../style/style.css'
import { DIV1, H1, IMG, P } from '../style/styles';

const Perfil = () => {
    return (
        <div >
            <div >
                <img  width={375} src={img} alt="" />
            </div>
            <DIV1>
            <div>
                <H1>10.7 M</H1>
                <P>Followers</P>
            </div>
            <div>
                
                <IMG   src={img2} alt="" />
                <H1>Jenni</H1>
                <P>J.Hello Guys</P>
                <P>Follow me and like my post</P>
            </div>
            <div>
                <H1>108.3 M</H1>
                <P>Likes</P>
            </div>
           
            </DIV1>
        </div>
    );
};

export default Perfil;
