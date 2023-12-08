import React from "react";

import { Typography, Box } from "@mui/material";
function ConsoleSkills() {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography sx={{ color: "white" }}>> Brenden.skills</Typography>

      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoJS.png), auto` },
        }}
      >
        ["JavaScript",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoHTML.png), auto` },
        }}
      >
        "HTML",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoCSS.png), auto` },
        }}
      >
        "CSS",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoREACT.png), auto` },
        }}
      >
        "React",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoMUI.png), auto` },
        }}
      >
        "MUI",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoMONGO.png), auto` },
        }}
      >
        "mongoDB",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoSQL.jpg), auto` },
        }}
      >
        "mySQL",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoNODE.png), auto` },
        }}
      >
        "node.js",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
        }}
      >
        "Express",
      </Typography>
      <Typography
        display="inline-block"
        sx={{
          color: "secondary.light",
          mr: 1,
          "&:hover": { cursor: `url(/logoGITHUB.png), auto` },
        }}
      >
        "gitHub"]
      </Typography>
    </Box>
  );
}

export default ConsoleSkills;
