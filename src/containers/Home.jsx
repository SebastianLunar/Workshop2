import { useEffect, useState } from "react";
import axios from "axios";
import { CardHome } from "../components/CardHome";
import { AvatarHome } from "../components/AvatarHome";
import { NavbarTopHome } from "../components/NavbarTopHome";
import { GetData } from "../helpers/GetData";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetData('usuarios').then((res) => {
      setData(res);
    });
  }, []);

  console.log(data);
  const jennie = data.find((item) => item.id === 1);
  const kim = data.find((item) => item.id === 3);
  console.log(jennie);
  console.log(kim);

  return (
    <>
      <NavbarTopHome />
      <AvatarHome data={data} />
      <CardHome data={jennie} />
      <CardHome data={kim} />
    </>
  );
};
