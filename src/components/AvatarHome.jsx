import { Avatar, Stack } from "@mui/material";

export const AvatarHome = ({ data }) => {
  return (
    <div>
      <Stack direction="row" spacing={2} className="avatars">
        <Avatar alt="+" src="story">
          +
        </Avatar>
        <Avatar alt={data[0]?.name} src={data[0]?.perfil} />
        <Avatar alt={data[1]?.name} src={data[1]?.perfil} />
        <Avatar alt={data[2]?.name} src={data[2]?.perfil} />
        <Avatar alt={data[3]?.name} src={data[3]?.perfil} />
      </Stack>
      <div className="avatar-title">
        <span>Your Story</span>
        <span>{data[0]?.name}</span>
        <span>{data[1]?.name}</span>
        <span>{data[2]?.name}</span>
        <span>{data[3]?.name}</span>
      </div>
    </div>
  );
};
