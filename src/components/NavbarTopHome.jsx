import logo from "../assets/images/LOGOLOGO3.png";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessages } from "react-icons/tb";

export const NavbarTopHome = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "5px 10px",
      }}
    >
      <img src={logo} alt="logo" />
      <div
        style={{
          fontSize: "25px",
          display: "flex",
          gap: "20px",
          paddingTop: "5px",
        }}
      >
        <AiOutlineHeart />
        <TbMessages />
      </div>
    </div>
  );
};
