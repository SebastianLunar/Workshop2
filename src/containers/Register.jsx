import { Box, Button, Input } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const url = "https://equipo5workshop2.herokuapp.com/usuarios"
    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: '',
        perfil:''
    }
    )

    // const getData = async () => {
    //     const resp = await fetch(url)
    //     const data = await resp.json()
    //     setUsers(data)
    //     console.log(data)
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    const handleChange = ({ target }) => setUsers({
        ...users,
        [target.name]: target.value
    })
    const reset = () => setUsers('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, users)
            .then(() => reset())
            alert('Registrado')
    }

    
    return (
        <div>

            <div>
                <div>
                    {/* <img src={PersonOutlineIcon} alt="" /> */}
                </div>
                <h1 style={{ textAlign: "center" }}>Crea tu cuenta</h1>
                <form onSubmit={handleSubmit}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, m: 5 }}>

                        <Input
                            size="sm"
                            name='name'
                            onChange={handleChange}
                            value={users.name}
                            placeholder="Nombre Completo"
                            type="text"

                        />
                        <Input
                            name='email'
                            value={users.email}
                            size="sm"
                            onChange={handleChange}
                            placeholder="Email"
                            type="email"

                        />
                        <Input
                            name='password'
                            value={users.password}
                            size="sm"
                            placeholder="Password"
                            type="password"
                            onChange={handleChange}
                        />
                        <Button type='submit' variant="outlined">Registrar</Button>
                        <Link to="/">Ya tienes cuenta? Entra aquí</Link>
                    </Box>
                </form>

            </div>
        </div>
    );
};

export default Register;