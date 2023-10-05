import { Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import ConsoleBio from "./ConsoleBio";

function Headerweb() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack spacing={2} sx={{ px: { xs: 3, sm: 0 } }}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h1" sx={{ fontSize: { xs: 28, sm: 40 } }}>
              > Brenden Baio
            </Typography>
            {!isMobile && <img src="/fire.gif" style={{ width: 80 }} />}
            {isMobile && <img src="/fire.gif" style={{ width: 0 }} />}
          </Stack>
          <Typography variant="body2" sx={{ fontSize: { xs: 14, sm: 18 } }}>
            I love building awesome websites and learning all things programming
            :)
          </Typography>
        </Stack>
        {!isMobile && (
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
        )}
        {isMobile && (
          <img
            src="/me2.png"
            style={{
              objectFit: "cover",
              backgroundColor: "#F3D3BD",
              borderRadius: 600,
              width: 90,
              height: 90,
            }}
          />
        )}
      </Stack>
      <ConsoleBio />
    </Stack>
  );
}

export default Headerweb;
