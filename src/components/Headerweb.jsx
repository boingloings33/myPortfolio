import { Typography, Stack } from "@mui/material";
import ConsoleBio from "./ConsoleBio";

function Headerweb() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Stack spacing={2}>
          <Typography variant="h1"> > Brenden Baio</Typography>
          <Typography variant="body2">
            I love building awesome websites and learning all things programming
            :)
          </Typography>
        </Stack>
        <img
          src="/me2.png"
          style={{
            objectFit: "cover",
            backgroundColor: "#F3D3BD",
            borderRadius: 600,
            width: 160,
            height: 160,
          }}
        />
      </Stack>
      <ConsoleBio />
    </Stack>
  );
}

export default Headerweb;
