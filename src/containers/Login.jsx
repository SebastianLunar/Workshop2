import { Box, Button, IconButton, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { Link, useNavigate } from 'react-router-dom';
import { Button1 } from '../style/styles';

const Login = () => {
    const url ="https://equipo5workshop2.herokuapp.com/usuarios"
    const [users, setUsers] = useState([])

    const navigate = useNavigate();


    const getData = async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, [])

    const errors = {
        uname: "usuario mal",
        pass: "contraseña mal",
    }

    const handleSubmit = (e) => {
        const {uname, pass} = document.forms[0]
        const user = users.find((item) => item.email == uname.value)
        if(user){
            if(user.password !== pass.value){
                alert("Contraseña Incorrecta")
            }else{
                localStorage.setItem('infoUser', JSON.stringify(user))
                navigate('/home')//redirecciona a HOME
                alert('Bienvenido')
            }
        }else{
            alert('Error, usuario no existe.')
        }
    
    }
    

    return (
        <div>
            <div>
                <img src={PersonOutlineIcon} alt="" />
            </div>
            <h1 style={{textAlign:"center"}}>Login</h1>
            <form onSubmit={handleSubmit}>
            
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, m:5 }}>

                    
                    <Input
                        size="sm"
                        name="uname"
                        placeholder="Email"
                        type="email"
                       
                    />
                    <Input
                        size="sm"
                        name="pass"
                        startDecorator={<KeyRoundedIcon />}
                        placeholder="Password"
                        type="password"
                        endDecorator={
                            <IconButton color="neutral" size="sm">
                                <VisibilityRoundedIcon />
                            </IconButton>
                        }
                    />
                    <Button1 type='submit'  variant="outlined">Entrar</Button1>
                    <Link to="/register">No tienes cuenta? Registrate aquí</Link>
                </Box>
               
            </form>
         
        </div>
    );
};

export default Login;
