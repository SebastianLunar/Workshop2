import { useEffect, useState } from "react";
import axios from "axios";
import { CardHome } from "../components/CardHome";
import { AvatarHome } from "../components/AvatarHome";
import { NavbarTopHome } from "../components/NavbarTopHome";

export const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://equipo5workshop2.herokuapp.com/usuarios"
    );
    return response.data;
  };

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <>
      <NavbarTopHome />
      <AvatarHome data={data} />
      <CardHome data={data} />
    </>
  );
};
