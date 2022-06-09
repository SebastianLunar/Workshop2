import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { TbSend } from "react-icons/tb";

export const CardHome = ({ data }) => {
  return (
    <div style={{ padding: "20px 5px" }}>
      <div style={{ display: "flex", alignContent: "center", gap: "5px" }}>
        <img
          src={data[0]?.perfil}
          alt={data[0]?.name}
          style={{
            width: "24px",
            height: "24px",
            border: "1px solid var(--pink)",
            borderRadius: "50%",
          }}
        />
        <span style={{ fontWeight: "bold" }}>{data[0]?.name}</span>
      </div>
      <div style={{ padding: "10px 0 10px 5px" }}>
        <img
          src={data[0]?.portada}
          alt={data[0]?.name}
          style={{ width: "100%" }}
        />
        <div
          style={{
            fontSize: "30px",
            display: "flex",
            gap: "20px",
            margin: "5px 0",
          }}
        >
          <div className="icons-data">
            <AiOutlineHeart />
            <small>300K</small>
          </div>
          <div className="icons-data">
            <TbMessageCircle2 />
            <small>300K</small>
          </div>
          <div className="icons-data">
            <TbSend />
            <small>300K</small>
          </div>
        </div>
        <div style={{ margin: "10px 0" }}>
          <span
            style={{
              display: "inline",
              fontWeight: "bold",
              marginRight: "5px",
            }}
          >
            {data[0]?.name}
          </span>
          <p style={{ display: "inline", fontSize: "12px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            minima eaque dolores rerum sequi explicabo fugit deserunt eum, ipsam
            sapiente, accusantium modi. Tenetur optio necessitatibus explicabo,
            id eos facilis ea.
          </p>
        </div>
      </div>
    </div>
  );
};
