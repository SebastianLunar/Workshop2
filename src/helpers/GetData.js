import axios from 'axios'

export const GetData = async (request) => {
    const { data } = await axios.get("https://equipo5workshop2.herokuapp.com/"+request);
    return data;
}